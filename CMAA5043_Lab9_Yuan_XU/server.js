// ─── Lab 9: Multiplayer Tank Battle WebSocket Server ───────────────────────
// Supports 2 human players + a chatbot agent that fills in when only 1 player
// is connected. Relays chat, game state, bullet hits, and HP events.

const WebSocket = require('ws');

const PORT = 8080;
const CANVAS_W = 800;
const CANVAS_H = 600;
const TANK_SIZE = 40;
const BULLET_SPEED = 8;
const BOT_SPEED = 1.8;
const BOT_FPS = 30;
const BOT_SHOOT_CHANCE = 0.025; // per frame at 30fps
const BOT_OPTIMAL_RANGE = 200;

const BOT_CHAT_LINES = [
  'Watch your six!',
  'I see you, soldier…',
  "Can't catch me!",
  'Your armour won\'t hold.',
  'Impressive moves, rookie.',
  'Is that all you\'ve got?',
  'Time to end this.',
  'Nice shot! Almost had me.',
  'Tactical retreat… just kidding.',
  'Boom! Did that land?',
  'You fight well. For a human.',
  'Scanning for target… acquired.',
  'Reloading… stay still, will you?',
  'Don\'t blink.',
];

const wss = new WebSocket.Server({ port: PORT });

// ─── Player registry ─────────────────────────────────────────────────────────
// id -> { ws, name, playerIndex (1 or 2), state: { x,y,angle,hp,bullets } }
const players = new Map();
let nextId = 1;

// ─── Bot state ───────────────────────────────────────────────────────────────
let bot = null;           // null when a second human is connected
let botLoopTimer = null;
let botChatTimer = null;

function initBot() {
  bot = {
    name: '🤖 Bot',
    x: CANVAS_W * 0.72,
    y: CANVAS_H * 0.5,
    angle: Math.PI,
    hp: 10,
    bullets: [],
    bulletIdCounter: 0,
  };
  startBotLoop();
  scheduleBotChat();
}

function destroyBot() {
  bot = null;
  if (botLoopTimer) { clearInterval(botLoopTimer); botLoopTimer = null; }
  if (botChatTimer) { clearTimeout(botChatTimer); botChatTimer = null; }
}

function scheduleBotChat() {
  if (!bot) return;
  const delay = 8000 + Math.random() * 14000; // 8–22 s
  botChatTimer = setTimeout(() => {
    if (!bot) return;
    const msg = BOT_CHAT_LINES[Math.floor(Math.random() * BOT_CHAT_LINES.length)];
    broadcastAll({ type: 'chat', sender: bot.name, message: msg, isBot: true });
    scheduleBotChat();
  }, delay);
}

function startBotLoop() {
  botLoopTimer = setInterval(() => {
    if (!bot) return;

    // Find the one human player to chase
    const human = firstHuman();
    if (!human || !human.state) {
      sendBotState();
      return;
    }

    const px = human.state.x;
    const py = human.state.y;
    const dx = px - bot.x;
    const dy = py - bot.y;
    const dist = Math.sqrt(dx * dx + dy * dy);

    // Aim toward player
    bot.angle = Math.atan2(dy, dx);

    // Move: approach if far, strafe/retreat if too close
    if (dist > BOT_OPTIMAL_RANGE) {
      bot.x += Math.cos(bot.angle) * BOT_SPEED;
      bot.y += Math.sin(bot.angle) * BOT_SPEED;
    } else if (dist < 90) {
      bot.x -= Math.cos(bot.angle) * BOT_SPEED;
      bot.y -= Math.sin(bot.angle) * BOT_SPEED;
    } else {
      // Strafe perpendicular
      const perp = bot.angle + Math.PI / 2;
      bot.x += Math.cos(perp) * BOT_SPEED * 0.8;
      bot.y += Math.sin(perp) * BOT_SPEED * 0.8;
    }

    // Clamp inside canvas
    const half = TANK_SIZE / 2;
    bot.x = Math.max(half, Math.min(CANVAS_W - half, bot.x));
    bot.y = Math.max(half, Math.min(CANVAS_H - half, bot.y));

    // Shoot
    if (Math.random() < BOT_SHOOT_CHANCE && dist < 500) {
      bot.bullets.push({
        id: bot.bulletIdCounter++,
        x: bot.x + Math.cos(bot.angle) * 35,
        y: bot.y + Math.sin(bot.angle) * 35,
        vx: Math.cos(bot.angle) * BULLET_SPEED,
        vy: Math.sin(bot.angle) * BULLET_SPEED,
        ownerId: 'bot',
      });
    }

    // Advance bot bullets
    bot.bullets = bot.bullets.filter(b => {
      b.x += b.vx;
      b.y += b.vy;
      return b.x > -10 && b.x < CANVAS_W + 10 && b.y > -10 && b.y < CANVAS_H + 10;
    });

    sendBotState();
  }, 1000 / BOT_FPS);
}

function sendBotState() {
  if (!bot) return;
  broadcastAll({
    type: 'opponentState',
    opponentId: 'bot',
    state: {
      name: bot.name,
      x: bot.x,
      y: bot.y,
      angle: bot.angle,
      hp: bot.hp,
      bullets: bot.bullets,
      isBot: true,
    },
  });
}

