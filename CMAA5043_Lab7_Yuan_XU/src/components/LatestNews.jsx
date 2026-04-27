import React, { useState, useEffect } from 'react';

function LatestNews() {
    const [time, setTime] = useState('Loading...');
    const startTime = performance.now();

    useEffect(() => {
        const fetchTime = async () => {
            try {
                const response = await fetch('http://quan.suning.com/getSysTime.do');
                if (!response.ok) throw new Error('Network error');
                const data = await response.json();
                setTime(data.sysTime2);
            } catch (error) {
                const localTime = new Date().toLocaleString();
                setTime(`${localTime} (local time)`);
            }
        };

        fetchTime();
        const timer = setInterval(fetchTime, 1000);

        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        const endTime = performance.now();
        console.log(`LatestNews component render time: ${endTime - startTime} ms`);
    });

    return (
        <div className="latest-news">
            <h3>Latest News</h3>
            <p>Current Time: {time}</p>
        </div>
    );
}

export default LatestNews;
