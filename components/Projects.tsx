import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects: React.FC = () => {
  return (
    <section id="projects">
      <h2 className="text-white font-semibold text-center text-6xl pt-[35px]">
        PROJECTS
      </h2>
      <p className="tracking-[0.5em] text-center text-transparent font-light pb-5 bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500 text-1xl">
        EXPLORE NOW
      </p>

      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row flex-wrap gap-5 mt-7 justify-between">
          {/* Machine Translation */}
          <Link
            href="https://github.com/irfanshaikh911/machine-translation"
            target="_blank"
            rel="noopener noreferrer"
            className="z-[1] w-full md:w-[48%]"
          >
            <div className="flex mb-5">
              <Image
                src="/machine_translation.png"
                height={150}
                width={150}
                alt="Machine Translation"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">Machine Translation</p>
                <p className="text-gray-500 text-[10px]">
                  Transformer-based sequence-to-sequence model using PyTorch for English-to-Hindi translation, featuring attention mechanism.
                </p>
              </div>
            </div>
          </Link>

          {/* Image Captioning */}
          <Link
            href="https://github.com/irfanshaikh911/image-captioning"
            target="_blank"
            rel="noopener noreferrer"
            className="z-[1] w-full md:w-[48%]"
          >
            <div className="flex mb-5">
              <Image
                src="/image_captioning.png"
                height={150}
                width={150}
                alt="Image Captioning"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">Image Captioning</p>
                <p className="text-gray-500 text-[10px]">
                  A CNN-RNN-based deep learning model that generates natural captions for unseen images using the COCO dataset.
                </p>
              </div>
            </div>
          </Link>

          {/* Water Potability */}
          <Link
            href="https://github.com/irfanshaikh911/water-potability"
            target="_blank"
            rel="noopener noreferrer"
            className="z-[1] w-full md:w-[48%]"
          >
            <div className="flex mb-5">
              <Image
                src="/water_potability.png"
                height={150}
                width={150}
                alt="Water Potability Detection"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">Water Potability Detection</p>
                <p className="text-gray-500 text-[10px]">
                  Full-stack ML project using Flask and Streamlit to predict water potability from real-world parameters.
                </p>
              </div>
            </div>
          </Link>

          {/* Autogradr */}
          <Link
            href="https://github.com/irfanshaikh911/autogradr"
            target="_blank"
            rel="noopener noreferrer"
            className="z-[1] w-full md:w-[48%]"
          >
            <div className="flex mb-5">
              <Image
                src="/autogradr.png"
                height={150}
                width={150}
                alt="Autogradr"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">Autogradr</p>
                <p className="text-gray-500 text-[10px]">
                  AI-powered autograding system with rubric-based scoring, LLM feedback, and instructor review support for engineering colleges.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
