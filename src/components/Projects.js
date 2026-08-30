import websiteImg1 from "../assets/download 1.png";
import websiteImg2 from "../assets/download 4.jpeg";
import websiteImg3 from "../assets/download 2.jpeg";
import websiteImg4 from "../assets/download 3.png";
import fitness from "../assets/fitness.png";
import ecommerce from "../assets/e-commerce.png";
import { useState, useEffect, useRef } from "react";

export default function Projects() {
  const config = {
    projects: [
      {
        image: websiteImg1,
        Title: "E-commerce Site",
        description:
          "I built a E-commerce website where users can browse products, add them to their cart, and make purchases. I used React.js, HTML, CSS, and MySQL to develop a smooth and interactive user experience.",
        link: "https://sedinfakestore.netlify.app/",
      },
      {
        image: websiteImg2,
        Title: "Automated Tap (IoT)",
        description:
          "This project focuses on smart water management using IoT. I used sensors and microcontrollers to automate the tap, reducing water wastage and promoting efficiency.",
        link: "https://github.com/Sundar8506/iot.git",
      },
      {
        image: websiteImg3,
        Title: "Emoji Finder",
        description:
          "I developed a simple yet fun Emoji Finder that helps users search for emojis based on keywords. This project enhances user experience and is useful for chat applications.",
        link: "https://emojisearch-eight.vercel.app/",
      },
      {
        image: websiteImg4,
        Title: "KeyLogger",
        description:
          "I designed a KeyLogger for security testing, which records keystrokes for ethical hacking and cybersecurity research. This project helps understand how keylogging works and how to prevent malicious attacks.",
        link: "https://github.com/Sundar8506/cybersecurity.git",
      },
      {
        image: fitness,
        Title: "Fitness Tracker",
        description:
          "A user-centric fitness tracking app with real-time workout monitoring, goal setting, progress visualization, and personalized reminders in a clean, intuitive interface.",
        link: "https://www.figma.com/design/QJxrUQiIhCLSmH67r7OYXo/pro-fitness?node-id=0-1&p=f&t=8cgM9r5wuzEr2BsE-0",
      },
      {
        image: ecommerce,
        Title: "E-commerce Landing Page",
        description:
          "Designed a modern, responsive e-commerce landing page in Figma with a consistent, user-centric design for both website and mobile, optimized for clarity, usability, and conversions.",
        link: "https://www.figma.com/design/ynz5KE1IOtcedzQtz9udYH/e-commerce?node-id=72-4006&p=f&t=WbdQlA98m9wY2N9f-0",
      },
    ],
  };

  const projectsPerPageDefault = 4;
  const [projectsPerPageState, setProjectsPerPage] = useState(
    projectsPerPageDefault,
  );
  const totalPages = Math.ceil(config.projects.length / projectsPerPageState);
  const [currentPage, setCurrentPage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);

  const handleDotClick = (index) => {
    setCurrentPage(index);
    const container = containerRef.current;
    if (container) {
      container.scrollTo({
        left: index * container.clientWidth,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = (e) => {
    const scrollLeft = e.target.scrollLeft;
    const width = e.target.clientWidth;
    const pageIndex = Math.round(scrollLeft / width);
    if (pageIndex !== currentPage) {
      setCurrentPage(pageIndex);
    }
  };

  // Auto scroll for mobile view with infinite loop
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let scrollAmount = 0;
    const scrollStep = container.clientWidth;
    const scrollInterval = 3000; // 3 seconds

    const interval = setInterval(() => {
      if (!isHovered) {
        scrollAmount += scrollStep;
        if (scrollAmount >= container.scrollWidth) {
          scrollAmount = 0;
        }
        container.scrollTo({
          left: scrollAmount,
          behavior: "smooth",
        });
        const pageIndex = Math.floor(scrollAmount / container.clientWidth);
        setCurrentPage(pageIndex);
      }
    }, scrollInterval);

    return () => clearInterval(interval);
  }, [isHovered]);

  // Determine projects per page based on screen width
  useEffect(() => {
    const updateProjectsPerPage = () => {
      if (window.innerWidth < 768) {
        // Mobile view: 1 project per page
        setProjectsPerPage(1);
      } else {
        setProjectsPerPage(projectsPerPageDefault);
      }
    };
    updateProjectsPerPage();
    window.addEventListener("resize", updateProjectsPerPage);
    return () => window.removeEventListener("resize", updateProjectsPerPage);
  }, []);

  return (
    <section
      className="flex flex-col min-h-screen py-10 px-5 justify-center bg-primary text-white"
      id="project"
    >
      <div className="w-full px-10 py-5">
        <h1 className="text-4xl border-b-4 border-secondary mb-5 w-[150px] font-bold">
          Projects
        </h1>
        <p className="font-hero-font text-white">
          These are my <span className="text-secondary">Projects</span>
        </p>
      </div>

      <div className="w-full px-10 overflow-hidden">
        <div
          ref={containerRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto scroll-smooth gap-6 snap-x snap-mandatory hide-scrollbar"
        >
          {config.projects.map((project, index) => (
            <div
              key={index}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="relative group rounded-2xl overflow-hidden shadow-lg flex-shrink-0 snap-center"
              style={{ width: `calc(100% / ${projectsPerPageState} - 1.5rem)` }}
            >
              {/* Project Image */}
              <img
                className="h-[250px] w-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                src={project.image}
                alt={project.Title}
              />

              {/* Hidden Description on Hover */}
              <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center p-5 text-center">
                <h1 className="text-xl font-bold text-white mb-2">
                  {project.Title}
                </h1>
                <p className="text-sm text-white mb-4">{project.description}</p>
                <a
                  className="bg-secondary text-black px-4 py-2 rounded hover:scale-110 hover:bg-white hover:text-black transition-transform duration-300 ease-in-out"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={project.link}
                >
                  View Projects
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-4 space-x-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`h-3 w-3 rounded-full ${index === currentPage ? "bg-secondary" : "bg-gray-400"}`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
