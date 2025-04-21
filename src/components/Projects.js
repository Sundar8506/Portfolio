import websiteImg1 from '../assets/download 1.png'
import websiteImg2 from '../assets/download 4.jpeg'
import websiteImg3 from '../assets/download 2.jpeg'
import websiteImg4 from '../assets/download 3.png'
export default function Projects(){
    const config ={
        projects:[
            {
                image:websiteImg1,
                Title:'E-commerce Site',
                description:'I built a E-commerce website where users can browse products, add them to their cart, and make purchases. I used React.js, HTML, CSS, and MySQL to develop a smooth and interactive user experience.',
                link:'https://github.com/Sundar8506/ecommerce.git'
            },
            {
                image:websiteImg2,
                Title:'Automated Tap (IoT)',
                description:'This project focuses on smart water management using IoT. I used sensors and microcontrollers to automate the tap, reducing water wastage and promoting efficiency.',
                link:'https://github.com/Sundar8506/iot.git'
            },
            {
                image:websiteImg3,
                Title:'Emoji Finder',
                description:'I developed a simple yet fun Emoji Finder that helps users search for emojis based on keywords. This project enhances user experience and is useful for chat applications.',
                link:'https://github.com/Sundar8506/emojisearch.git'
            },
              {
                image:websiteImg4,
                Title:'KeyLogger',
                description:'I designed a KeyLogger for security testing, which records keystrokes for ethical hacking and cybersecurity research. This project helps understand how keylogging works and how to prevent malicious attacks.',
                link:'https://github.com/Sundar8506/cybersecurity.git'
            }

        ]
    }
    return <section className="flex flex-col py-20 px-5 justify-center bg-primary text-white" id='project'>
        <div className="w-full">
        <div className="flex flex-col px-10 py-5">
        <h1 className="text-4xl border-b-4 border-secondary mb-5 w-[150px] font-bold ">Projects</h1>
        <p className='font-hero-font text-white stroke-white'>These are my <span className='text-black'>Projects</span> </p>
        </div>
        </div>
        <div className="w-full">
        <div className='flex flex-col md:flex-row px-10 gap-5'>
           {config.projects.map((project)=>(  
            
            <div className='relative'>
            <img className='h-[200px] w-[900px]'src={project.image}   />
            <h1 className='font-hero-font text-center py-2'>{project.Title}</h1>
            <div className='project-desc '>
            <p className='text-center px-1 py-5 '>{project.description} </p>
            <div className='flex justify-center'>
            <a className='btn ' target='_blank' href={project.link}> These are my Project</a>
            </div>
            </div> 
            
            </div>
           
        ))}
         
          
        </div>
        
        </div>
    </section>
}