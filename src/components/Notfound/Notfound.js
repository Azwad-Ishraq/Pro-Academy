import React from 'react';
import './Notfound.css'
import notfoundImg from '../../notfound.svg'

const Notfound = () => {
    return (
        <div className = 'notfound-container' style={{textAlign: 'center'}}>
            <h1>Oops, 404 Error!!!</h1>
            <h2>Page Not Found</h2>
            <img src={notfoundImg} alt=""/>
        </div>
    );
};

export default Notfound;