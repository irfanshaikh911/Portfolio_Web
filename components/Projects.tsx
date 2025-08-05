import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Project {
  title: string;
  description: string;
  image: string;
  github: string;
  tech: string[];
}

const projects: Project[] = [
  {
    title: "InstaNews – AI News Automation",
    description: "Scrapes, summarizes, tags, and posts news to Instagram, WhatsApp, Twitter, Email, and SMS.",
    image: "/instanews.png",
    github: "https://github.com/irfanshaikh911/Insta-News-Bot",
    tech: ["React", "Tailwind", "Flask", "HuggingFace", "Render"],
  },
  {
    title: "Water Potability Detection",
    description: "CI/CD-integrated ML system with Flask, Streamlit, Docker, and GitHub Actions; predicts potability with 90% accuracy.",
    image: "/water_potability.png",
    github: "https://github.com/irfanshaikh911/Water_Potability_CICD-Pipeline",
    tech: ["FastAPI", "Flask", "Docker", "MLflow", "CI/CD"],
  },
  {
    title: "Image Captioning",
    description: "Deep learning-based captioning model using CNN + LSTM + Transformers. Deployed with Streamlit.",
    image: "/image_captioning.png",
    github: "https://github.com/irfanshaikh911/Image_Captioning_using_transformer",
    tech: ["PyTorch", "CNN-LSTM", "Streamlit", "HuggingFace"],
  },
  {
    title: "English-Hindi Machine Translation",
    description: "Built transformer-based model using PyTorch for language translation tasks.",
    image: "/machine_translation.png",
    github: "https://github.com/irfanshaikh911/Machine-Translation",
    tech: ["Transformer", "PyTorch", "Streamlit"],
  },
  {
    title: "Spam Message Detection",
    description: "TF-IDF + Naive Bayes-based spam classifier with 97% test accuracy. Deployed with Streamlit.",
    image: "/spam_detector.png",
    github: "https://www.kaggle.com/code/irfan911/spam-msg-detection",
    tech: ["NLP", "scikit-learn", "Streamlit"],
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="bg-[#0d1117] py-12 px-6">
      <h2 className="text-white text-5xl font-bold text-center mb-3">PROJECTS</h2>
      <p className="text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-orange-500 tracking-[0.4em] mb-10 text-sm">
        EXPLORE NOW
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <Link
            key={index}
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#161b22] rounded-2xl shadow-xl overflow-hidden hover:scale-[1.02] transition duration-300 ease-in-out"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={600}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-white font-semibold text-lg">{project.title}</h3>
              <p className="text-gray-400 text-xs mt-2">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-900 border border-[#2E2E2E] text-white py-2 px-5 text-[10px] rounded-3xl text-sm  cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Projects;
