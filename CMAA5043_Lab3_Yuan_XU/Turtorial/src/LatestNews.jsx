import React, { useState } from 'react';

const DEFAULT_NEWS = [
    "31/12/2024: A Look at HKUST(GZ) in Your Eyes in 2024.",
    "15/01/2025: Information Hub announces new AI programs.",
    "20/02/2025: Campus spring festival arrangements.",
    "01/03/2025: Society Hub opens call for new research papers."
];

const LatestNews = ({ news = DEFAULT_NEWS }) => {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredNews = news.filter((item) =>
        item.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="news-section">
            <div className="news-header">
                <h3 className="section-title">Latest News on 9/2/2025</h3>
                <input
                    type="text"
                    placeholder="Search news..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="search-input"
                />
            </div>

            <ul className="news-list">
                {filteredNews.length > 0 ? (
                    filteredNews.map((item, index) => (
                        <li key={index} className="news-item">
                            {item}
                        </li>
                    ))
                ) : (
                    <li className="news-item">No news found for '{searchQuery}'.</li>
                )}
            </ul>
        </div>
    );
};

export default LatestNews;
