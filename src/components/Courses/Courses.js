import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import './Courses.css'

const Courses = () => {
    // setting all the courses to "Courses" array
    const [courses,setCourses] = useState([])
    useEffect(()=>{
        // fetching data from local public folder
        fetch('./data.JSON')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])
    return (
        <div className='course-container'>
            {
                // mapping all the element from courses
                courses.map(course => <Course course={course}></Course>)
            }
        </div>
    );
};

export default Courses;