import AboutImg from "../assets/about-section.gif";

export default function About() {
  const config = {
    line1:
      "A passionate Software Engineer with a strong interest in web development, frontend design, and automation. I love building dynamic and interactive web applications using React.js, HTML, CSS, and JavaScript. I also have experience in Python, Java, MySQL, and RPA, helping me create efficient and scalable solutions.",
    line2:
      "I've completed internships in full-stack development, digital marketing, and graphic design, gaining hands-on experience with real-world projects. My portfolio includes projects like an E-commerce site, an Automated IoT Tap, and an Email Automation System. I'm always eager to learn new technologies, solve complex problems, and collaborate with innovative teams.",
  };

  return (
    <section
      className="flex flex-col min-h-screen md:flex-row bg-secondary px-5 py-0 items-center"
      id="about"
    >
      <div className="md:w-1/2 flex justify-center items-center">
        <img
          src={AboutImg}
          alt="About section illustration"
          className="w-40 h-40 object-cover mx-auto"
        />
      </div>
      <div className="md:w-1/2 flex flex-col justify-center">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl border-b-4 border-black mb-5 w-fit font-bold text-black">
            About Me
          </h1>
          <p className="pb-6 font-medium text-black text-base md:text-lg lg:text-xl">
            {config.line1}
          </p>
          <p className="pb-6 font-medium text-black text-base md:text-lg lg:text-xl">
            {config.line2}
          </p>
        </div>
      </div>
    </section>
  );
}
