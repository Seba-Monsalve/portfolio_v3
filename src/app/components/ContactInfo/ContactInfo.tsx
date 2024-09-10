import Link from 'next/link'
import React from 'react'
import { FaGithub, FaLinkedinIn, FaPhoneSquare } from 'react-icons/fa'
import { IoMdMail } from 'react-icons/io'

export const ContactInfo = () => {
  return (
    <div className='flex justify-center items-center gap-5 '>
      <Link className='flex flex-row items-center gap-4 transition-all hover: hover:border-1 hover:bg-[#9c9389] p-3 rounded-lg ' href={'https://wa.me/+56986137348'} ><FaPhoneSquare className='hover:fill-white' size={40} />  </Link>
      <Link className='flex flex-row items-center gap-4 transition-all hover: hover:border-1 hover:bg-[#9c9389] p-3 rounded-lg ' href={'mailto:sebastian.monsalve@usach.cl'} ><IoMdMail className='hover:fill-white' size={40} />  </Link>
      <Link className='flex flex-row items-center gap-4 transition-all hover: hover:border-1 hover:bg-[#9c9389] p-3 rounded-lg ' href={'https://github.com/Seba-Monsalve'} ><FaGithub className='hover:fill-white' size={40} />  </Link>
      <Link className='flex flex-row items-center gap-4 transition-all hover: hover:border-1 hover:bg-[#9c9389] p-3 rounded-lg ' href={'https://www.linkedin.com/in/seba-monsalve/'} ><FaLinkedinIn className='hover:fill-white' size={40} />  </Link>
    </div>
  )
}