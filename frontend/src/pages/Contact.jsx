import React from 'react'
import '../styles/Contact.css'

import bg_img from '../assets/images/pages_images/Construction_Bg.jpg'


const Contact = () => {
    return (
        <div className="contact-container">
            <h1 className='custom-heading'>Welcome to Contact Page</h1>
            <img className='image-style' src={bg_img} alt='' />
        </div>
    )
}

export default Contact