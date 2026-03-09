import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Project1 from './pages/projects/Project1';
import Project2 from './pages/projects/Project2';
import Project3 from './pages/projects/Project3';
import './App.css';

function App() {
  // Lab 3 Exercises - Dark Mode State and Toggle
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  // Lab 3 Exercises - Dynamic Theme Variables using Spread Syntax
  const darkThemeVars = {
    '--primary-color': '#e0e0e0',
    '--secondary-color': '#64b5f6',
    '--accent-color': '#ffb74d',
    '--bg-color': '#121212',
    '--text-color': '#e0e0e0',
    '--header-footer-bg': '#1e1e1e',
    '--border-color': '#333',
    '--card-bg': '#2a2a2a'
  };

  const appStyle = isDarkMode ? { ...darkThemeVars } : {};

  return (
    <div style={appStyle} className="app-root-wrapper">
      {/* Lab 3 Exercises - Global Floating Theme Toggle */}
      <button
        className="floating-theme-toggle"
        onClick={toggleTheme}
        title="Toggle Dark Mode"
      >
        {isDarkMode ? '☀️' : '🌙'}
      </button>

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
    </div>
  );
}

export default App;
