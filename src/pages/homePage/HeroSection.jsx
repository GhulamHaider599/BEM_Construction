// import { slideImg1, slideImg2 } from '@/assets'
// import Button from '@/components/Button'
// import Container from '@/components/Container'
// import { ArrowRightCircleIcon } from 'lucide-react'
// import React from 'react'

// const HeroSection = () => {
//   const heroData= [
//     {
//       title: 'Increase efficiency with greater collaboration',
//       description: 'Leading the way in eco-friendly construction with sustainable materials and practices for a greener, healthier future.',
//       buttonText: 'Our BIM Services',
//       // image: '
//     },
//     {
//       title: 'Trusted BIM Solution for All Discipline',
//       description: 'A world class engineering design services for Residential, commercial and Industrial buildings with an impressive range of skills and resources.',
//       buttonText: ' Learn how we can help',
//       // image: '/assets/hero.png'
//     },

//   ]
//   return (
//     <>

//     <div className='min-h-screen bg-purple/90 bg-blend-color bg-cover bg-center pt-[222px]' style={{backgroundImage: `url(${slideImg2.src})`}} >
//       <Container className=''>

//         <h1 className='font-rubik text-white font-semibold leading-[1.1] text-[75px] max-w-[875px]'>Increase efficiency with greater collaboration</h1>
//         <p className='font-rubik text-white font-bold leading-[1.5] mt-12 mb-8'>Leading the way in eco-friendly construction with sustainable materials and practices for a <br />greener, healthier future.</p>
//         <Button txt='Our BIM Services' className='' icon={<ArrowRightCircleIcon className='text-white fill-purple group-hover:fill-white group-hover:text-purple ' />}  />
//       </Container>

//     </div>
//     </>
//   )
// }

// export default HeroSection


'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css/effect-fade';

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'

import { slideImg1, slideImg2 } from '@/assets'
import Button from '@/components/Button'
import Container from '@/components/Container'
import { ArrowRightCircleIcon } from 'lucide-react'

const HeroSection = () => {
  const heroData = [
    {
      title: 'Increase efficiency with greater collaboration',
      description:
        'Leading the way in eco-friendly construction with sustainable materials and practices for a greener, healthier future.',
      buttonText: 'Our BIM Services',
      image: slideImg1.src
    },
    {
      title: 'Trusted BIM Solution for All Discipline',
      description:
        'A world class engineering design services for Residential, commercial and Industrial buildings with an impressive range of skills and resources.',
      buttonText: 'Learn how we can help',
      image: slideImg2.src
    }
  ]

  return (
    <Swiper
      modules={[Navigation, EffectFade,Autoplay]}
      effect="fade"
      fadeEffect={{ crossFade: true }}
      loop
      navigation
      autoplay
       speed={1500}
      className="w-full "
    >
      {heroData.map((item, index) => (
      <SwiperSlide key={index}>
        <div
          className="bg-[rgba(6,6,51,0.60)] bg-blend-overlay bg-cover bg-center pt-[150px] px-10 lg:px-0 lg:pt-[200px] pb-40"
          style={{ backgroundImage: `url(${item.image})` }}
        >
          <Container>
            <h1 className="font-rubik text-white font-semibold leading-[1.1] text-[75px] max-w-[875px]">
              {item.title}
            </h1>
            <p className={`font-rubik text-white font-bold leading-[1.5] mt-12 mb-8 ${index === 0 ? 'max-w-[780px]' : 'max-w-[750px]'}`}>
              {item.description}
            </p>
            <Button
              txt={item.buttonText}
              icon={
                <ArrowRightCircleIcon className="text-white fill-purple group-hover:fill-white group-hover:text-purple" />
              }
            />
          </Container>
        </div>
      </SwiperSlide>
    ))
  }
    </Swiper >
  )
}

export default HeroSection
