import React from "react";
import HeroImage from "../assets/hero_image.png";

const Hero = () => {
  return (
    <section className="bg-[#FFFF]">
      <div className="flex pt-16 pl-28 pb-12 items-center justify-between">
        <div>
          <h1 className="text-6xl font-mono">RUH-EIEE</h1>
          <h1 className="text-7xl font-mono font-extrabold">CAREER FAIR</h1>
          <h1 className="text-5xl font-mono">2024</h1>
          <p className="max-w-2xl mb-6 font-normal text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-black">
            Explore thousands of job opportunities with all the information you
            need.It's your future. Come find it. Manage all your job
            applications from start to finish
          </p>
        </div>
        <div className="relative w-[600px] h-auto pr-20">
          <div className="absolute inset-0 bg-gradient-to-r from-white via-yellow-100 to-white rounded-lg"></div>
          
            <img
              src={HeroImage}
              alt="Logo"
              className="relative w-full h-auto rounded-lg"
            />
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
