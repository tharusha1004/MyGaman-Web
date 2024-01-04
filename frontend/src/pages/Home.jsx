import React from 'react'
import '../styles/Home.css'
import InfoMessage from '../components/Home/Info_Message/InfoMessage'
import MainSection from '../components/Home/Main_Section/MainSection'

const Home = () => {
    return (
        <div>
            <InfoMessage />
            <MainSection/>
        </div>
    )
}

export default Home


