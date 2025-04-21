import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'

export default function Header(){
    const[toggleMenu,setToggleMenu] =useState(false);
    return <header className="flex justify-between px-5 py-2 z-20 relative bg-white ">
        <a  href='#'>Sundhareshan's Portfolio...</a>
        <nav className="hidden md:block "> 
        <ul className="flex text-black font-extrabold z-20 relative ">
            <li><a href="/">HOME</a></li>
            <li><a href="/#about">ABOUT</a></li>
            <li><a href="/#project">PROJECTS</a></li>
            <li><a href="/#resume">RESUME</a></li>
            <li><a href="/#contact">CONTACT</a></li>
            
         </ul>
        </nav>
        {toggleMenu&&<nav className=" block md:hidden "> 
        <ul onClick={()=>setToggleMenu(!toggleMenu)} className="flex flex-col text-white bg-black p-5 absolute top-full right-0 w-1/2 rounded-lg space-y-3 shadow-lg z-50">
            <li><a href="/">HOME</a></li>
            <li><a href="/#about">ABOUT</a></li>
            <li><a href="/#project">PROJECTS</a></li>
            <li><a href="/#resume">RESUME</a></li>
            <li><a href="/#contact">CONTACT</a></li>
       
         </ul>
        </nav>}
        <button onClick={()=>setToggleMenu(!toggleMenu)} className='block md:hidden'><Bars3Icon className='text-black h-3'/>   </button>
      
    </header>

}