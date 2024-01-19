import React from 'react'
import "../Activity_Booking/ActivityBooking.css"

import BannerImg from "../../../assets/images/Home_images/banner-img.png";

const ActivityBooking = () => {
    return (
        <div className="banner-container row">
            {/* left hand side container for banner title, buttons etc -- responsive -- centered items on smaller screens */}
            <div>
                <h2 className="banner-subtitle">Eco Team Proudly presents</h2>
                <h1 className="banner-title">THE MYSTIC MOUNTAINS EXPEDITION</h1>
                <p className="banner-description">
                    Get ready for Adrenaline-pumping experiences and exhilarating moments
                    on your next travel adventure
                </p>
                {/* responsive container -- centered items on smaller screens */}
                <div className="banner-subcontainer">
                    <button className="banner-btn">BOOK NOW</button>
                    <div>
                        <p className="banner-link">@ Nuckle Mountain Range</p>
                        <p className="banner-link">www.ecoteam.lk</p>
                    </div>
                </div>
            </div>
            {/* right hand side container for dot image and banner image  -- responsive -- dissappears on smaller screens*/}
            <div className="banner-rightpanel">
                <img
                    className="banner-dots"
                    src={require("../../../assets/images/Home_images/dots.png")}
                    alt="decorative dot pattern"
                />
                <image
                    className="banner-img"
                    src={BannerImg}
                    alt="banner image that shows a couple hiking on a mountain">
                </image>
            </div>
        </div>
    )
}

export default ActivityBooking