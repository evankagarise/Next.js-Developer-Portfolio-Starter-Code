import Link from 'next/link'
import React from 'react'
import Logo from './Logo'

const CustomLink = ()
const Navbar = () => {
  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between '>
        <nav>
            <Link href="/home" className='mx-4'>Home
            <span className='h-[1px] inline-block w-0 bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300'>&nbsp;</span>
            </Link>
            <Link href="/about" className='mx-4'>About</Link>
            <Link href="/projects" className='mx-4'>Projects</Link>
            <Link href="/articles" className='mx-4'>Blog</Link>
        </nav>
        <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
             <Logo />
        </div>
      
        <nav>
            <Link href="/" target={"_blank"} >T</Link>
            <Link href="/" target={"_blank"} >T</Link>
            <Link href="/" target={"_blank"} >T</Link>
            <Link href="/" target={"_blank"} >T</Link>
            <Link href="/" target={"_blank"} >T</Link>
            <Link href="/" target={"_blank"} >T</Link>
        </nav>
    </header>
  )
}

export default Navbar