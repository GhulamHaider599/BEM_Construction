'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, ChevronRight } from 'lucide-react'
import { usePathname } from 'next/navigation'

const MobileMenu = ({ navItems, closeMenu }) => {
  const pathname = usePathname()
  const [activeMenu, setActiveMenu] = useState(null)
  const [activeSubMenu, setActiveSubMenu] = useState(null)

  const toggleMenu = (index) => {
    setActiveMenu(prev => (prev === index ? null : index))
  }

  const toggleSubMenu = (index) => {
    setActiveSubMenu(prev => (prev === index ? null : index))
  }

  return (
    <div className='w-full min-h-[400px] bg-white py-3'>
      <ul className='flex flex-col gap-y-2 text-black'>
        {navItems.map((navItem, index) => {
          const isActive = pathname === navItem.href
          const isOpen = activeMenu === index

          return (
            <li key={index} className={`py-3 border-b border-gray-300 px-4`}>
              <div
                className='flex justify-between items-center cursor-pointer'
                onClick={() => navItem.subItems ? toggleMenu(index) : null}
              >
                <Link href={navItem.href} className={`${isActive ? 'text-[#FF6210]' : ''}`} onClick={closeMenu}>
                  {navItem.name}
                </Link>

                {navItem.subItems && (
                  <ChevronDown
                    className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                  />
                )}
              </div>

              {navItem.subItems && isOpen && (
                <ul className='bg-white text-black mt-2 pl-4'>
                  {navItem.subItems.map((subItem, subIndex) => {
                    const subOpen = activeSubMenu === subIndex
                    return (
                      <li key={subIndex} className='py-3 border-b border-gray-300'>
                        <div
                          className='flex justify-between items-center cursor-pointer'
                          onClick={() => subItem.subMenus ? toggleSubMenu(subIndex) : null}
                        >
                          <Link href={subItem.href} onClick={closeMenu}>{subItem.name}</Link>
                          {subItem.subMenus && (
                            <ChevronRight
                              className={`transition-transform duration-300 ${subOpen ? 'rotate-90' : ''}`}
                            />
                          )}
                        </div>

                        {subItem.subMenus && subOpen && (
                          <ul className='bg-white text-black mt-2 pl-4'>
                            {subItem.subMenus.map((subMenu, i) => (
                              <li key={i} className='py-2 border-b border-gray-300'>
                                <Link href={subMenu.href} onClick={closeMenu}>{subMenu.name}</Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    )
                  })}
                </ul>
              )}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default MobileMenu
