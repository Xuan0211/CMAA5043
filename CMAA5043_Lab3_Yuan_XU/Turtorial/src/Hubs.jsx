import React, { useState } from 'react';

const ALL_HUBS = [
    { name: 'Information Hub', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnRazRfTs9NVWKSY896fnW7Ep49yoQqpOUWA&s' },
    { name: 'Society Hub', image: 'src/assets/socihub.jpg' },
    { name: 'System Hub', image: 'src/assets/syshub.jpg' },
    { name: 'Function Hub', image: 'src/assets/funhub.jpg' }
];

const Hubs = () => {
    const [startIndex, setStartIndex] = useState(0);

    const goToLeft = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - 1);
        }
    };

    const goToRight = () => {
        if (startIndex < ALL_HUBS.length - 3) {
            setStartIndex(startIndex + 1);
        }
    };

    const displayedHubs = ALL_HUBS.slice(startIndex, startIndex + 3);

    return (
        <div className="hubs-section">
            <h3 className="section-title">Our Hub</h3>
            <div className="hubs-carousel">
                <button
                    className="nav-button"
                    onClick={goToLeft}
                    disabled={startIndex === 0}
                    style={{ opacity: startIndex === 0 ? 0.3 : 1 }}
                >
                    &larr;
                </button>

                <div className="hub-cards-container">
                    {displayedHubs.map((hub, index) => (
                        <div className="hub-card" key={index}>
                            <img src={hub.image} alt={hub.name} className="hub-image" />
                            <div className="hub-name">{hub.name}</div>
                        </div>
                    ))}
                </div>

                <button
                    className="nav-button"
                    onClick={goToRight}
                    disabled={startIndex >= ALL_HUBS.length - 3}
                    style={{ opacity: startIndex >= ALL_HUBS.length - 3 ? 0.3 : 1 }}
                >
                    &rarr;
                </button>
            </div>
        </div>
    );
};

export default Hubs;
