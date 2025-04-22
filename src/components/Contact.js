export default function Contact() {
  const config = {
    email: 'sundhareshan140@gmail.com',
    number: '+91 8870136394',
  };

  return (
    <section className="flex flex-col bg-primary text-white px-5 py-32" id="contact">
      <div className="flex flex-col items-center text-center">

        <h1 className="text-4xl md:text-5xl border-b-4 border-[#f9f8f8] mb-5 w-[140px] font-bold">Contact</h1>
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
