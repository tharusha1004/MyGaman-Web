import React from 'react'
import './InfoMessage.css';
import Info from "../../../assets/images/Home_images/Info.png";

import CovidDoc from "../../../assets/docs/Covid-19 Restrictions.pdf"

const InfoMessage = () => {
    return (
        <div className="p-5 ">
            <div className="row ">
                <div className="col-12 boder01 p-3">
                    <img src={Info} alt="#" />
                    <span className="text01">
                        Before you travel in Sri Lanka, please get all the relevant
                        vaccination doses for covid-19. And also check the latest
                        COVID-19 restrictions before you travel. <span ><a href={CovidDoc} className="text02">Learn more</a></span>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default InfoMessage