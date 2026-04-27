import { useState } from 'react'

/**
 * Tank Battle — Login Page
 * React implementation of the Figma design
 * (file: HLTFZXO6ZrBXA4izznTKHl, node 3:2 "Login Screen").
 */
export default function LoginPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)
  const [status, setStatus] = useState(null) // {type: 'error'|'success', text: string}

  function handleSubmit(e) {
    e.preventDefault()
    if (!username.trim() || !password.trim()) {
      setStatus({ type: 'error', text: 'Both callsign and password are required.' })
      return
    }
    setStatus({ type: 'success', text: `Welcome, Commander ${username}. Deploying...` })
    window.location.href = './game.html'
  }

  return (
    <div className="login-screen">
      {/* Background layers */}
      <div className="bg-gradient" />
      <div className="bg-glow" />
      <div className="bg-grid" />
      <div className="bg-shade" />

      <main className="login-content">
        {/* Logo + Title */}
        <header className="logo-block">
          <TankIcon />
          <h1 className="title">TANK BATTLE</h1>
          <p className="subtitle">ARMORED&nbsp;&nbsp;WARFARE&nbsp;&nbsp;ONLINE</p>
        </header>

        {/* Login Card */}
        <form className="login-card" onSubmit={handleSubmit} noValidate>
          <div className="card-header">
            <h2 className="card-title">COMMANDER LOGIN</h2>
            <p className="card-sub">Enter your credentials to deploy</p>
          </div>

          <Field
            label="USERNAME"
            id="username"
            value={username}
            onChange={setUsername}
            placeholder="Enter your callsign"
            icon={<UserIcon />}
          />

          <Field
            label="PASSWORD"
            id="password"
            type="password"
            value={password}
            onChange={setPassword}
            placeholder="••••••••••"
            icon={<LockIcon />}
          />

          <div className="helper-row">
            <label className="remember">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
              />
              <span className="checkbox-box" aria-hidden="true">
                {remember && <span className="checkbox-tick">✓</span>}
              </span>
              <span>Stay deployed</span>
            </label>
            <a className="forgot" href="#" onClick={(e) => e.preventDefault()}>
              Forgot password?
            </a>
          </div>

          <button type="submit" className="login-button">
            DEPLOY&nbsp;&nbsp;→
          </button>

          {status && (
            <div className={`status status-${status.type}`} role="status">
              {status.text}
            </div>
          )}

          <div className="footer">
            <span className="footer-muted">New recruit?</span>
            <a className="enlist" href="#" onClick={(e) => e.preventDefault()}>
              Enlist now
            </a>
          </div>
        </form>
      </main>
    </div>
  )
}

/* ─────────────── Sub-components ─────────────── */

function Field({ label, id, value, onChange, placeholder, type = 'text', icon }) {
  return (
    <div className="field">
      <label className="field-label" htmlFor={id}>
        {label}
      </label>
      <div className="field-input">
        <span className="field-icon" aria-hidden="true">
          {icon}
        </span>
        <input
          id={id}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          autoComplete={id === 'password' ? 'current-password' : 'username'}
        />
      </div>
    </div>
  )
}

/* ─────────────── Inline SVG icons ─────────────── */

function TankIcon() {
  return (
    <svg
      className="tank-icon"
      viewBox="0 0 140 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Tank logo"
      role="img"
    >
      {/* Hull */}
      <path d="M15 46 Q15 38 23 38 H117 Q125 38 125 46 V70 H15 Z" fill="#c7d98c" />
      {/* Track base */}
      <rect x="5" y="66" width="130" height="18" rx="9" fill="#8c9e52" />
      {/* Wheels */}
      <circle cx="17" cy="75" r="5" fill="#262e1a" />
      <circle cx="43" cy="75" r="5" fill="#262e1a" />
      <circle cx="69" cy="75" r="5" fill="#262e1a" />
      <circle cx="95" cy="75" r="5" fill="#262e1a" />
      <circle cx="121" cy="75" r="5" fill="#262e1a" />
      {/* Turret */}
      <rect x="42" y="22" width="56" height="22" rx="6" fill="#c7d98c" />
      {/* Hatch */}
      <ellipse cx="70" cy="31" rx="5" ry="3" fill="#8c9e52" />
      {/* Barrel */}
      <rect x="86" y="30" width="54" height="8" rx="2" fill="#c7d98c" />
      {/* Barrel tip */}
      <rect x="132" y="28" width="8" height="12" rx="2" fill="#8c9e52" />
    </svg>
  )
}

function UserIcon() {
  return (
    <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="9" cy="6" r="3.5" fill="currentColor" />
      <path
        d="M2 17 C2 12.5 5.5 11 9 11 C12.5 11 16 12.5 16 17 Z"
        fill="currentColor"
      />
    </svg>
  )
}

function LockIcon() {
  return (
    <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5 8 V6 a4 4 0 0 1 8 0 V8"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <rect x="3" y="8" width="12" height="9" rx="2" fill="currentColor" />
      <circle cx="9" cy="12" r="1.4" fill="#0a0f0a" />
    </svg>
  )
}
