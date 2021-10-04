import React from 'react';
import { NavLink } from 'react-router-dom';
import './Routelinks.css'

const Routelinks = () => {
    return (
        <div className='route-links'>
             <NavLink className='route-link-item' to='/home'>Home</NavLink>
        <NavLink className='route-link-item' to='/courses'>Courses</NavLink>
        <NavLink className='route-link-item' to='/signup'>Get Started</NavLink>
        <NavLink className='route-link-item' to='/pro'>Get Pro</NavLink>
        <NavLink className='route-link-item' to='/jobs'>Job Opportunities</NavLink>
        </div>
    );
};

export default Routelinks;