// ─── Helpers ─────────────────────────────────────────────────────────────────
function firstHuman() {
  for (const p of players.values()) return p;
  return null;
}

function broadcast(data, excludeId) {
  const msg = JSON.stringify(data);
  players.forEach((p, id) => {
    if (id !== excludeId && p.ws.readyState === WebSocket.OPEN) {
      p.ws.send(msg);
    }
  });
}

function broadcastAll(data) {
  const msg = JSON.stringify(data);
  players.forEach(p => {
    if (p.ws.readyState === WebSocket.OPEN) p.ws.send(msg);
  });
}

function sendRoomInfo() {
  const list = [];
  players.forEach((p, id) => list.push({ id, name: p.name, playerIndex: p.playerIndex }));
  if (bot) list.push({ id: 'bot', name: bot.name, playerIndex: 2, isBot: true });
  broadcastAll({ type: 'roomInfo', players: list });
}

// ─── Connection handling ──────────────────────────────────────────────────────
wss.on('connection', ws => {
  if (players.size >= 2) {
    ws.send(JSON.stringify({ type: 'error', message: 'Room is full (max 2 players).' }));
    ws.close();
    return;
  }

  const id = nextId++;
  const playerIndex = players.size === 0 ? 1 : 2;
  const name = `Player ${playerIndex}`;

  players.set(id, { ws, name, playerIndex, state: null });

  // If second human just joined, kill the bot
  if (playerIndex === 2 && bot) {
    destroyBot();
    broadcastAll({ type: 'chat', sender: 'Server', message: '🤖 Bot left — second player joined!', system: true });
  }

  // Welcome the new player
  ws.send(JSON.stringify({ type: 'init', id, name, playerIndex }));

  // Announce to others
  broadcast({ type: 'chat', sender: 'Server', message: `${name} joined the battle!`, system: true }, id);

  sendRoomInfo();

  // Start bot if this is the only human and no bot yet
  if (players.size === 1 && !bot) {
    setTimeout(() => {
      if (players.size === 1 && !bot) {
        initBot();
        broadcastAll({ type: 'chat', sender: 'Server', message: '🤖 Bot joined as your opponent!', system: true });
        sendRoomInfo();
      }
    }, 2000);
  }

  // ─── Message handler ────────────────────────────────────────────────────
  ws.on('message', raw => {
    let data;
    try { data = JSON.parse(raw); } catch { return; }

    const player = players.get(id);
    if (!player) return;

    switch (data.type) {

      // Player sends their game state every frame
      case 'state':
        if (!data.state) return;
        player.state = data.state;
        // Relay opponent state to the other human player
        broadcast({ type: 'opponentState', opponentId: id, state: data.state }, id);
        break;

      // Player was hit by an opponent bullet (client-side detection)
      case 'hit': {
        const damage = Math.min(Math.max(Number(data.damage) || 1, 1), 3);
        // Tell the shooter their bullet connected
        broadcast({ type: 'hitConfirm', targetId: id, damage }, id);
        // Tell the victim
        ws.send(JSON.stringify({ type: 'takeDamage', damage, fromId: data.fromId || null }));
        break;
      }

      // Bot was hit by the human player's bullet (server handles bot HP)
      case 'botHit': {
        if (!bot) return;
        const dmg = Math.min(Math.max(Number(data.damage) || 1, 1), 3);
        bot.hp = Math.max(0, bot.hp - dmg);
        if (bot.hp <= 0) {
          broadcastAll({ type: 'chat', sender: 'Server', message: '🤖 Bot was destroyed!', system: true });
          broadcastAll({ type: 'botDestroyed' });
          destroyBot();
          // Respawn bot after delay
          setTimeout(() => {
            if (players.size > 0 && !bot) {
              initBot();
              bot.hp = 10;
              broadcastAll({ type: 'chat', sender: 'Server', message: '🤖 Bot respawned!', system: true });
              sendRoomInfo();
            }
          }, 4000);
        } else {
          // Sync updated bot HP
          sendBotState();
        }
        break;
      }

      // Chat message
      case 'chat': {
        if (typeof data.message !== 'string') return;
        const text = data.message.trim().slice(0, 200);
        if (!text) return;
        broadcastAll({ type: 'chat', sender: player.name, message: text, senderId: id });
        break;
      }
    }
  });

  ws.on('close', () => {
    players.delete(id);
    broadcastAll({ type: 'chat', sender: 'Server', message: `${name} left the battle.`, system: true });
    sendRoomInfo();

    // Start bot if exactly one human remains and no bot
    if (players.size === 1 && !bot) {
      setTimeout(() => {
        if (players.size === 1 && !bot) {
          initBot();
          broadcastAll({ type: 'chat', sender: 'Server', message: '🤖 Bot joined as your opponent!', system: true });
          sendRoomInfo();
        }
      }, 2000);
    }

    // No players left — clean up bot
    if (players.size === 0) destroyBot();
  });

  ws.on('error', () => {
    players.delete(id);
  });
});

console.log(`Tank Battle WebSocket server running on ws://localhost:${PORT}`);
console.log('Open index.html in two browser windows to play!');
