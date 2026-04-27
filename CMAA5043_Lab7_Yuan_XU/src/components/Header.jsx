import { Link } from 'react-router-dom';

import { useEffect } from 'react';

function Header({ title = "Welcome to My Website" }) {
  const startTime = performance.now();

  useEffect(() => {
    const endTime = performance.now();
    console.log(`Header component render time: ${endTime - startTime} ms`);
  });

  return (
    <header id="main-header">
      <h1>{title}</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
