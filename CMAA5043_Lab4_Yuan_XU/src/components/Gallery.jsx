import { useState } from 'react';
import '../App.css';

// Lab 3 Exercises - Added Gallery Component
function Gallery({ image, title, author, links, description }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="gallery-card">
            <div className="gallery-image-container">
                <img src={image} alt={title} className="gallery-image" />
            </div>
            <div className="gallery-content">
                <h3 className="gallery-title">{title}</h3>
                <div className="gallery-author">{author}</div>
                <div className="gallery-links">
                    {links.map((link, index) => (
                        <a key={index} href={link.url} className="gallery-link" target="_blank" rel="noopener noreferrer">
                            {link.text}
                        </a>
                    ))}
                </div>
                <div className="gallery-desc">
                    <p>
                        {isExpanded ? description : `${description.substring(0, 150)}...`}
                    </p>
                    <button className="gallery-toggle-btn" onClick={toggleExpand}>
                        {isExpanded ? 'hide' : 'more'}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Gallery;
