'use client'
import React from 'react'
import Container from './Container'
import Image from 'next/image'
import { logo } from '@/assets'
import Link from 'next/link'
import { ChevronDown, ChevronRight, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
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
      href: '/services',
      subItems : [
        {
          name: 'BIM Services',
          href: '/services',
          subMenus:[
            {
              name:'3D Modeling',
              href: '/services'
            },
            {
              name:'4D Scheduling',
              href: '/services'
            },
            {
              name:'5D Estimating',
              href: '/services'
            },
            {
              name:'Scan TO BIM',
              href: '/services'
            },
            {
              name:'Scan TO CAD',
              href: '/services'
            },
            {
              name:'CAD To BIM',
              href: '/services'
            },
            {
              name:'Revit Family Creation',
              href: '/services'
            },
            {
              name:'Clash Detection',
              href: '/services'
            },
            {
              name:'BIM Automation',
              href: '/services'
            },
            {
              name:'BIM For Facility Management',
              href: '/services'
            },
          ]
        },
        {
          name: 'MEP BIM Services',
          href: '/services',
          subMenus:[
             {
              name:'MEP 3D Modeling',
              href: '/services'
            },
              {
              name:'Mechanical Modeling & Drawing',
              href: '/services'
            },
          ]
          
          
        },
        {
          name: 'Architectural BIM Services',
          href: '/services',
             subMenus:[
             {
              name:'Architectural 3D Modeling',
              href: '/services'
            },
              {
              name:'Construction Drawing',
              href: '/services'
            },
          ]
        },
        {
          name: 'Structural BIM Services',
          href: '/services',
          subMenus:[
             {
              name:'Structural 3D Modeling',
              href: '/services'
            },
              {
              name:'Rahbar Drawing',
              href: '/services'
            },
          ]
        },
        {
          name: 'Designing Services',
          href: '/services',
        },
        {
          name: 'Virtual Designing Services',
          href: '/services',
        },
      ]
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
  const icons =[Facebook ,Twitter, Instagram ,Linkedin]
  return (
    <div className='w-full absolute z-30'>
      <Container className="flex justify-between items-center py-4 text-white">
        <Image src={logo} alt='logo' className='max-w-[183px] filter invert-100 brightness-0 ' />
        <p className='font-open'>Make a call: (727) 497 7285</p>
        <ul className='flex gap-5'>
          {icons.map((Icon,index)=>(
            <li key={index}><Icon/></li>
          ))}
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
                <li key={index} className={`hover:text-[#FAFAFA96] relative group ${isActive ? "text-[#FAFAFA96]" : ""}`}>
                  <Link href={navItem.href} className='flex gap-2'>
                  {navItem.name}
                  {navItem.subItems && (
                    <ChevronDown className='group-hover:rotate-180 transition-transform duration-300 ease-in-out'/>
                  )}
                  </Link>
                  {navItem.subItems && (
                    <div className='absolute top-4 min-w-[250px] bg-transparent pt-7 hidden group-hover:block transition-transform duration-300 ease-in-out '>
                      <ul className='bg-white text-black'>
                        {navItem.subItems.map((subItem, index)=>(

                        <li key={index} className='py-3 px-4 border-b border-gray-300 relative group/subItem hover:bg-[#e5ffff] cursor-pointer'>
                          <Link href={subItem.href} className='flex justify-between'>
                          {subItem.name}
                          {subItem.subMenus && (
                            <ChevronRight/>
                          )}

                          </Link>
                          {subItem.subMenus && (
                            <div className='absolute left-full min-w-[250px] top-0 hidden group-hover/subItem:block'>
                              <ul className='bg-white text-black'>
                                {subItem.subMenus.map((subMenu, index)=>(

                                <li key={index} className='py-3 px-4 border-b border-gray-300 hover:bg-[#e5ffff] cursor-pointer'><Link href={subMenu.href}>{subMenu.name}</Link></li>
                                ))}
                              </ul>
                            </div>
                          )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
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
