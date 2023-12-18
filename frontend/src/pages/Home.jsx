import React from 'react'
import '../styles/Home.css'

import bg_img from '../assets/images/pages_images/Construction_Bg.jpg'

const Home = () => {
    return (
        <div className="home-container">
            <h1 className='custom-heading'>Welcome to Home Page</h1>
            <img className='image-style' src={bg_img} alt='' />
        </div>
    )
}

export default Home


