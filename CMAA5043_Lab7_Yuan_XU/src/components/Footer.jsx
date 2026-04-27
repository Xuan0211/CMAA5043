import { useEffect } from 'react';

function Footer() {
    const startTime = performance.now();

    useEffect(() => {
        const endTime = performance.now();
        console.log(`Footer component render time: ${endTime - startTime} ms`);
    });

    return (
        <footer id="main-footer">
            <p>&copy; 2026 My Portfolio. All rights reserved. Created with the help of Antigravity AI.</p>
        </footer>
    );
}

export default Footer;
