'use client'
import React from 'react'
import Container from './Container'
import Image from 'next/image'
import { logo } from '@/assets'
import Link from 'next/link'
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
import { usePathname } from 'next/navigation'

const Header = () => {
  const pathname= usePathname()
  const navItems = [
    {
      name: 'Home',
      href: '/'
    },
    {
      name: 'Projects',
      href: '/projects'
    },
    {
      name: 'Services',
      href: '/services'
    },
    {
      name: 'Contact Us',
      href: '/contact-us'
    },
    {
      name: 'About',
      href: '/about'
    },
  ]
  return (
    <div className='w-full absolute z-30'>
      <Container className="flex justify-between items-center py-4 text-white">
        <Image src={logo} alt='logo' className='max-w-[183px] filter invert-100 brightness-0 ' />
        <p className='font-open'>Make a call: (727) 497 7285</p>
        <ul className='flex gap-5'>
          <li><Facebook /></li>
          <li><Twitter /></li>
          <li><Instagram /></li>
          <li><Linkedin /></li>
        </ul>
      </Container>
      <hr className="border-[rgba(235,235,235,0.24)]" />
      <Container className='flex justify-between items-center py-6'>
        <div>
          <nav>
            <ul className='flex gap-x-5 text-white'>
              {navItems.map((navItem, index) =>{
                const isActive = pathname === navItem.href
                return(

                <li key={index} className={`hover:text-[#FAFAFA96] ${isActive ? "text-[#FAFAFA96]" : ""}`}>
                  <Link href={navItem.href}>
                  {navItem.name}

                  </Link>
                  </li>
              )})}
            </ul>
          </nav>
        </div>
        <Link href='#' className='border border-white px-10 py-4 text-white bg-transparent font-semibold hover:bg-white hover:text-black transition-colors duration-300 ease-in-out font-roboto'>
          Request A Quote
        </Link>
      </Container>
    </div>
  )
}

export default Header
