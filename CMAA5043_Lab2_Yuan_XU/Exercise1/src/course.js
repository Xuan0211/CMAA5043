import React, { useState } from 'react';

// Course component function
function Course(props) {
    // State to track the number of students choosing the course
    const [studentCount, setStudentCount] = useState(29);

    // Function to increase student count
    const increaseCount = () => {
        setStudentCount(studentCount + 1);
    };

    // Function to decrease student count
    const decreaseCount = () => {
        if (studentCount > 0) {
            setStudentCount(studentCount - 1);
        }
    };

    return (
        <div>
            <h3>{props.title}</h3>
            <p>Duration: {props.duration}</p>
            <p>Instructor: {props.instructor}</p>
            <p>Classroom: {props.classroom}</p>

            {/* Buttons for increasing and decreasing student count */}
            <button onClick={decreaseCount}>-</button>
            <button onClick={increaseCount}>+</button>

            {/* Display the number of students choosing the course */}
            <p>There are {studentCount} students choosing the courses.</p>
        </div>
    );
}

export default Course;
