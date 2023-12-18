import React from 'react'
import '../styles/Discover.css'

import bg_img from '../assets/images/pages_images/Construction_Bg.jpg'


const Discover = () => {
    return (
        <div className="discover-container">
            <h1 className='custom-heading'>Welcome to Discover Page</h1>
            <img className='image-style' src={bg_img} alt='' />
        </div>
    )
}

export default Discover