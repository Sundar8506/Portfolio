import { useState } from "react";
import ResumeImg from "../assets/resume.gif";
import Confetti from "react-confetti";
import toast, { Toaster } from "react-hot-toast";

export default function Resume() {
  const config = {
    link: "https://drive.google.com/file/d/1HRcgBQ4VhXYaCLlO9iT5rVTnf4Ewz_sN/view"
  };

  const [shake, setShake] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();

    // 1. Shake animation
    setShake(true);
    // 2. Confetti burst
    setShowConfetti(true);
    // 3. Toast message
    toast.success("Opening resume...");

    setTimeout(() => {
      setShake(false);
      setShowConfetti(false);
      window.open(config.link, "_blank");
    }, 1000);
  };

  return (
    <section className="relative flex flex-col h-screen md:flex-row bg-secondary px-5 py-20 " id="resume">
      <Toaster /> {/* Toast container */}
      {showConfetti && <Confetti numberOfPieces={1000} recycle={false} />}
      
      <div className="py-5 py-10 md:w-1/2 flex justify-center md:justify-end">
        <img className="max-w-full mt-10" src={ResumeImg} alt="Resume" />
      </div>
      
      <div className="md:w-1/2 flex justify-center">
        <div className="flex flex-col justify-center text-black">
          <h1 className="text-4xl border-b-4 border-black mb-5 w-[140px] font-bold">Resume</h1>
          <p className="pb-6 font-bold">
            My Resume is Here 👉{" "}
            <a
              href={config.link}
              onClick={handleClick}
              className={`inline-block px-4 py-2 rounded transition-transform transform hover:scale-110 hover:bg-black hover:text-white ${
                shake ? "animate-shake" : ""
              }`}
            >
              Click Here!
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
