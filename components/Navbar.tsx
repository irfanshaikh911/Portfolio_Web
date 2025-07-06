"use client";

import Image from "next/image";
import React from "react";

const Navbar: React.FC<{}> = () => {
  return (
    <div className="w-full h-[65px] bg-['#111'] fixed backdrop-blur-sm z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          title="irfan logo"
          href="/"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/Logo.svg"
            alt="Irfan Shaikh - Developer"
            width={100}
            height={100}
            sizes="100vw"
            className="py-6 w-1/2 h-56"
          />
        </a>

        <div className="flex flex-row justify-center gap-5">
          <a href="#about" className="text-white hover:text-purple-400 px-4 py-2 transition-colors duration-200">About Me</a>
          <a href="#experience" className="text-white hover:text-purple-400 px-4 py-2 transition-colors duration-200">Experience</a>
          <a href="#projects" className="text-white hover:text-purple-400 px-4 py-2 transition-colors duration-200">Projects</a>
          <a href="#contact" className="text-white hover:text-purple-400 px-4 py-2 transition-colors duration-200">Contact Me</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
