import React from 'react'
import HeroSection from './HeroSection'
import Header from '@/components/Header'
import FeaturedSection from './FeaturedSection'
import OurServices from './OurServices'
import Work from './Work'
import GetSolution from './GetSolution'
import FeaturedProjects from './FeaturedProjects'
import BestPractice from './BestPractice'
import Footer from '@/components/Footer'
import Faqs from './Faqs'

const HomePage = () => {
  return (
    <>
    
    <HeroSection/>
    <FeaturedSection/>
    <OurServices/>
    <Work/>
    <GetSolution/>
    <FeaturedProjects/>
    <BestPractice/>
    <Faqs/>
   
    </>
  )
}

export default HomePage