import React from 'react'
import '../styles/Home.css'
import InfoMessage from '../components/Home/Info_Message/InfoMessage'
import MainSection from '../components/Home/Main_Section/MainSection'

import SearchBar from '../shared/SearchBar'

const Home = () => {
    return (
        <div>
            <InfoMessage />
            <MainSection/>
            <SearchBar/>
        </div>
    )
}

export default Home


