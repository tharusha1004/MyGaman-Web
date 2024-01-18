import React from 'react'
import "../Destination_Section/DestinationSection.css";
import DesImg from './../../../assets/images/Home_images/destinationimg.png'
import Arrow from './../../../assets/images/Home_images/arrow.jpg'
//import StarRating from "../StarRate/StarRating";
// import { IoLocationSharp } from "react-icons/io5";
// import { BiBed } from "react-icons/bi";

const DestinationSection = () => {
    return (
        <div className="container">
            <div className="Destination-section">
                <div className="arrow">
                    <img
                        src={Arrow} alt="arrow"
                    />
                </div>


                <div class="row">
                    <div class="col col-lg-8 Description-container">
                        <div className="main-text">
                            <h3>Enjoy your dream destinations in Sri Lanka</h3> <br />
                            <p>
                                Embark on a jurney of enchanment as you savour the magic of your
                                dream destination in Sri Lanka, where each moment like a chapter
                                in a travel fairy tale, inviting you to create cherished
                                memories against the backdrop of paradise.
                            </p>
                        </div>

                        <div className="row counting">
                            <div class="col-sm">
                                <p>
                                    {" "}
                                    <h2>20+</h2> <br />
                                    Destinations
                                </p>
                            </div>
                            <div class="col-sm">
                                <p>
                                    {" "}
                                    <h2>100+</h2> <br />
                                    Hotels and Rooms
                                </p>
                            </div>
                            <div class="col-sm">
                                <p>
                                    {" "}
                                    <h2>50+</h2> <br />
                                    Activities
                                </p>
                            </div>
                        </div>

                        <div className="explore-btn">
                            <button type="button" class="btn btn-success">
                                Explore More
                            </button>
                        </div>
                    </div>

                    <div class="col col-lg-4 image-container">
                        <div>
                            <img
                                src={DesImg} alt="Waterfall in Sri Lanka"
                            />
                        </div>
                    </div>


                </div>
            </div>

            <div className="Accomadation-section">
                <div class="row">
                    <div class="col col-lg- Description-container">
                        <div className="main-text">
                            <h3>Choose your Place to stay</h3> <br />
                        </div>

                        <div class="search-container">
                            <div class="row">
                                <div class="col col-sm-4">
                                    <label>
                                        <select className="location-select">
                                            {/* <option value="Where is your destination?"><IoLocationSharp />Where is your destination?</option> */}
                                        </select>
                                    </label>
                                </div>
                                <div class="col col-sm-6">
                                    <div class="form-check place">
                                        {/* <BiBed /> */}
                                        <label for="placetype"> <b> Place type</b></label>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                            <label class="form-check-label" for="inlineCheckbox1">Hotels</label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                                            <label class="form-check-label" for="inlineCheckbox2">Villas</label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" />
                                            <label class="form-check-label" for="inlineCheckbox3">Resorts</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col col-sm-2">
                                    <div className="find-btn">
                                        <button type="button" class="btn btn-success">
                                            Find your Place
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="img-container">
                            <div class="row">
                                <div class="col-sm">
                                    <img
                                        src="https://img.freepik.com/free-photo/background-rarotonga-beautiful-day-summer_1203-4663.jpg?size=626&ext=jpg&ga=GA1.1.455584429.1675157191&semt=ais"
                                        alt="Places in Sri Lanka"
                                    />
                                    <h6><b>Orchide villa</b></h6>
                                    {/* <StarRating /> */}
                                </div>

                                <div class="col-sm">
                                    <img
                                        src="https://img.freepik.com/free-photo/huge-swiss-hotel-with-outdoor-restaurant_8353-9521.jpg?w=1060&t=st=1702196946~exp=1702197546~hmac=0491a47b268443fbc28b8a7e6b519a3ee586dace225d5ebe555ff49b040d819a"
                                        alt="Places in Sri Lanka"
                                    />
                                    <h6><b>Hanthana Boutique Villa</b></h6>
                                    {/* <StarRating /> */}
                                </div>

                                <div class="col-sm">
                                    <img
                                        src="https://img.freepik.com/free-photo/light-garden-luxury-pool-nature_1203-4908.jpg?w=1060&t=st=1702197013~exp=1702197613~hmac=6010502ef6284b6b2034366b7308fbc2153070137549ab52519ddaeff8c4f3a2"
                                        alt="Places in Sri Lanka"
                                    />
                                    <h6><b>Albatros Boutique Villa</b></h6>
                                    {/* <StarRating /> */}
                                </div>

                                <div class="col-sm">
                                    <img
                                        src="https://img.freepik.com/free-photo/beautiful-sky-orchid-water-outdoor_1203-5205.jpg?w=1060&t=st=1702197615~exp=1702198215~hmac=7cadb69e6749e2f49b455d7a60d4bbc1b703e5e9763a475a3b2345ecb6795075"
                                        alt="Places in Sri Lanka"
                                    />
                                    <h6><b>Mahaweli Reached Hotel</b></h6>
                                    {/* <StarRating /> */}
                                </div>
                            </div>
                        </div>

                        <div className="learnmore-btn">
                            <button type="button" class="btn btn-success">
                                Learn More
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default DestinationSection