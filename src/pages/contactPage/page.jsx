import Banner from '@/components/Banner'
import React from 'react'
import ContactDetails from './ContactDetails'
import DropMessage from './DropMessage'

const ContactUsComponents = () => {
  return (
    <>
     <Banner txt='Contact Us'/>
     <ContactDetails/>
     <DropMessage/>
    </>
  )
}

export default ContactUsComponents