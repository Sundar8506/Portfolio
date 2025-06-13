import AboutImg from "../assets/about-section.gif"
export default function About(){
     const config ={
        line1:'A passionate Software Engineer with a strong interest in web development, frontend design, and automation. I love building dynamic and interactive web applications using React.js, HTML, CSS, and JavaScript. Along with frontend development, I have experience working with Python, Java, MySQL, and RPA, which helps me create efficient and scalable solutions.',
        line2:'I have completed multiple internships in full-stack development, digital marketing, and graphic design, gaining hands-on experience with real-world projects. My portfolio includes exciting projects like an E-commerce site, an Automated IoT Tap, and an Email Automation System. I am always eager to learn new technologies, solve complex problems, and collaborate with innovative teams.'
      }
    return <section className="flex flex-col md:flex-row bg-secondary px-5" id="about">
        <div className="py-5 md:w-1/2 flex justify-center">
            <img src={AboutImg} alt="sunder" className="w-32 md:w-auto max-w-full h-45" />
        </div>
        <div className="md:w-1/2 flex justify-center ">
           <div className="flex flex-col justify-center ">
             <h1 className="text-4xl border-b-4 border-[rgb(0,0,0)] mb-5 w-[170px] font-bold text-black">About me </h1>
           <p className="pb-6 font-bold text-black"> {config.line1}</p>
           <p className="pb-6 font-bold text-black " >{config.line2}</p>
           </div>
        </div>
    </section>
}