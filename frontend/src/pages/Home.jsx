import React from 'react'
import '../styles/Home.css'
import InfoMessage from '../components/Home/Info_Message/InfoMessage'
import MainSection from '../components/Home/Main_Section/MainSection'

import SearchBar from '../shared/SearchBar'
import DestinationSection from '../components/Home/Destination_Section/DestinationSection'
import ActivityBooking from '../components/Home/Activity_Booking/ActivityBooking'
import ServicesSection from '../components/Home/Services_Section/ServicesSection'
import PackagesSection from '../components/Home/Packages_Section/PackagesSection'

const Home = () => {
    return (
        <div>
            <InfoMessage />
            <MainSection/>
            <SearchBar/>
            <DestinationSection/>
            <ActivityBooking/>
            <ServicesSection/>
            <PackagesSection/>
        </div>
    )
}

export default Home


