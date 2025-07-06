import React from "react";

const About: React.FC<{}> = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center h-full relative overflow-hidden pt-[35px] "
      style={{ transform: "scale(0.9" }}
    >
      <div className="flex flex-col  justify-around flex-wrap items-center   max-w-[900px]">
        <h1 className="text-white font-semibold text-6xl">ABOUT ME</h1>
        <p className=" tracking-[0.5em] text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl">
          EXPLORE NOW
        </p>
        <p className="text-gray-300 text-center ">
          Fueled by a deep curiosity for how things work, I enjoy exploring new technologies and translating abstract concepts into real-world applications. My approach to development is grounded in continuous learning, whether it's experimenting with emerging tools or understanding the fundamentals behind great software.
          <br />
          <br />
          I thrive in environments where learning is constant and creativity meets logic. Every line of code is an opportunity to grow, and I find satisfaction in building solutions that are both thoughtful and functional. For me, the journey of software development is as exciting as the destination — always evolving, always improving.
        </p>
      </div>
    </section>
  );
};

export default About;
