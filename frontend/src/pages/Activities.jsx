import React from 'react'
import '../styles/Activities.css'

import bg_img from '../assets/images/pages_images/Construction_Bg.jpg'


const Activities = () => {
    return (
        <div className="activities-container">
            <h1 className='custom-heading'>Welcome to Activities Page</h1>
            <img className='image-style' src={bg_img} alt='' />
        </div>
    )
}

export default Activities