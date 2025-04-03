import Heroimg from '../assets/hero.png'
import { AiOutlineLinkedin,AiOutlineGithub ,AiOutlineWhatsApp } from "react-icons/ai";

export default function Hero(){
  const config ={
    subtitle : "I'm a Front-end Developer and designer",
    social:{
      linkedin:'https://www.linkedin.com/in/sundar8506',
      github:'https://github.com/Sundar8506',
      whatsapp:'https://wa.me/+918870136394'
    }
  }
    return <section className=' flex flex-col md:flex-row px-1 py-12 bg-primary justify-center' >
      <div className='w-1/2 flex flex-col'>
      <h1 className=' text-black md:text-white text-4xl font-hero-font '>Hi ,<br/><br/>I'm <span className='text-black py-3'>K </span>Sundhareshan
      <p className='text-2xl py-3'>{config.subtitle}</p>
      </h1>
        <div className='flex py-10 px-2 '>
            <a href={config.social.linkedin} className='pr-3 hover:text-white'><AiOutlineLinkedin size={40}  /></a>
            <a href={config.social.github} className='pr-3  hover:text-white' ><AiOutlineGithub size={40}   /></a>
            <a href={config.social.whatsapp}className='pr-3  hover:text-white'><AiOutlineWhatsApp size={40}  /></a>
        </div>
      </div>
     
      <img className='md: w-1/3' src={Heroimg} ></img>
    </section>
}