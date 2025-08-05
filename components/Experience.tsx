import Image from "next/image";
import React from "react";

const Experience: React.FC = () => {
  return (
    <section id="experience" className="px-4 lg:px-20 py-20">
      <h2 className="text-white font-semibold text-center text-6xl pt-10">
        EXPERIENCE
      </h2>
      <p className="tracking-[0.5em] text-center text-transparent font-light pb-10 bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500 text-xl">
        EXPLORE NOW
      </p>

      <div className="max-w-5xl mx-auto bg-[#161616] border border-[#2E2E2E] rounded-xl p-6 shadow-lg">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <div className="flex items-center gap-3">
            <Image
              src="/aiadventures.png"
              height={30}
              width={30}
              alt="AI Adventure Logo"
            />
            <p className="text-gray-300 text-base sm:text-lg">
              <span className="font-semibold">AI Adventure /</span> ML Intern
            </p>
          </div>
          <p className="text-gray-400 text-sm sm:text-base">
            May 2023 – July 2023
          </p>
        </div>

        <p className="text-gray-300 mt-4 text-sm sm:text-base leading-relaxed">
          Contributed to projects involving deep neural networks and Generative AI (GenAI) 
          during my internship at AI Adventure. Gained hands-on experience in model development,
          data preprocessing, tuning, and deploying intelligent systems for real-time inference 
          and experimentation.

        </p>

        <div className="flex flex-wrap gap-3 mt-5">
          {["Data Science","Machine Learning","Deep Learning","GenAi"].map((tech) => (
            <div
              key={tech}
              className="bg-blue-900 border border-[#2E2E2E] text-white py-2 px-5 text-[10px] rounded-3xl text-sm  cursor-default"
              // className="bg-transparent border border-[#2E2E2E] text-white py-2 px-5 rounded-3xl text-sm cursor-default"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
