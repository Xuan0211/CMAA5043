import React from 'react';
import LeftProfile from './LeftProfile';
import AboutMe from './AboutMe';
import VideoPlayer from './VideoPlayer';
import Hubs from './Hubs';
import LatestNews from './LatestNews';

const MainPage = () => {
    return (
        <>
            <LeftProfile />
            <div className="main-content">
                <AboutMe />
                <VideoPlayer />
                <Hubs />
                <LatestNews />
            </div>
        </>
    );
};

export default MainPage;
