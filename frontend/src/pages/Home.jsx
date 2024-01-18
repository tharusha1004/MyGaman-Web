import React from 'react'
import '../styles/Home.css'
import InfoMessage from '../components/Home/Info_Message/InfoMessage'
import MainSection from '../components/Home/Main_Section/MainSection'

import SearchBar from '../shared/SearchBar'
import DestinationSection from '../components/Home/Destination_Section/DestinationSection'

const Home = () => {
    return (
        <div>
            <InfoMessage />
            <MainSection/>
            <SearchBar/>
            <DestinationSection/>
        </div>
    )
}

export default Home


