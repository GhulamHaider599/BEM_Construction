'use client'
import { counterImg } from '@/assets'
import { DollarIcon, GiftIcon, LinkIcon, UserIcon } from '@/assets/icons/svg'
import Container from '@/components/Container'
import React from 'react'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'

const Counter = () => {
    const { ref, inView } = useInView({
        triggerOnce: true, // run only once
        threshold: 0.3, // trigger when 30% is visible
    })

    const details = [
        {
            icon: DollarIcon,
            count: 325,
            description: 'Revenue in 2017 (Million)',
        },
        {
            icon: UserIcon,
            count: 525,
            description: 'Colleagues & Counting',
        },
        {
            icon: LinkIcon,
            count: 50,
            suffix: '+',
            description: 'Successfully Project',
        },
        {
            icon: GiftIcon,
            count: 15,
            description: 'Year of experience',
        },
    ]

    return (
        <div
            ref={ref}
            className='bg-cover bg-center min-h-[283px] bg-[rgba(6,6,51,0.70)] bg-blend-overlay'
            style={{ backgroundImage: `url(${counterImg.src})` }}
        >
            <Container className='min-h-[283px] flex justify-center items-center py-5'>
                {/* <div className='flex flex-wrap justify-center'> */}
                <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-y-2 sm:gap-4 '>
                    {details.map((item, index) => (
                        <div key={index} className='flex gap-x-4 xl:gap-x-7 items-center '>
                            <div className='w-12 h-12 rounded-full flex justify-center items-center flex-shrink-0 bg-purple'>
                                <item.icon className='w-5 h-5 fill-white' />
                            </div>
                            <div className='space-y-2 text-white'>
                                <h2 className='font-mont text-[30px] xl:text-[40px] font-bold'>
                                    {inView && (
                                        <CountUp
                                            end={item.count}
                                            duration={2}
                                            suffix={item.suffix || ''}
                                        />
                                    )}
                                </h2>
                                <p className='font-open text-base'>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Counter
