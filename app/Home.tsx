import React from 'react'
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import OverviewSection from './components/OverviewSection';
import ConnectivitySection from './components/ConnectivitySection';
import EnquirySection from './components/EnquirySection';
import AmenitiesSection from './components/AmenitiesSection';
import PriceSection from './components/PriceSection';
import LocationSection from './components/LocationSection';
import AboutDeveloper from './components/AboutDeveloper';
import DisclaimerSection from './components/DisclaimerSection';
import VideoSection from './components/VideoSection';

const Home = () => {
  return (
    <div className='max-w-[1920px] items-center mx-auto'>
        <Header/>
        <HeroSection/>
        <VideoSection />
        <OverviewSection/>
        <ConnectivitySection/>
        <EnquirySection/>
        <AmenitiesSection/>
        <PriceSection/>
        <LocationSection/>
        <AboutDeveloper/>
        <DisclaimerSection/>
    </div>
  )
}

export default Home