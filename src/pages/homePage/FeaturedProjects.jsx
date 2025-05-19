import { serviceImg10, serviceImg3, serviceImg4, serviceImg5, serviceImg8, serviceImg9 } from '@/assets'
import Container from '@/components/Container'
import Image from 'next/image'
import React from 'react'

const FeaturedProjects = () => {
    const featuredProjects = [
        {
            img: serviceImg3,
            heading: 'Hospital Building'
        },
        {
            img: serviceImg4,
            heading: 'Multi Purpose Building'
        },
        {
            img: serviceImg8,
            heading: 'Industrial BIM'
        },
        {
            img: serviceImg9,
            heading: 'Laser Scan To BIM'
        },
        {
            img: serviceImg5,
            heading: 'BIM For Wastewater Treatment Plant'
        },
        {
            img: serviceImg10,
            heading: 'Stadium'
        },
    ]
    return (
        <div className='pt-[50px] bg-white'>
            <Container>
                <h2 className='font-rubik font-medium leading-[1.3] text-[30px] lg:text-[40px] text-center xl:text-left text-[#1C0D0A]'>Featured Projects</h2>
            </Container>
            <div className='pt-[30px] px-[20px] xl:px-[100px] pb-[100px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-x-5 gap-y-5' >
                {featuredProjects.map((item, index) => (

                    <div key={index} className='border border-gray-150 rounded-lg relative overflow-hidden'>
                        <Image src={item.img} alt={`Image_${index + 1}`} className='rounded-lg max-h-[502px]' />
                        <div className='pt-[25px] pr-[60px] lg:pr-[60px] pb-[26px] pl-[15px] absolute -right-20 -bottom-3 bg-white hover:bg-purple text-[#1C0D0A] hover:text-white  rounded-2xl rounded-tr-none w-full xl:min-w-[397px] '>

                            <h2 className='font-rubik text-2xl'>{item.heading}</h2>
                        </div>
                        
                    </div>
                ))}

            </div>
        </div>
    )
}

export default FeaturedProjects