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

const OurServices = () => {
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
        <div className='bg-cover bg-center pt-[39px] pb-[47px]' style={{ backgroundImage: `url(${serviceImg.src})` }}>
            <Container className='space-y-8'>
                <div className='flex justify-between items-center py-5'>

                    <h2 className='font-rubik text-white leading-[1.3] text-[32px] font-bold'>Our BIM Services</h2>
                    <p className='font-roboto text-white leading-[25px] text-[16px] '>Handling a wide range of BIM design projects in this time, we have attained significant experience in this  <br /> field which truly makes us industry leaders.</p>
                </div>
                <div className=' '>
                    <Swiper
                        modules={[Autoplay]}
                        loop
                        onSwiper={(swiper) => (swiperRef.current = swiper)} 
                        autoplay={{
                            delay: 3000, // delay between slides in ms
                            disableOnInteraction: false, // keep autoplay after interaction
                        }}
                        slidesPerView={4}
                        spaceBetween={30}
                        className="w-full items-stretch"
                    >
                        {servicesData.map((service, index) => (
                            <SwiperSlide key={index}>
                                <div className='rounded-lg overflow-hidden'>
                                    <div>
                                        <Image src={service.image} alt={`services_img_${index}`} width={300} height={300} className='w-full h-full' />
                                    </div>
                                    <div className='p-[30px] bg-white'>
                                        <h4 className='font-rubik font-medium text-2xl text-[#1C0D0A]'>{service.title}</h4>
                                        <p className='font-roboto font-medium text-[15px] text-[#4b4b4b] mt-[30px] min-h-[90px]'>{service.description}</p>
                                        <Link href='#' className='rounded-lg border border-gray-300 px-[18px] font-bold w-max mt-4 py-[10px] text-[#3b3f42] hover:text-white text-sm font-roboto flex items-center gap-x-2 bg-white hover:bg-[#1A124D] transition-colors duration-300 ease-in-out ' >
                                            Read More
                                            <ArrowRightCircle className='w-4 h-4 ' />
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className='flex justify-between items-center'>
                    <div className='flex gap-x-4 '>
                        <Button txt='Explore All Services' className='!bg-transparent !text-white !border-[3px] border-white !rounded-xl !px-8 hover:!bg-white
                         hover:!text-[#54595F]' />
                        <Button txt='Request A Quote' className='!bg-[#1B1A1A] !text-white !rounded-xl !px-8 hover:!bg-white hover:!text-[#54595F]'
                            icon={<ArrowRightCircleIcon className="text-white fill-transparent group-hover:fill-white group-hover:text-[#54595F]" />}
                        />
                    </div>
                    <div>
                        <button className='cursor-pointer' onClick={() => swiperRef.current?.slidePrev()}>
                            <ChevronLeft className='w-20 h-20 hover:text-[#54595F] text-white transition-colors duration-300 ease-in-out'  />
                        </button>
                        <button className='cursor-pointer' onClick={() => swiperRef.current?.slideNext()}>
                            <ChevronRight className='w-20 h-20 hover:text-[#54595F] text-white transition-colors duration-300 ease-in-out'/>
                        </button>
                    </div>
                </div>

            </Container>
        </div>
    )
}

export default OurServices