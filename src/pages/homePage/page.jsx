import React from 'react'
import HeroSection from './HeroSection'
import Header from '@/components/Header'
import FeaturedSection from './FeaturedSection'
import OurServices from './OurServices'
import Work from './Work'
import GetSolution from './GetSolution'
import FeaturedProjects from './FeaturedProjects'

const HomePage = () => {
  return (
    <>
    <Header/>
    <HeroSection/>
    <FeaturedSection/>
    <OurServices/>
    <Work/>
    <GetSolution/>
    <FeaturedProjects/>
    </>
  )
}

export default HomePage