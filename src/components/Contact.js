import ContactImg from '../assets/contact.gif';
export default function Contact() {
  const config = {
    email: 'sundareshan140@gmail.com',
    number: '+91 8870136394',
  };

  return (
    <section className="flex flex-col md:flex-row bg-primary text-white px-5 py-32" id="contact">
      <div className="md:w-1/2 flex justify-center items-center">
        <img className="w-[300px]" src={ContactImg} alt="Resume" />
      </div>
      <div className="md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left">
        <h1 className="text-4xl md:text-5xl mb-5 w-[140px] font-bold underline">Contact</h1>
        <p className="pb-6 text-lg md:text-xl">You can contact me:</p>

        <p className="py-2 text-lg md:text-xl">
          <span className="font-bold">Email: </span>
          <a
            href={`mailto:${config.email}?subject=${encodeURIComponent('Hello Sundhareshan')}&body=${encodeURIComponent('Hi Sundhareshan,\n\n')}`}
            className="hover:underline hover:text-[#f9f8f8] transition-all text-lg md:text-xl"
          >
            {config.email}
          </a>
        </p>

        <p className="py-2 text-lg md:text-xl">
          <span className="font-bold">Phone Number: </span>
          <a
            href={`tel:${config.number}`}
            className="hover:underline hover:text-[#f9f8f8] transition-all text-lg md:text-xl"
          >
            {config.number}
          </a>
        </p>
      </div>
    </section>
  );
}
