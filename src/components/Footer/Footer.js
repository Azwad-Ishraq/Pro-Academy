import React from 'react';
import './Footer.css'
import fb from '../../social icons/facebook.png'
import insta from '../../social icons/instagram.png'
import linked from '../../social icons/linkedin.png'
import twit from '../../social icons/twitter.png'

const Footer = () => {
    return (
        <footer>
            <div className="text">
                <h1>The best way to learn to code</h1>
                <h4>Courses designed by experts with real-world practice. Join our global community. It's free.</h4>
                <button className='butn get-start'>Get Started</button>
            </div>
            <div className="social">
                <div className="social-item">
                    <img src={linked} alt="" />
                    <h4>Follow us on Linked In</h4>
                </div>
                <div className="social-item">
                    <img src={fb} alt="" />
                    <h4>Check out facebook</h4>
                </div>
                <div className="social-item">
                    <img src={twit} alt="" />
                    <h4>See what we tweet about</h4>
                </div>
                <div className="social-item">
                    <img src={insta} alt="" />
                    <h4>Join our instagram</h4>
                </div>
            </div>
        </footer>
    );
};

export default Footer;