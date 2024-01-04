import React from 'react'

import "./Footer.css";

import logo from "../../assets/images/footer_images/MyGaman_Logo.png";
import location_icon from "../../assets/images/footer_images/Location.png";
import phone_icon from "../../assets/images/footer_images/Phone.png";
import email_icon from "../../assets/images/footer_images/Email.png"
// import facebook_icon from "./assets/Facebook.png";
import insta_icon from "../../assets/images/footer_images/Instagram.png";
import linkedIn_icon from "../../assets/images/footer_images/LinkedIn.png";
import twitterX_icon from "../../assets/images/footer_images/TwitterX.png";

import WhatsappLogo from "../../assets/images/footer_images/whatsapp_icon.png";
const Footer = () => {
    return (
        <>
            <div className="box">
                <div className="footer-section">
                    <p className="your-trust-travel">Your trust travel partner in<br />Sri Lanka</p>
                    <div className="text-wrapper">Colombo (Head Office)</div>
                    <div className="div">(+94)11 2334 289</div>
                    <div className="text-wrapper-2">mygaman@gmail.com</div>
                    <div className="text-logo">MyGaman.com</div>
                    <img className="capture-removebg" alt="Capture removebg" src={logo} />
                    <div className="overlap-group">
                        <p className="p">Copyrights © MyGaman.com 2024 | All Rights Reserved</p>
                        <p className="designed-developed">Designed &amp; Developed By: Flexycode(Pvt.)Ltd.</p>
                    </div>
                    <img className="location" alt="Location" src={location_icon} />
                    <img className="phone" alt="Phone" src={phone_icon} />
                    <img className="email" alt="Email" src={email_icon} />
                    <a href="https://twitter.com/mygaman">
                        <img className="twitterX" alt="TwitterX" src={twitterX_icon} />
                    </a>
                    <a href="https://www.instagram.com/my_gaman/">
                        <img className="instagram" alt="Instagram" src={insta_icon} />
                    </a>
                    <a href="https://www.linkedin.com/in/my-gaman-0127811ba/?originalSubdomain=lk">
                        <img className="linked-in" alt="Linked in" src={linkedIn_icon} />
                    </a>
                    <div className="flexcontainer">
                        <p className="text">
                            <a href="/about">About</a>
                            <br />

                        </p>
                        <p className="text">
                            <a href="/career">Careers</a>
                            <br />

                        </p>
                        <p className="text">
                            <a href="/advertisement">Advertising</a>
                            <br />

                        </p>
                        <p className="text">
                            <a href="/contact">Contact us</a>
                            <br />
                        </p>
                    </div>
                    <div className="text-wrapper-3">Company</div>
                    <div className="flexcontainer-2">
                        <p className="span-wrapper">
                            <span className="text-wrapper-4">
                                Anuradhapura
                                <br />
                            </span>
                        </p>
                        <p className="span-wrapper">
                            <span className="text-wrapper-4">
                                Kandy
                                <br />
                            </span>
                        </p>
                        <p className="span-wrapper">
                            <span className="text-wrapper-4">
                                Colombo
                                <br />
                            </span>
                        </p>
                        <p className="span-wrapper">
                            <span className="text-wrapper-4">
                                Badulla
                                <br />
                            </span>
                        </p>
                        <p className="span-wrapper">
                            <span className="text-wrapper-4">
                                Nuwara Eliya
                                <br />
                            </span>
                        </p>
                        <p className="span-wrapper">
                            <span className="text-wrapper-4">
                                Galle
                                <br />
                            </span>
                        </p>
                        <p className="span-wrapper">
                            <p className="text">
                                <a href="/tourism-map">See More</a>
                                <br />
                            </p>
                            {/* <span className="text-wrapper-5">See more</span> */}
                        </p>
                    </div>
                    <div className="text-wrapper-6">Explore</div>

                    <div className="text-wrapper-7">Terms and Policies</div>
                    <div className="flexcontainer-3">
                        <p className="text">
                            <a href="/privacy">Privacy Policy</a>
                            <br />
                        </p>
                        <p className="text">
                            <a href="/terms">Terms of Use</a>
                            <br />
                        </p>
                    </div>

                    <div className="text-wrapper-8">Help</div>
                    <div className="flexcontainer-4">
                        <p className="text">
                            <a href="/support">Support</a>
                            <br />
                        </p>
                        <p className="text">
                            <a href="/cancel-booking">Cancel Booking</a>
                            <br />
                        </p>
                        <p className="text">
                            <a href="/coupons">Use Coupons</a>
                            <br />
                        </p>
                        <p className="text">
                            <a href="/documents">Travel Documents</a>
                            <br />
                        </p>
                    </div>

                    <div className="text-wrapper-9">Follow us on</div>
                </div>
            </div>
            <div className='fixed-bottom right-100 p-3' style={{ zIndex: "6", left: "initial" }}>
                <a href='https://wa.me/94740496248?text=Hello How can I help you?'>
                    <img src={WhatsappLogo} width='60' alt="aaaa" />
                </a>
            </div>
        </>

    );
}

export default Footer