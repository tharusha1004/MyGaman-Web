import React from 'react'
import '../styles/Career.css'

import bg_img from '../assets/images/pages_images/Construction_Bg.jpg'

const Career = () => {
    return (
        <div className="career-container">
            <h1 className='custom-heading'>Welcome to Career Page</h1>
            <img className='image-style' src={bg_img} alt='' />
        </div>
    )
}

export default Career