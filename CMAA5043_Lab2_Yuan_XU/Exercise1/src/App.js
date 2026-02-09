import React from 'react';
import './App.css';
import Course from './course';

function App() {
    return (
        <div className="App">
            {/* Main heading */}
            <h1>HKUST(GZ) Course Platform</h1>
            <p>Service Time: {new Date().toLocaleString()}</p>

            {/* Featured Courses Section */}
            <div>
                <h2>Featured Courses</h2>

                {/* Course component - Creative Prototyping */}
                <Course
                    title="Creative Prototyping"
                    duration="24 Hours"
                    instructor="Prof. Tong"
                    classroom="E3-201"
                />
            </div>

            {/* System Notices Section */}
            <div>
                <h2>System Notices</h2>
                <p>Reminder: Complete course selection before September 1st</p>

                <h4>Important Notice</h4>
                <p>New Student Orientation will be held on September 5th</p>
            </div>
        </div>
    );
}

export default App;
