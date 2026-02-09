import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Project1 from './pages/projects/Project1';
import Project2 from './pages/projects/Project2';
import Project3 from './pages/projects/Project3';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects/project1" element={<Project1 />} />
        <Route path="/projects/project2" element={<Project2 />} />
        <Route path="/projects/project3" element={<Project3 />} />
      </Routes>
    </Router>
  );
}

export default App;
