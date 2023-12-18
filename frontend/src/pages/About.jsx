import React from 'react'
import '../styles/About.css'

import bg_img from '../assets/images/pages_images/Construction_Bg.jpg'


const About = () => {
    return (
        <div className="about-container">
            <h1 className='custom-heading'>Welcome to About Page</h1>
            <img className='image-style' src={bg_img} alt='' />
        </div>
    )
}

export default About