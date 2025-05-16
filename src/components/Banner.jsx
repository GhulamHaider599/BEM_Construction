import { bannerImg } from '@/assets'
import React from 'react'

const Banner = ({txt}) => {
  return (
    <div className='bg-[rgba(6,6,51,0.77)] bg-blend-overlay pt-[300px] pb-40 bg-cover bg-center min-h-[476px] text-center text-white font-mont text-[90px] uppercase font-bold' style={{backgroundImage : `url(${bannerImg.src})`}}>
       {txt}
        </div>
  )
}

export default Banner