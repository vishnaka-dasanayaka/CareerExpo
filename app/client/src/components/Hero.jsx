import React from "react";
import HeroImage from "../assets/hero_image.png";

const Hero = () => {
  return (
    <section className="bg-[#fcf7f0]">
      <div className="flex flex-col md:flex-row lg:flex-row pt-16 pl-12 lg:pl-28 pr-10 pb-12 items-center justify-between ">
        <div>
          <h1 className="text-6xl font-Montserrat text-center md:text-left lg:text-left">
            RUH-EIEE
          </h1>
          <h1 className="text-7xl  font-Montserrat font-bold  text-center md:text-left lg:text-left">
            CAREER FAIR
          </h1>
          <h1 className="text-5xl drop-shadow-xl font-Montserrat text-[#FF9503] text-center md:text-left lg:text-left">
            2024
          </h1>
          <p className="max-w-2xl mb-6 pt-3 font-Montserrat text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-black text-center md:text-left lg:text-left">
            Explore thousands of job opportunities with all the information you
            need.It's your future. Come find it. Manage all your job
            applications from start to finish
          </p>
          <div className="flex pb-5 justify-center  md:justify-start lg:justify-start">
            <button className="bg-black text-white text-lg font-Montserrat h-10 w-36 rounded-lg">
              Find Your Job
            </button>
          </div>
        </div>
        <div className="relative flex justify-center items-center w-[400px] lg:w-[600px] h-auto pr-20">
          <div className="absolute inset-0 bg-gradient-radial from-[#FFDAA7] to-transparent rounded-lg"></div>
          <img
            src={HeroImage}
            alt="Logo"
            className="relative w-full h-auto rounded-lg pl-8"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
