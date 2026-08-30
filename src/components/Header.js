import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header className="fixed top-0 z-30 flex justify-between items-center w-full px-5 py-2 bg-white shadow-md">
      {/* Portfolio Title */}
      <button className="text-xl font-extrabold text-black">
        Sundhareshan's Portfolio...
      </button>

      {/* Desktop Menu */}
      <nav className="hidden md:block">
        <ul className="flex space-x-5 text-black font-extrabold">
          <li>
            <a href="/">HOME</a>
          </li>
          <li>
            <a href="/#about">ABOUT</a>
          </li>
          <li>
            <a href="/#experience">EXPERIENCE</a>
          </li>
          <li>
            <a href="/#project">PROJECTS</a>
          </li>
          <li>
            <a href="/#resume">RESUME</a>
          </li>
          <li>
            <a href="/#contact">CONTACT</a>
          </li>
        </ul>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full bg-black bg-opacity-90 p-5 transition-transform duration-500 ease-in-out z-50 ${
          toggleMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul
          onClick={() => setToggleMenu(false)}
          className="flex flex-col text-white space-y-5"
        >
          <li>
            <a href="/">HOME</a>
          </li>
          <li>
            <a href="/#about">ABOUT</a>
          </li>{" "}
          <li>
            <a href="/#experience">EXPERIENCE</a>
          </li>
          <li>
            <a href="/#project">PROJECTS</a>
          </li>
          <li>
            <a href="/#resume">RESUME</a>
          </li>
          <li>
            <a href="/#contact">CONTACT</a>
          </li>
        </ul>
      </div>

      {/* Hamburger / Close Button */}
      <button
        onClick={() => setToggleMenu(!toggleMenu)}
        aria-label={toggleMenu ? "Close menu" : "Open menu"} // Added accessibility label
        className="block md:hidden transition-transform duration-300 hover:scale-110"
      >
        {toggleMenu ? (
          <XMarkIcon className="text-white h-6 w-6" />
        ) : (
          <Bars3Icon className="text-black h-6 w-6" />
        )}
      </button>
    </header>
  );
}
