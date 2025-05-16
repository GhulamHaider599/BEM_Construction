import { servicePageImg1, servicePageImg2, servicePageImg3 } from '@/assets'
import Image from 'next/image'
import React from 'react'

const BetterConstruction = () => {
    return (
        <div className='bg-white p-[55px]'>
            <div className='flex text-black'>
                <div className='w-[40%] space-y-6'>
                    <h3 className='font-rubik text-[#1A124D] font-medium leading-[1.3] text-2xl'>Innovative Methods For <br /> Better Construction  </h3>
                    <h2 className='font-rubik text-[#1C0D0A] font-medium leading-[1.3] text-[40px]'>Your Offshore <br /> Design And BIM Partner</h2>
                    <p className='font-roboto text-[#353535]  leading-[25px] text-base'> Choose us as your offshore design and BIM partner <br /> and experience the benefits of professional support <br /> and cost-effective solutions.</p>
                    <p className='font-roboto text-[#353535]  leading-[25px] text-base'> Our team of highly trained professionals use the <br /> latest technology and methods to deliver <br /> accurate designs and models, so you can achieve <br /> your project goals with confidence.
                    </p>
                </div>
                <div className='grid grid-cols-2 w-[60%]'>

                    <div className='p-2.5 space-y-4'>

                        <Image src={servicePageImg1} alt='service_img' />
                        <h4 className='font-mont text-[25px] text-[#1C0D0A] font-bold'>Design Phase</h4>
                        <p className='font-roboto text-[#353535] leading-[25px] text-base'>Our BIM services enable virtual design <br /> validation and optimization prior to <br /> physical construction.
                        </p>
                        <Image src={servicePageImg2} alt='service_img' />
                        <h4 className='font-mont text-[25px] text-[#1C0D0A] font-bold'>Operation Phase</h4>
                        <p className='font-roboto text-[#353535] leading-[25px] text-base'>Our BIM services enable virtual design <br /> validation and optimization prior to <br /> physical construction.
                        </p>
                    </div>
                    <div className='p-2.5 space-y-4'>
                        <div className='space-y-4'>

                            <Image src={servicePageImg3} alt='service_img' />
                            <h4 className='font-mont text-[25px] text-[#1C0D0A] font-bold'>Construction Phase</h4>
                            <p className='font-roboto text-[#353535] leading-[25px] text-base'>Our BIM services enable virtual design <br /> validation and optimization prior to <br /> physical construction.
                            </p>
                        </div>
                        <div className='bg-[#1A124D] rounded-2xl px-[30px] py-[50px] text-white space-y-4'>
                            <h2 className='font-rubik font-medium text-[30px] leading-[1.3]'>280+  Organizations</h2>
                            <p className='font-open font-bold text-base leading-[27px]'>rely on BEM Solutions for <br /> their BIM Needs</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BetterConstruction