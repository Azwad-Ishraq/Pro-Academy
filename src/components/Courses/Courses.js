import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import './Courses.css'

const Courses = () => {
    const [courses,setCourses] = useState([])
    useEffect(()=>{
        fetch('./data.JSON')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])
    return (
        <div className='course-container'>
            {
                courses.map(course => <Course course={course}></Course>)
            }
        </div>
    );
};

export default Courses;