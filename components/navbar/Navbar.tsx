import { useRouter } from 'next/router';
import React, { useState } from 'react'
import Styles  from './navbar.module.css';
import {motion } from 'framer-motion'
import logo from '../../public/assets/logopng.png' 
// import logo from '../../public/assets/ship.png'
import Image from 'next/image';

const Navbar = () => {

    const[open , setOpen] = useState<boolean>(false)
      const openFunc = ()=>{
        setOpen(!open)
    }

    interface CustomLinkProps {
        href: string;
        children: React.ReactNode;
      }

    const CustomLink: React.FC<CustomLinkProps> = ({ href, children }) => {
        const router = useRouter();
      
        return (
          <div className={`font-semibold flex items-center justify-center text-sm relative group cursor-pointer  md:text-white ${router.asPath === href ? 'text-primary' : 'text-black'} `} onClick={() => router.push(href)}>
            <a href={href}>
              {children}
            </a>
            
            <span className={`absolute h-[2px] left-0 -bottom-0.5 bg-primary inline-block group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? 'w-full' : 'w-0'}`}></span>
          </div>
        );
      };
  return (
    <>
      <div className={`sticky top-0 z-50 w-screen ${Styles.glass}`}>
        <div className={`max-w-[1400px] m-auto px-6 py-2 flex items-center justify-between `}>
            {/* logo */}
            <div className=''>
                <Image src={logo} alt='' className='w-32 h-auto'/>
            </div>

            {/* Links */}
            <div className='flex gap-6 font-medium text-base md:hidden'>
                <CustomLink href='/'>Home</CustomLink>
                <CustomLink href='/about'>About Us</CustomLink>
                <CustomLink href='/blog'>Blog</CustomLink>
                <CustomLink href='/contact'>Contact</CustomLink>
            </div>


            <div className=' flex-col pl-6 justify-center items-center md:flex hidden cursor-pointer' onClick={openFunc}>
                <span className={`h-[2px] w-6 bg-black transition-all block  rounded-lg ${!open ? 'translate-y-2.5':'rotate-45 translate-y-1'}`}></span>
                <span className={`h-[2px] w-6 bg-black transition-all block my-0.5  rounded-lg ${!open ? ' opacity-100':'opacity-0'}`}></span>
                <span className={`h-[2px] w-6 bg-black transition-all block  rounded-lg ${!open ? '-translate-y-2.5':'-rotate-45 -translate-y-1'}`}></span>
            </div>
        </div>
      </div>
      { open ?
            
            <motion.div 
              initial={{scale:0 , opacity:0 , x:"-50%" , y:"-50%"}}
              animate={{opacity:1 , scale:1}}
              transition={{repeatType:"reverse" , duration:.3}}
              className='fixed min-w-[70vw] flex flex-col gap-6 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  items-center justify-center
              bg-dark/90 backdrop-blur-md py-32 rounded-lg z-50'>
              <div className="flex gap-6 text-white xs:flex-col">
                  <CustomLink href='/'>Home</CustomLink>
                  <CustomLink href='/about'>About</CustomLink>
                  <CustomLink href='/blog'>Blog</CustomLink>
                  <CustomLink href='/contact'>Contact</CustomLink>
              </div>        
            </motion.div>:""}
        
    </>
  )
}

export default Navbar