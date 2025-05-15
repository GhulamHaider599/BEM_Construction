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
                <h2 className='font-rubik font-medium leading-[1.3] text-[40px] text-[#1C0D0A]'>Featured Projects</h2>
            </Container>
            <div className='pt-[30px] px-[100px] pb-[100px] grid grid-cols-3 gap-x-6' >
                {featuredProjects.map((item, index) => (

                    <div key={index} className=' '>
                        <Image src={item.img} alt={`Image_${index + 1}`} />
                    </div>
                ))}

            </div>
        </div>
    )
}

export default FeaturedProjects