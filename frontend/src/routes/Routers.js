import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';

import Discover from '../pages/Discover';
import Activities from '../pages/Activities';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Career from '../pages/Career';

// import TourDetails from '../pages/TourDetails';
// import SearchResults from '../pages/SearchResults';

const Routers = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigate to='/home'/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/discover' element={<Discover/>}/>
            <Route path='/activities' element={<Activities/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/career' element={<Career/>}/>

            {/* <Route path='/tour/id:' element={<TourDetails/>}/>
            <Route path='/tours/search' element={<SearchResults/>}/> */}

        </Routes>
    )
}

export default Routers