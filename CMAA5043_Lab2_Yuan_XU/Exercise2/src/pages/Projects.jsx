import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Projects() {
    return (
        <>
            <Header title="My Projects" />

            <main>
                <h2>Work Showcase</h2>
                <p>Explore some of the projects I've worked on recently:</p>
                <ul>
                    <li><Link to="/projects/project1">Project 1: 筑语书</Link></li>
                    <li><Link to="/projects/project2">Project 2: BBB</Link></li>
                    <li><Link to="/projects/project3">Project 3: CCC</Link></li>
                </ul>
            </main>

            <Footer />
        </>
    );
}

export default Projects;
