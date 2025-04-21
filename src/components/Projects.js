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
    return <section className="flex flex-col py-20 px-5 justify-center bg-primary text-white" id="project">
    <div className="w-full px-10 py-5">
      <h1 className="text-4xl border-b-4 border-secondary mb-5 w-[150px] font-bold">Projects</h1>
      <p className="font-hero-font text-white">These are my <span className="text-secondary">Projects</span></p>
    </div>
  
    <div className="w-full px-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
        {config.projects.map((project, index) => (
          <div
            key={index}
            className="relative group rounded-2xl overflow-hidden shadow-lg"
          >
            {/* Project Image */}
            <img
              className="h-[250px] w-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              src={project.image}
              alt={project.Title}
            />
  
            {/* Hidden Description on Hover */}
            <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center p-5 text-center">
              <h1 className="text-xl font-bold text-white mb-2">{project.Title}</h1>
              <p className="text-sm text-white mb-4">{project.description}</p>
              <a
               className="bg-secondary text-black px-4 py-2 rounded hover:scale-110 hover:bg-white hover:text-black transition-transform duration-300 ease-in-out"
                target="_blank"
                rel="noopener noreferrer"
                href={project.link}
                >
                GitHub Link
                </a>
        </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  
  
}