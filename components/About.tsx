"use client";

import React from "react";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="relative px-6 py-20 sm:py-28 lg:py-32 bg-transparent overflow-hidden"
    >
      <div className="max-w-5xl mx-auto text-center">
        {/* Section Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-3">
          About Me
        </h1>
        <p className="text-sm tracking-[0.3em] bg-gradient-to-r from-purple-600 to-orange-400 text-transparent bg-clip-text uppercase mb-10">
          Explore Now
        </p>

        {/* Description */}
        <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
          I’m a passionate full-stack developer and machine learning enthusiast with a
          love for turning ideas into scalable, impactful software solutions. My approach
          blends creativity and logic — always striving to build experiences that are not
          only functional but also intuitive and engaging.
          <br />
          <br />
          Whether it’s optimizing ML models, designing REST APIs, or crafting front-end
          interfaces, I focus on writing clean, maintainable code and learning new tools
          every step of the way. I enjoy collaborating in dynamic environments where
          innovation and growth are a daily part of the process.
        </p>
      </div>
    </section>
  );
};

export default About;
