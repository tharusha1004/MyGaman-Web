import React, { useState } from 'react'
import "../Review_Slider/ReviewSlider.css"

const ReviewSlider = ({ reviews }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="user-review-slider">
            <button className="arrow-btn" onClick={handlePrev}>&#8249;</button>
            <div className="review-container">
                <p className="review-text">{reviews[currentIndex].text}</p>
                <p className="review-author">{reviews[currentIndex].author}</p>
            </div>
            <button className="arrow-btn" onClick={handleNext}>&#8250;</button>
        </div>
    );
}

export default ReviewSlider