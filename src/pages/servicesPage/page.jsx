import Banner from '@/components/Banner'
import React from 'react'
import BetterConstruction from './BetterConstruction'
import OurClients from '../projectsPage/OurClients'
import MoreServices from './MoreServices'
import BIMServices from './BIMServices'

const ServicesComponents = () => {
  return (
    <>
     <Banner txt='Services'/>
     <BetterConstruction/>
     <BIMServices/>
     <MoreServices/>
     <OurClients/>
    </>
  )
}

export default ServicesComponents