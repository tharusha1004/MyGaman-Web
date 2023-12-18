import React from 'react'
import '../styles/Advertising.css'

import bg_img from '../assets/images/pages_images/Construction_Bg.jpg'


const Advertising = () => {
    return (
        <div className="advertising-container">
            <h1 className='custom-heading'>Welcome to Advertisement Page</h1>
            <img className='image-style' src={bg_img} alt='' />
        </div>
    )
}

export default Advertising