import Link from 'next/link'
import React from 'react'
import { FaGithub, FaLinkedinIn, FaPhoneSquare } from 'react-icons/fa'
import { IoMdMail } from 'react-icons/io'

export const ContactInfo = () => {
  return (
    <div className='grid grid-cols-2 gap-2 '>
      <Link className='flex flex-row items-center gap-4 hover:animate-pulse hover:border-1 ' href={'https://wa.me/+56986137348'} ><FaPhoneSquare size={50} /> WhatsApp </Link>
      <Link className='flex flex-row items-center gap-4 hover:animate-pulse hover:border-1 ' href={'mailto:sebastian.monsalve@usach.cl'} ><IoMdMail size={50} /> Email </Link>
      <Link className='flex flex-row items-center gap-4 hover:animate-pulse hover:border-1 ' href={'https://github.com/Seba-Monsalve'} ><FaGithub size={50} /> GitHub </Link>
      <Link className='flex flex-row items-center gap-4 hover:animate-pulse hover:border-1 ' href={'https://www.linkedin.com/in/seba-monsalve/'} ><FaLinkedinIn size={50} /> LinkedIn </Link>
    </div>
  )
}