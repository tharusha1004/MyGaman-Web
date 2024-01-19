import React from 'react'
import "../Activity_Booking/ActivityBooking.css";

const ServicesSection = () => {
    return (
        <div className="services-container row">
            <h1>Our Services</h1>
            {/* css grid for service boxes */}
            <div className="services-main">
                <div className="service">
                    <image src={require("../../../assets/images/Home_images/24hours.png")} />
                    <p>24/7 Hours Alert</p>
                </div>
                <div className="service">
                    <image src={require("../../../assets/images/Home_images/clock.png")} />
                    <p>Real time updates</p>
                </div>
                <div className="service">
                    <image src={require("../../../assets/images/Home_images/security.png")} />
                    <p>High Security</p>
                </div>
                <div className="service">
                    <image src={require("../../../assets/images/Home_images/map.png")} />
                    <p>Guide the Routine</p>
                </div>
            </div>
        </div>
    )
}

export default ServicesSection