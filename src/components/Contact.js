import ResumeImg from "../assets/resume.jpg"
export default function Contact(){
  const config = {
    email :'sundhareshan@140gmail.com',
    number:'+91 8870136394'
  }
    return <section className="flex flex-col  bg-primary  text-white px-5 py-32" id="contact">
           <div className="flex flex-col items-center ">

             <h1 className="text-4xl border-b-4 border-[blueviolet] mb-5 w-[140px] font-bold ">Contact</h1>
           <p className="pb-6 ">You can Contact me  </p>
           <p className="py-2"><span className="font-bold">Email : </span>{config.email}</p>
           <p className="py-2"><span className="font-bold">Phone Number : </span>{config.number}</p>
           </div>
        
    </section>
}