import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function Project1() {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleExpand = () => {
        setIsExpanded(true);
    };

    return (
        <>
            <Header title="Project 1" />

            <main>
                <section>
                    <h2>筑语书</h2>
                    <p>以古建筑为主题的立体书交互解谜游戏</p>
                    <img src="/img/project1/teaser.png" alt="teaser" className="project-content-img" />
                </section>

                {/* Expansion Button */}
                {!isExpanded && (
                    <button id="expand-btn" onClick={handleExpand}>
                        打开界面 (Open Interface)
                    </button>
                )}

                {/* Hidden Details Container */}
                <div id="project-details" className={`project-details ${isExpanded ? 'expanded' : ''}`}>
                    <section>
                        <h3>Project Demonstration</h3>
                        {/* Video element instead of iFrame to prevent download and provide a player */}
                        <video controls className="video-player">
                            <source
                                src="https://mawxuan.oss-cn-hangzhou.aliyuncs.com/QQ%E8%A7%86%E9%A2%9120230830020204.mp4"
                                type="video/mp4"
                            />
                            Your browser does not support the video tag.
                        </video>
                    </section>

                    <section>
                        <h3>Key Features</h3>
                        {/* List element as required */}
                        <ul className="project-list">
                            <li>古建筑结构的相关知识（如斗拱、藻井等） 立体书解谜技巧（如Z形折、拉杆结构等）</li>
                            <li>让书外的玩家体验建筑背后的故事——建筑可读</li>
                            <li>立体的中国古建筑史， 纸上之筑的"奇观"</li>
                            <li>玩家可以对纸进行拖拽、翻折、切换、推动的基础操作，通过这些机制的相互作用与配合，改变关卡的场景地形和建筑结构，为角色创造可行的道路。</li>
                        </ul>
                    </section>

                    <section>
                        <h3>Authors</h3>
                        {/* Optimized Bilibili Player */}
                        <iframe
                            className="video-player"
                            src="https://player.bilibili.com/player.html?isOutside=true&aid=872233413&bvid=BV18V4y1Y7xS&cid=1232712551&p=1&high_quality=1&danmaku=0"
                            scrolling="no"
                            border="0"
                            frameBorder="no"
                            framespacing="0"
                            allowFullScreen={true}
                            style={{ height: '500px' }}
                        />
                        <img src="/img/project1/authors.png" alt="authors" className="project-content-img" />
                    </section>
                </div>
            </main>

            <Footer />
        </>
    );
}

export default Project1;
