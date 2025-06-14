import Heroimg from '../assets/hero.png';
import { AiOutlineLinkedin, AiOutlineGithub, AiOutlineWhatsApp } from "react-icons/ai";
import { Typewriter } from 'react-simple-typewriter';

export default function Hero() {
  const config = {
    social: {
      linkedin: 'https://www.linkedin.com/in/sundar8506',
      github: 'https://github.com/Sundar8506',
      whatsapp: 'https://wa.me/+918870136394',
    },
  };

  return (<section className='relative flex flex-col md:flex-row px-4 py-12 bg-black items-center justify-between overflow-hidden '>
    {/* Text Content */}
    <div className='w-full md:w-1/2 flex flex-col  text-center md:text-left'>
      <h1 className='text-white text-4xl font-hero-font relative'>
        Hi,<br />
        <span className='py-3 inline-block'>I'm K Sundhareshan.</span>
      </h1>
  
      <h2 className="text-white text-xl font-hero-font py-3">
        <Typewriter
          words={[
            'Full Stack Developer.',
            'Frontend Developer.',
            'React.js Enthusiast.',
            'UI/UX Designer.',
            'Python Programmer.',
            'RPA & Automation.',
            'Graphic Designer.',
            'Digital Marketing Specialist.', 
          ]}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={50}
          deleteSpeed={20}
          delaySpeed={1000}
        />
      </h2>
  
      <div className='flex justify-center md:justify-start py-10 px-2'>
        <a href={config.social.linkedin} target="_blank" rel="noopener noreferrer" className='text-white pr-3  transition-transform duration-500 ease-in-out
 hover:scale-150
'>
          <AiOutlineLinkedin size={60} />
        </a>
        <a href={config.social.github} target="_blank" rel="noopener noreferrer" className=' text-white pr-3 transition-transform duration-500 ease-in-out
 hover:scale-150
'>
          <AiOutlineGithub size={60} />
        </a>
        <a href={config.social.whatsapp} target="_blank" rel="noopener noreferrer" className='text-white pr-3 transition-transform duration-500 ease-in-out
 hover:scale-150
0'>
          <AiOutlineWhatsApp size={60} />
        </a>
      </div>
    </div>
  
    {/* Hero Image Overlay */}
    <div className=' absolute md:relative md:w-1/3 px-10 z-0  opacity-20 md:opacity-100 inset-0'>
    <img
  src={Heroimg}
  alt="Hero section illustration"
  className="w-full object-cover scale-110 md:scale-125 transition-transform duration-500 ease-in-out hover:scale-150"
/>

    </div>
  </section>
  
  );
}
