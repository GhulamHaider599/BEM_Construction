import { DomainImg, securityImg } from '@/assets'
import Button from '@/components/Button'
import Container from '@/components/Container'
import { ArrowRightCircleIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Work = () => {
    const workData = [
        {
            image: DomainImg,
            title : 'Conceptualize',
            description : 'We can helps in assistance, support, and conceptualizing BIM layouts for wide range of projects.'
        },
        {
            image: securityImg,
            title : 'Exploring Ideas',
            description : 'With proper planning and research, our team of engineers assists in exploring the project vision for clients.'
        },
        {
            image: DomainImg,
            title : 'Integration',
            description : 'The BIM projects are integrated to the next level with the help of different sets of BIM software and technology.'
        },
        {
            image: securityImg,
            title : 'Implementation',
            description : 'The final outcome of the long-awaited project. It is the final stage where the project is bought into reality.'
        },
    ]
    return (
        <div className='bg-white'>
            <Container className='pt-8 pb-4 space-y-8'>
                <div className='space-y-4'>
                    <h2 className='font-mont text-[#1C0D0A] text-[40px] font-bold'>How We Work</h2>
                    <div className='flex flex-col xl:flex-row xl:justify-between xl:gap-x-10 xl:items-center'>
                        <p className='font-roboto text-base text-[#353535] max-w-[882px] font-bold'>Our work is our Pride. We assist the project holders in knowing the key aspect of their project in an informative approach  that is segregated in form of different steps and processes.
                        </p>
                        <Button txt='Our Services' className='border border-black whitespace-nowrap !text-[#54595F] hover:!bg-putple hover:!text-white !px-10 my-4'
                            icon={
                                <ArrowRightCircleIcon className=" !text-[#54595F] fill-white group-hover:!fill-purple group-hover:!text-white" />
                            }
                        />
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-2 xl:gap-0 xl:grid-cols-4'>
                    {workData.map((work, index)=>(

                        <div key={index} className='p-5 md:p-10 border border-gray-300 space-y-5 hover:border-purple hover:!border-t-[6px] transition-all duration-300 ease-in-out'>
                        <Image src={work.image} alt={`domain_img ${index + 1}`} />
                        <h3 className='font-mont text-2xl font-bold text-[#1C0D0A]'>{work.title}</h3>
                        <p className='font-roboto text-base text-[#353535]'>{work.description}</p>
                    </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Work