import { workImg, workMissionImg, workVisionImg } from '@/assets'
import Button from '@/components/Button'
import Image from 'next/image'
import React from 'react'

const GetSolution = () => {
    const solutionData = [
        {
            img: workMissionImg,
            title: 'Our Mission',
            description: 'Save money on utilities or increase the value of your home by installing solar panels as a great option.'
        },
        {
            img: workVisionImg,
            title: 'Our Vision',
            description: 'Understand that we must go above our customer expectations during each interaction always.'
        },
    ]
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2'>
            <div className='hidden lg:block w-full h-full bg-no-repeat !bg-cover lg:bg-[length:200%] bg-left' style={{backgroundImage : `url(${workImg.src})`}}>
            </div>
            <div className='p-[10px] md:p-[65px] lg:p-5 xl:p-[65px] bg-[#1B1A1A] space-y-8'>
                <h2 className='font-mont text-[30px] md:text-[40px] text-white font-bold leading-[1.1] md:leading-[1.3]'>Get Solution For All Your BIM <br /> Requirements.</h2>
                <p className='font-roboto text-base text-white leading-[20px] md:leading-[26px] font-medium '>MaRS BIM provides engineering design and project management for residential & commercial building types, Industries and offer world class building engineering services globally with an impressive range of skills and resources. We have gained an outstanding reputation for our lateral thinking and elegant design solutions in many aspects of building engineering, including multistory buildings, sporting, airport etc.
                </p>
                <div className='grid grid-cols-1 md:grid-cols-2 place-content-between gap-y-5 md:gap-y-0 md:gap-x-10 px-2.5'>
                    {solutionData.map((solution, index) => (
                        <div key={index} className='space-y-4 px-2.5'>
                            <Image
                                src={solution.img} alt='mission_img'
                            />
                            <h3 className='font-mont text-2xl text-white font-bold leading-[1.3]'>{solution.title}</h3>
                            <p className='font-roboto text-base text-white leading-[25px] font-medium '>{solution.description}</p>
                        </div>
                    ))}
                </div>
                  <Button txt='Get To know Us Better' className='!bg-transparent !text-white !border-[3px] border-white !rounded-lg !px-8 hover:!bg-white
                         hover:!text-[#54595F]' />
            </div>
        </div>
    )
}

export default GetSolution