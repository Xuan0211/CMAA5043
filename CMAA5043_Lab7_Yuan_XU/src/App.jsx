import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Project1 from './pages/projects/Project1';
import Project2 from './pages/projects/Project2';
import Project3 from './pages/projects/Project3';

const GalleryPage = React.lazy(() => import('./pages/GalleryPage'));
import { useTheme } from './context/ThemeContext';
import './App.css';

function App() {
  const { isDarkMode, toggleTheme, appStyle } = useTheme();

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
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects/project1" element={<Project1 />} />
            <Route path="/projects/project2" element={<Project2 />} />
            <Route path="/projects/project3" element={<Project3 />} />
            <Route path="/gallery" element={<GalleryPage />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
