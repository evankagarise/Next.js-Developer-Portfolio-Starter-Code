import Link from 'next/link'
import React from 'react'
import Logo from './Logo'
import {useRouter} from 'next/router'
import { DribbbleIcon, GithubIcon, LinkedInIcon, PinterestIcon, TwitterIcon } from './Icons'

const CustomLink = ({href, title, className=""}) => {
    const router = useRouter()

    return (
        <Link href={href} className={`${className} relative group`}>
            {title}

            <span  className={`h-[1px] inline-block  bg-dark absolute left-0 
            -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? 'w-full' : 'w-0'}`}>&nbsp;</span>
        </Link>
    )
}
const Navbar = () => {
  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between '>
        <nav>
           <CustomLink href='/' title="Home" className='mr-4' />
           <CustomLink href='/about' title="About" className='mx-4' />
           <CustomLink href='/projects' title="Projects" className='mx-4' />
           <CustomLink href='/articles' title="Articles" className='ml-4' />
        </nav>
        <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
             <Logo />
        </div>
      
        <nav className='flex items-center justify-center flex-wrap gap-2'>
            <Link href="/" target={"_blank"} ><TwitterIcon /></Link>
            <Link href="/" target={"_blank"} ><GithubIcon /></Link>
            <Link href="/" target={"_blank"} ><LinkedInIcon /></Link>
            <Link href="/" target={"_blank"} ><PinterestIcon /></Link>
            <Link href="/" target={"_blank"} ><DribbbleIcon /></Link>
           
        </nav>
    </header>
  )
}

export default Navbar