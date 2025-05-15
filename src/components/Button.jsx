import Link from 'next/link'
import React from 'react'

const Button = ({txt, className, href, icon}) => {
  return (
    <Link href={href || '#'} className={`cursor-pointer p-5 flex gap-1 items-center w-max bg-white group rounded-sm  transition-colors duration-300 ease-in-out hover:bg-purple text-purple hover:text-white font-bold text-sm font-roboto text-shadow-2xs  ${className}`}>
      {icon}
        {txt}
    </Link>
  )
}

export default Button