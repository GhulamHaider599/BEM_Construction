import { buildingImg1, buildingImg2 } from '@/assets'
import { Info } from '@/assets/icons/svg'
import Button from '@/components/Button'
import { MonitorIcon, PencilRulerIcon, RecycleIcon, Timer } from 'lucide-react'
import React from 'react'

const BestPractice = () => {
    const practice= [
        {
            icon: RecycleIcon,
            title: 'Sustainablility'
        },
        {
            icon: Timer,
            title: 'Project On Time'
        },
        {
            icon: MonitorIcon,
            title: 'Modern Technology'
        },
        {
            icon: PencilRulerIcon,
            title: 'Latest Designs'
        },
    ]
    return (
        <div className='grid grid-cols-2'>
            <div className='min-h-[597px] bg-[#140B06]/80 bg-blend-overlay bg-cover bg-center flex justify-center items-cente pt-[150px]' style={{ backgroundImage: `url(${buildingImg1.src})` }}>
                <div className='text-white max-w-[500px] space-y-8'>
                    <h4 className='font-mont leading-[1.2] font-medium text-2xl'>Sustainability</h4>
                    <h2 className='font-mont leading-[1.3] font-bold text-[40px]'>Committed To Keep People Healthy & Safe</h2>
                    <p className='text-base font-open '>Commitment to sustainability through eco-friendly and energy-efficient construction practices.</p>
                    {/* <Button txt='Get In Touch' /> */}
                    <Button txt='Get In Touch' className='!bg-transparent !text-white !border-[3px] !mt-[60px] border-white !rounded-lg !px-[45px] !py-[22px] hover:!bg-white
                         hover:!text-[#54595F]' />
                </div>
            </div>
            <div className='min-h-[597px] bg-[#1A124D]/80 bg-blend-overlay bg-cover bg-center flex justify-center items-cente pt-[150px]' style={{ backgroundImage: `url(${buildingImg2.src})` }}>
                <div className='text-white max-w-[500px] space-y-8'>
                    <h3 className='font-mont font-bold text-2xl'>We Follow Best Practices</h3>
                    <p className='text-base font-open'>Exceeding industry standards with our commitment to excellence and best practices.</p>
                    <ul className='text-white space-y-2'>
                        {practice.map((item, index)=>(

                            <li key={index} className='flex gap-x-2.5 items-center '>
                            <item.icon className='w-5 h-5 text-white  stroke-3'/>
                            <span className='text-[20px] font-bold font-open'>{item.title}</span>
                           
                        </li>
                            ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default BestPractice