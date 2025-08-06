"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const sections = ["home", "about", "experience", "projects", "contact"];

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const offset = 100;

      for (let sec of sections) {
        const el = document.getElementById(sec);
        if (el) {
          const top = el.offsetTop - offset;
          const bottom = top + el.offsetHeight;
          if (scrollY >= top && scrollY < bottom) {
            setActiveSection(sec);
            break;
          }
        }
      }

      if (scrollY < 100) setActiveSection("home");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Me" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact Me" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="w-full h-[65px] fixed z-50 px-4 sm:px-10 backdrop-blur-sm bg-gradient-to-r from-[#0f0f1f] to-[#1b0e1e] border-b border-purple-700/40 shadow-lg rounded-b-xl">
      <div className="w-full h-full flex items-center justify-between m-auto">
        {/* Logo */}
        <a
          href="/"
          className="flex items-center group transition-transform duration-300 hover:scale-105"
        >
          <Image
            src="/Logo.svg"
            alt="Irfan Shaikh - Developer"
            width={100}
            height={100}
            sizes="100vw"
            className="py-6 w-1/2 h-56"
          />
          {/* <span className="ml-2 text-white hidden sm:inline-block text-lg font-semibold group-hover:text-purple-400 transition-colors duration-300">
            Irfan Shaikh
          </span> */}
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.id === "home" ? "/" : `#${link.id}`}
              className={`px-4 py-2 text-white rounded-lg transition-all duration-300 ${
                activeSection === link.id
                  ? "text-purple-400 font-semibold shadow-md shadow-purple-500/20"
                  : "hover:text-purple-400 hover:shadow-lg hover:shadow-purple-600/20"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Hamburger (Mobile) */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white text-2xl focus:outline-none">
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center bg-[#0d1117] py-4 rounded-b-xl shadow-md animate-slide-down">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.id === "home" ? "/" : `#${link.id}`}
              onClick={closeMenu}
              className={`block w-full text-center text-white py-2 transition-colors duration-200 ${
                activeSection === link.id
                  ? "text-purple-400 font-semibold"
                  : "hover:text-purple-400"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
