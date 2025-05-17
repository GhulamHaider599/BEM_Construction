import { BuildingIcon, HistoryIcon, HomeIcon } from '@/assets/icons/svg'
import Container from '@/components/Container'
import React from 'react'

const IndustryLeader = () => {
    const details = [
        {
            icon: BuildingIcon,
            title: 'Building Staffs',
            description: 'Skilled building staff ensuring seamless project execution, safety, quality, and efficiency on every construction site.'
        },
        {
            icon: HistoryIcon,
            title: 'History Emphasis',
            description: 'Rich history of excellence, emphasizing innovation and quality in every project we undertake.'
        },
        {
            icon: HomeIcon,
            title: 'Economic Outcomes',
            description: 'Driving economic outcomes through strategic planning, efficient execution, and sustainable construction practices.'
        },
    ]
    return (
        <div className='bg-white py-[100px]'>
            <Container className='flex items-center'>
                <div className='w-[50%] space-y-5 self-start'>
                    <h3 className='font-mont text-2xl text-[#1A124D] font-bold'>About Us</h3>
                    <h2 className='font-mont text-[40px] text-[#1A124D] font-bold'>We Are a Globally Recognized Industry Leader</h2>
                    <p className='font-open text-base text-[#353535]'>A leading company with a global presence, delivering top-notch services across various industries with expertise and innovation.</p>
                    <p className='font-open text-base text-[#353535]'>A globally recognized company, we excel in delivering high-quality services across diverse industries, leveraging expertise and innovation to meet client needs worldwide.</p>
                </div>
                <div className='w-[50%] pl-[100px] py-20'>
                    <div className='flex flex-col gap-y-7'>
                        {details.map((item, index) => (

                            <div key={index} className='flex  gap-x-7'>
                                <div className='w-12 h-12 rounded-full flex justify-center items-center flex-shrink-0 bg-purple'>
                                    <item.icon className='w-5 h-5 fill-white' />
                                </div>
                                <div className='space-y-2'>
                                    <h3 className='font-mont text-2xl text-[#1C0D0A] font-bold'>{item.title}</h3>
                                    <p className='font-open text-base text-[#353535]'>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default IndustryLeader
