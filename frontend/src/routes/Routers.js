import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';

// import TourDetails from '../pages/TourDetails';
// import SearchResults from '../pages/SearchResults';

const Routers = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigate to='/home'/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>

            {/* <Route path='/tour/id:' element={<TourDetails/>}/>
            <Route path='/tours/search' element={<SearchResults/>}/> */}

        </Routes>
    )
}

export default Routers