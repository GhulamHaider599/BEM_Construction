import Container from '@/components/Container'
import React from 'react'

const ContactDetails = () => {
    return (
        <div className='bg-white py-[100px]'>
            <Container>
                <div className='font-mont space-y-4 text-center'>
                    <h3 className='text-[#1A124D] text-2xl font-bold'>Our Branches</h3>
                    <h2 className='text-[#1c0d0a] text-[40px] font-bold'>Contact Details</h2>
                </div>
                <div className='py-[50px] flex '>
                    <div className='w-[30%] space-y-5 p-5'>
                        <h3 className='text-[#1c0d0a] text-2xl font-bold font-mont'>US Head Office</h3>

                        <div className='space-y-2'>
                            <h4 className='text-[#1c0d0a] text-2xl font-bold font-mont'>Address:</h4>
                            <p className='text-[#353535] text-base font-open'>5900 Balcones Drive STE 100 Austin TX 78731</p>
                        </div>

                        <div className='space-y-2 py-5'>
                            <h4 className='text-[#1c0d0a] text-2xl font-bold font-mont'>Phone:</h4>
                            <p className='text-[#353535] text-base font-open'>727 497 7285</p>
                        </div>

                        <div className='space-y-2'>
                            <h4 className='text-[#1c0d0a] text-2xl font-bold font-mont'>Email:</h4>
                            <p className='text-[#353535] text-base font-open'>info@bemsolution.com</p>
                        </div>

                    </div>
                    <div className='w-[70%] min-h-[475px]'>
                        <iframe
                            className="w-full h-full border-0"
                            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d12339.455456662858!2d-84.3045834782606!3d39.359319386866396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sDeepa&#39;s%20Art%20Studio%20Mason%2C%20Ohio%2045040%2C%20United%20States!5e0!3m2!1sen!2sus!4v1747461612995!5m2!1sen!2sus"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
                <hr className='border-[#DDD6D6]' />
            </Container>
        </div>
    )
}

export default ContactDetails
