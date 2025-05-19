import { bannerImg } from '@/assets'
import React from 'react'

const Banner = ({txt}) => {
  return (
    <div className='bg-[rgba(6,6,51,0.77)] bg-blend-overlay pt-[150px] xl:pt-[200px] pb-10 xl:pb-20 bg-cover bg-center  xl:min-h-[476px] text-center text-white font-mont  uppercase font-bold' style={{backgroundImage : `url(${bannerImg.src})`}}>
       <h1 className='text-[40px] xl:text-[90px] px-4'>{txt}</h1>
        </div>
  )
}

export default Banner