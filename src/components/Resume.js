import ResumeImg from "../assets/resume.jpg"
export default function Resume(){
    const config ={
        link :'https://drive.google.com/uc?export=download&id=1fWr7_rf0txwekf6GnxumEMNHIar5e_SX'
    }
    return <section className="flex flex-col md:flex-row bg-secondary px-5" id="resume">
        <div className="py-5 md:w-1/2 flex justify-center md:justify-end">
            <img className="w-[300px] " src={ResumeImg}   />
        </div>
        <div className="md:w-1/2 flex justify-center ">
           <div className="flex flex-col justify-center text-white">
             <h1 className="text-black text-4xl border-b-4 border-[#000000] mb-5 w-[140px] font-bold ">Resume </h1>
           <p className="pb-6 font-bold text-black">My Resume is Here 👉<a className="btn text-white" href={config.link}>Download</a> </p>
           </div>
        </div>
    </section>
}