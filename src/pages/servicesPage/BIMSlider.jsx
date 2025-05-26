'use client'
import { serviceImg, serviceImg1, serviceImg2, serviceImg3, serviceImg6, serviceImg7 } from '@/assets'
import Container from '@/components/Container'
import { ArrowRightCircle, ArrowRightCircleIcon, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules';

import 'swiper/css'
// import 'swiper/css/navigation'
import 'swiper/css/autoplay'
import Button from '@/components/Button'

const BIMSlider = () => {
     const swiperRef = useRef(null);
    const servicesData = [
        {
            title: 'Scan to BIM Services',
            description: 'MaRS BIM provides Laser Scan to BIM Modeling Services with high quality output from the point cloud data.',
            image: serviceImg1.src
        },
        {
            title: 'Architectural BIM Modeling',
            description: 'We provide 3D modeling services for all disciplines including architectural, structural, and MEP.',
            image: serviceImg2.src
        },
        {
            title: 'Revit Family Creation',
            description: 'Our BIM coordination services ensure seamless collaboration between all project stakeholders.',
            image: serviceImg6.src
        },
        {
            title: 'Structural BIM Modeling',
            description: 'We are experts in detailed Structural Modeling with Structural components & deliver at competitive rates.',
            image: serviceImg7.src
        },
        {
            title: 'Scan to BIM Services',
            description: 'MaRS BIM provides Laser Scan to BIM Modeling Services with high quality output from the point cloud data.',
            image: serviceImg1.src
        },

    ]
    return (
        <div className='pt-[39px] pb-[47px]' >
            <Container className='space-y-8'>
                <div className=' '>
                    <Swiper
                        modules={[Autoplay]}
                        loop
                        onSwiper={(swiper) => (swiperRef.current = swiper)} 
                        autoplay={{
                            delay: 3000, // delay between slides in ms
                            disableOnInteraction: false, // keep autoplay after interaction
                        }}
                           breakpoints={{
                            0: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 15,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                        }}
                        className="w-full items-stretch bimSlider"
                    >
                        {servicesData.map((service, index) => (
                            <SwiperSlide key={index}>
                                <div className='rounded-lg overflow-hidden'>
                                    <div>
                                        <Image src={service.image} alt={`services_img_${index}`} width={300} height={300} className='w-full h-full' />
                                    </div>
                                    <div className='p-[30px]  bg-white'>
                                        <h4 className='font-rubik font-medium text-2xl min-h-[64px] text-[#1C0D0A]'>{service.title}</h4>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center'>
                    <div className='flex flex-col sm:flex-row sm:gap-x-4 gap-y-2 sm:gap-y-0'>
                        <Button txt='Explore All Services' className='!bg-transparent !text-white !border border-white !w-full sm:w-auto !rounded-xl !px-8 hover:!bg-white
                         hover:!text-[#54595F]' />
                        <Button txt='Request A Quote' className='!bg-[#1B1A1A] !text-white !w-full whitespace-nowrap !rounded-xl !px-8 hover:!bg-white hover:!text-[#54595F]'
                            icon={<ArrowRightCircleIcon className="text-white fill-transparent group-hover:fill-white group-hover:text-[#54595F]" />}
                        />
                    </div>
                    <div className='flex justify-center mt-2 sm:mt-0 '>
                        <button className='cursor-pointer' onClick={() => swiperRef.current?.slidePrev()}>
                            <ChevronLeft className='w-15 h-15 hover:text-[#54595F] text-white transition-colors duration-300 ease-in-out stroke-3'  />
                        </button>
                        <button className='cursor-pointer' onClick={() => swiperRef.current?.slideNext()}>
                            <ChevronRight className='w-15 h-15 hover:text-[#54595F] text-white transition-colors duration-300 ease-in-out stroke-3'/>
                        </button>
                    </div>
                </div>

            </Container>
        </div>
    )
}

export default BIMSlider