// import { clientImg1, clientImg2, clientImg3, clientImg4, clientImg5, clientImg6 } from '@/assets'
// import Container from '@/components/Container'
// import Image from 'next/image'
// import React from 'react'
// import { Swiper, SwiperSlide } from 'swiper/react'
// import { Autoplay } from 'swiper/modules';
// import 'swiper/css'
// // import 'swiper/css/navigation'
// import 'swiper/css/autoplay'

// const OurClients = () => {
//     const clients = [

//         clientImg1, clientImg2, clientImg3, clientImg4, clientImg5, clientImg6

//     ]
//     return (
//         <div className='bg-white pb-[100px]'>
//             <Container className='pt-[100px] pb-[50px] text-center font-mont space-y-4'>
//                 <h3 className='text-[#1A124D] text-2xl font-bold'>Trust and Worth</h3>
//                 <h2 className='text-[#242424] text-[40px] font-bold'>Our Clients</h2>
//                 <div className='pt-[50px] '>
//                     <Image src={clientImg1} alt='client_01' />
//                 </div>
//             </Container>
//             <Swiper
//                 modules={[Autoplay]}
//                 loop
//                 autoplay={{
//                     delay: 3000, // delay between slides in ms
//                     disableOnInteraction: false, // keep autoplay after interaction
//                 }}
//                 slidesPerView={4}
//                 spaceBetween={30}
//                 className="w-full"
//             >
//                 {clients.map((service, index) => (
//                     <SwiperSlide key={index}>
//                         <div className='pt-[50px] '>
//                             <Image src={clientImg1} alt='client_01' />
//                         </div>
//                     </SwiperSlide>
//                 ))}
//             </Swiper>
//         </div>
//     )
// }

// export default OurClients

'use client'

import React from 'react'
import Container from '@/components/Container'
import Image from 'next/image'
import { clientImg1, clientImg2, clientImg3, clientImg4, clientImg5, clientImg6 } from '@/assets'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

const OurClients = () => {
    const clients = [clientImg1, clientImg2, clientImg3, clientImg4, clientImg5, clientImg6]

    return (
        <div className='bg-white'>
            <Container className='pt-[100px] text-center font-mont space-y-4'>
                <h3 className='text-[#1A124D] text-2xl font-bold'>Trust and Worth</h3>
                <h2 className='text-[#242424] text-[40px] font-bold'>Our Clients</h2>
                <div className='pt-[50px]'>


                    <Swiper
                        modules={[Autoplay, Pagination]}
                        loop
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        slidesPerView={4}
                        spaceBetween={30}
                        pagination={{ clickable: true }}
                        className='w-full px-4  client-swiper'
                    >
                        {clients.map((clientImg, index) => (
                            <SwiperSlide key={index} className='flex justify-center items-center'>
                                <Image src={clientImg} alt={`client_${index}`} className='w-auto h-auto' />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </Container>
        </div>
    )
}

export default OurClients
