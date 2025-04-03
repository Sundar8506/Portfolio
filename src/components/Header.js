import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'

export default function Header(){
    const[toggleMenu,setToggleMenu] =useState(false);
    return <header className="flex justify-between px-5 py-2 bg-primary">
        <a className="font-bold text-black" href='#'>Sundhareshan's Portfolio...</a>
        <nav className="hidden md:block "> 
        <ul className="flex text-white font-extrabold">
            <li><a href="/">HOME</a></li>
            <li><a href="/#about">ABOUT</a></li>
            <li><a href="/#project">PROJECTS</a></li>
            <li><a href="/#resume">RESUME</a></li>
            <li><a href="/#contact">CONTACT</a></li>
            
         </ul>
        </nav>
        {toggleMenu&&<nav className="block md:hidden "> 
        <ul onClick={()=>setToggleMenu(!toggleMenu)} className="flex flex-col text-white mobile-nav">
            <li><a href="/">HOME</a></li>
            <li><a href="/#about">ABOUT</a></li>
            <li><a href="/#project">PROJECTS</a></li>
            <li><a href="/#resume">RESUME</a></li>
            <li><a href="/#contact">CONTACT</a></li>
       
         </ul>
        </nav>}
        <button onClick={()=>setToggleMenu(!toggleMenu)} className='block md:hidden'><Bars3Icon className='text-white h-3'/>   </button>
      
    </header>

}