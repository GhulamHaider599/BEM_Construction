import { projectImg1, projectImg2, projectImg3, projectImg4, projectImg5, projectImg6, projectImg7, projectImg8 } from '@/assets'
import Container from '@/components/Container'
import React from 'react'

const OurProjects = () => {
    const projects = [
        {
            img: projectImg1.src,
            title: 'Science Lab Building',
            country: 'New York, USA'
        },
        {
            img: projectImg2.src,
            title: 'Long Gate Bridge',
            country: 'Malmo, SE'
        },
        {
            img: projectImg3.src,
            title: 'Enix Lawyer Building',
            country: 'Toronto, CA'
        },
        {
            img: projectImg4.src,
            title: 'Deep Sea Bridge',
            country: 'Athens, GR'
        },
        {
            img: projectImg5.src,
            title: 'Car Tech Building',
            country: 'Denver, USA'
        },
        {
            img: projectImg6.src,
            title: 'Nctech Building',
            country: 'Texas, USA'
        },
        {
            img: projectImg7.src,
            title: 'Vax Tech Building',
            country: 'Ontario, CA'
        },
        {
            img: projectImg8.src,
            title: 'Food Lab Building',
            country: 'Athens, GR'
        },
    ]
    return (
        <div className='bg-white'>
            <Container className='xl:pt-[100px] py-[20px] xl:pb-[50px] text-center font-mont space-y-2 xl:space-y-4'>
                <h3 className='text-[#1A124D] text-xl xl:text-2xl font-bold'>Our Projects</h3>
                <h2 className='text-[#242424] text-[30px] xl:text-[40px] font-bold'>Latest Works</h2>
            </Container>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4'>
                {projects.map((item, index) => (
                    <div key={index} className='group bg-cover bg-center min-h-[300px] xl:min-h-[453px] relative text-white overflow-hidden' style={{ backgroundImage: `url(${item.img})` }}>
                        <div className="absolute inset-0 before:content-[''] before:absolute before:inset-0 before:bg-[linear-gradient(0deg,_#140B06_29%,_#ffffff00_49%)] before:opacity-70 before:transition-opacity before:duration-300 group-hover:before:opacity-50" />

                        <div className="absolute bottom-0 p-10 w-full z-10">
                            <h4 className="font-mont text-2xl font-bold">{item.title}</h4>
                            <p className="font-open text-base">{item.country}</p>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    )
}

export default OurProjects