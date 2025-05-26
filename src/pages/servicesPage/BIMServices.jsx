import { bimImg } from '@/assets'
import React from 'react'
import BIMSlider from './BIMSlider'

const BIMServices = () => {
  return (
    <div className='grid grid-cols-1 xl:grid-cols-2'>
      <div className='bg-[#353535] p-10 text-white space-y-4'>
        <h2 className='font-mont text-[40px] font-bold'>BIM Services</h2>
        <p className='font-roboto text-base leading-[25px]'>BIM is extremely valuable as it facilitates all phases of a project from design to construction to operation and maintenance. We are committed to providing efficient and innovative solutions for successful project delivery.</p>
        <p className='font-roboto text-base leading-[25px]'>We offer BIM services for architectural, structural and MEP disciplinary. Our experienced team develops accurate virtual models through digitization that accelerate the construction process by improving project collaboration, accuracy and cost savings. We are well versed in an international standard to provide BIM across the globe.
        </p>
      <BIMSlider/>
      </div>
      <div className='min-h-[890px] bg-cover bg-center' style={{ backgroundImage: `url(${bimImg.src})` }}>

      </div>
    </div>
  )
}

export default BIMServices