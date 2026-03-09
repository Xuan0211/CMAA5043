import React from 'react';

const VideoPlayer = () => {
    return (
        <div className="video-wrapper">
            <h3 className="video-title">Watch here to know about HKUST (GZ)!</h3>
            <iframe
                className="video-iframe"
                src="//player.bilibili.com/player.html?isOutside=true&aid=392030748&bvid=BV1Zd4y187X7&cid=945789342&p=1"
                scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true">
            </iframe>
        </div>
    );
};

export default VideoPlayer;
