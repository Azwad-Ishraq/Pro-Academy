import React from 'react';
import './Course.css'

const Course = (props) => {
    // Distructuring to access all the props inside props.course
    const { name, Price, length, img } = props.course
    return (
        <div className='course-item'>
            <img className='course-img' src={img} alt="" />
            <div className="course-text">
                <h1>{name}</h1>

                <p>Course: {length}</p>
                <h4>৳{Price}</h4>
            </div>
        </div>
    );
};

export default Course;