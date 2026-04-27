import { useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LatestNews from '../components/LatestNews';
import useClickPosition from '../hooks/useClickPosition';

function Home() {
    const heroRef = useClickPosition('HeroSection');

    return (
        <>
            <Header title="Welcome to My Website" />

            <main>
                <LatestNews />
                <section id="hero" ref={heroRef} style={{ cursor: 'crosshair', border: '1px solid transparent' }}>
                    <h2>About Me</h2>
                    <img src="/img/hero.jpg" alt="Hero Image" className="hero-img" />
                    <p>Welcome to my personal portfolio! I am a student exploring the world of web development and design. This website showcases some of my recent work and projects.</p>
                </section>

                <section className="audio-section">
                    <h3>Listen to My Welcome Greeting</h3>
                    <audio controls>
                        <source src="/audio/welcome.mp3" type="audio/mpeg" />
                        Your browser does not support the audio element.
                    </audio>
                </section>

                <section id="intro">
                    <h3>My Journey</h3>
                    <p>I started learning HTML and CSS recently, and I'm excited to share my progress. This homepage is the gateway to my digital world.</p>
                </section>
            </main>

            <Footer />
        </>
    );
}

export default Home;
