import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/free-mode";
import { Autoplay, FreeMode } from "swiper/modules";

const Exp = () => {
  const [active, setActive] = useState(null);

  const lang = [
    {
      Name: "Software Engineer",
      logo: require("../assets/Ashok_Leyland-Logo.png"),
      skills: "Apr 2026 - Present",
      para: "Ashok Leyland | Deputed through Hinduja Tech Limited",
      desc: "Working on application support and enhancement for Ashok Leyland, developing React.js interfaces, fixing production issues, integrating Fast APIs, and supporting deployments across environments.",
    },
    {
      Name: "Front-End Developer",
      logo: require("../assets/HindujaTechLogo.png"),
      skills: "Sep 2025 - Apr 2026",
      para: "Hinduja Tech Limited | ALM Project",
      desc: "Developed a unified ALM platform for Ashok Leyland using React.js and SCSS, built role-based dashboards for 15+ users, and integrated GitLab, Redmine, and IBM APIs for end-to-end traceability.",
    },
    {
      Name: "Full Stack Developmemt",
      logo: require("../assets/hazhtech.png"),
      skills: "3 months",
      para: "Internship at Hazhtech Solution",
      desc: "Created a Interactive Website Using React.js and Node.js.Learned about RESTful APIs and Styling Techniques.",
    },
    {
      Name: "UI/UX Designer",
      logo: require("../assets/infotact.png"),
      skills: "4 weeks",
      para: "Internship at Infotact Solutions",
      desc: "Designed user interfaces and experiences for web and mobile applications using Figma.",
    },
    {
      Name: "Full Stack Developmemt",
      logo: require("../assets/sedin.png"),
      skills: "4 weeks",
      para: "Internship at Sedin Technologies",
      desc: "Created a Interactive Website Using React.js and Node.js.Learned about RESTful APIs and Styling Techniques.",
    },
    {
      Name: "Graphic Designer",
      logo: require("../assets/magnion.png"),
      skills: "4 weeks",
      para: "Internship at Magnion Technologies",
      desc: "Created logos, marketing materials and digital assets using Adobe Photoshop and Canva.",
    },
    {
      Name: "Web Development",
      logo: require("../assets/codebind logo.jpg"),
      skills: "4 weeks",
      para: "Internship at Codebind Tech",
      desc: "Created and maintained websites using HTML, CSS, JavaScript, and PHP.",
    },
  ];

  return (
    <section
      id="experience"
      className="min-h-screen py-9 pt-20 px-6 md:px-16 lg:px-32 bg-black dark:bg-[#00052a] transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-white dark:text-white hover:text-[#EFB036] transition">
          Experience
        </h2>

        <Swiper
          freeMode={true}
          loop={true}
          grabCursor={true}
          centeredSlides={true}
          speed={800}
          autoplay={{ delay: 3000 }}
          onSlideChange={(cur) => setActive(cur.realIndex)}
          modules={[Autoplay, FreeMode]}
          className="!overflow-visible px-2 md:px-4"
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 30 },
            768: { slidesPerView: 2, spaceBetween: 35 },
            1024: { slidesPerView: 3, spaceBetween: 50 },
          }}
        >
          {lang.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="h-full flex justify-center">
                <div
                  className={`relative p-6  m-2 bg-white rounded-2xl w-full max-w-sm transition duration-300 ease-in-out
                  ${active === i ? "scale-105 shadow-2xl" : "scale-95 shadow-md"} 
                  bg-white dark:bg-white-800 text-gray-900 dark:text-white`}
                >
                  <div className="flex justify-center  bg-white">
                    <img
                      src={item.logo}
                      alt={item.Name}
                      className="h-20 md:h-24 w-auto max-w-[150px] object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-1 text-black">
                    {item.Name}
                  </h3>
                  <p className="text-sm text-black dark:text-black-300 mb-2">
                    {item.para}
                  </p>
                  <p className="text-sm leading-relaxed text-black dark:text-black-200">
                    {item.desc}
                  </p>

                  <div className="absolute top-4 right-4 text-xs font-medium px-3 py-1 bg-[#EFB036] rounded-full shadow-md">
                    {item.skills}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Exp;
