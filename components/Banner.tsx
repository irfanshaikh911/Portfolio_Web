"use client";

import React from "react";
import Image from "next/image";

const Banner: React.FC = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-center px-6 lg:px-20 py-24 lg:py-36 gap-16 lg:gap-28 z-10">
      {/* Left: Text Content */}
      <div className="flex flex-col items-start text-left max-w-xl">
        <h1 className="text-xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
          Hello from 👋
          <br />
        </h1>
        <span className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-purple-400">Irfan Shaikh</span>

        <p className="text-lg text-gray-300 mt-6">
          Full-stack and machine learning enthusiast dedicated to crafting scalable,
          impactful solutions that blend creativity with code.
        </p>

        <p className="text-xl mt-4 font-medium tracking-tight text-gray-300 flex items-center">
          I do Code &{" "}
          <span className="ml-2 text-transparent font-semibold bg-clip-text bg-gradient-to-r from-purple-500 to-orange-400">
            Chill
          </span>
          <Image
            src="/popcorn.gif"
            height={36}
            width={36}
            alt="Chill emoji"
            className="ml-2"
          />
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <button
            onClick={() => window.open("mailto:sk1309.irfan@gmail.com")}
            className="hover:bg-white text-white font-semibold hover:text-black py-3 px-8 rounded-3xl border border-white hover:border-transparent transition-all duration-300"
          >
            Contact Me
          </button>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-3xl transition-all duration-300"
          >
            Downlaod CV
          </a>
        </div>
      </div>

      {/* Right: Profile Image */}
      <div className="relative group">
        <div className="w-[280px] h-[280px] lg:w-[350px] lg:h-[350px] relative">
          <Image
            priority
            src="/irfan_shaikh (2).png"
            fill
            alt="Irfan Shaikh"
            className="rounded-full object-cover shadow-2xl group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
