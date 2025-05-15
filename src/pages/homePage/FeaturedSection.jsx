'use client'
import { architectImg, DomainImg, electricalImg, mechanicalImg, plumbingImg, securityImg } from '@/assets'
import Container from '@/components/Container'
import Image from 'next/image'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules';

import 'swiper/css'
// import 'swiper/css/navigation'
import 'swiper/css/autoplay'
import { ArrowRight } from 'lucide-react'

const FeaturedSection = () => {
    const counterData = [
        {
            title: '1,800',
            description: (
                <>
                    Projects Completed <br /> In Last 5 Years
                </>
            ),
        },
        {
            title: '1,024',
            description: (
                <>
                    Qualified Employees & <br />  Professionals With Us
                </>
            ),
        },
        {
            title: '250',
            description: 'Clients Worldwide'
        },
    ]
    const images = [mechanicalImg, plumbingImg, electricalImg, architectImg]
    const leadingImg = [
        {
            img: DomainImg,
            title: (
                <>
                    All Discipline Under  <br /> One Roof
                </>
            )
        },
        {
            img: securityImg,
            title: (
                <>
                    100% Data Security <br /> And Technical <br /> Support
                </>
            )
        },
    ]
    return (
        <div className='bg-white text-black'>
            <Container className='flex gap-x-4 py-3 items-center'>


                <div className='w-[20%] text-center'>
                    <div className='flex flex-col items-center justify-center gap-y-6'>
                        {counterData.map((item, index) => (
                            <div key={index} className=''>
                                <h2 className='font-rubik text-[#1A124D] text-[60px] mb-4'>{item.title}</h2>
                                <p className='text-base text-start font-roboto text-[#353535] font-bold'>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='w-[35%]'>
                    <Swiper
                        modules={[Autoplay]}
                        loop
                        autoplay={{
                            delay: 3000, // delay between slides in ms
                            disableOnInteraction: false, // keep autoplay after interaction
                        }}
                        slidesPerView={1}
                        className="w-full"
                    >

                        {images.map((img, index) => (
                            <SwiperSlide key={index}>
                                <Image src={img} alt={`image_${index}`} objectFit='cover' className='w-full' />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className='w-[45%] font-roboto font-bold space-y-8 px-4'>
                    <h5 className='text-xl text-[#1C0D0A]'>Explore Features</h5>
                    <h2 className='text-[40px] text-[#1C0D0A]'>A Leading BIM Company</h2>
                    <p className='text-base text-[#353535] leading-[1]'>MaRS Group, A BIM Services provider company offer BIM modeling consulting services for designing & engineering projects. We've been working with government organizations, leading developers & corporate organizations for the last 18 years.</p>
                    <div className='flex justify-between'>
                        {leadingImg.map((item, index) => (

                            <div key={index} className='space-y-4'>

                                <Image src={item.img} alt={`image_${index}`} />
                                <p className='text-lg text-[#353535] leading-[1]'>{item.title}</p>
                            </div>
                        ))}
                    </div>
                    <div className='flex items-center gap-x-3'>
                        <span className='font-roboto text-[#020101] text-[15px]'>Explore Our services </span>
                        <ArrowRight className='w-5 h-5' />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default FeaturedSection