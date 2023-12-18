import React from 'react'
import { Link } from 'react-router-dom';

import './Header.css'

const Header = () => {
    return (
        <div className="px-5">
            <nav class="navbar navbar-expand-lg ">
                <div class="container-fluid">
                    <Link to="/" className="font">MyGaman.com</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 ullist mx-auto font2">
                            <li class="nav-item space">
                                <Link to="/home" className="nav-link">Home</Link>
                            </li>
                            <li class="nav-item space">
                                <Link to="/discover" className="nav-link">Discover</Link>
                            </li>
                            <li class="nav-item space">
                                <Link to="/activities" className="nav-link">Activities</Link>
                            </li>
                            <li class="nav-item space">
                                <Link to="/about" className="nav-link">About</Link>
                            </li>
                            <li class="nav-item space">
                                <Link to="/contact" className="nav-link">Contact</Link>
                            </li>
                        </ul>
                        {/* <img src={earth} alt="" /> */}
                        <button type="button" class="btn">
                            English
                        </button>
                        <form class="d-flex " role="search">
                            <button type="button" class="btn btn-outline-success space2">
                                <Link to="/register" className="nav-link">Register</Link>
                            </button>
                            <button type="button" class="btn btn-success space2">
                                <Link to="/login" className="nav-link">Sign in</Link>
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header