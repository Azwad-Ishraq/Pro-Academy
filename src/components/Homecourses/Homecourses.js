import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import './Homecourses.css'

const Homecourses = () => {
    const [courses,setCourses] = useState([])
    useEffect(()=>{
        fetch('./data.JSON')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])
    return (
        <div className='course-container'>
            {
                
                courses.slice(0,4).map(course => <Course course={course}></Course>)
            }
        </div>
    );
};

export default Homecourses;