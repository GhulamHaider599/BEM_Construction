import Banner from '@/components/Banner'
import React from 'react'
import IndustryLeader from './IndustryLeader'
import Counter from './Counter'
import BestPractice from '../homePage/BestPractice'

const AboutComponents = () => {
  return (
    <>
     <Banner txt='About Us'/>
     <IndustryLeader/>
     <Counter/>
     <BestPractice/>
    </>
  )
}

export default AboutComponents