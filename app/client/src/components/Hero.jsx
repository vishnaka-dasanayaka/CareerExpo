import React from "react";
import HeroImage from "../assets/hero_image.png";

const Hero = () => {
  return (
    <section className="bg-[#fcf7f0]">
      <div className="flex flex-col items-center justify-between pb-12 pl-12 pr-10 md:flex-row lg:flex-row lg:pl-28 ">
        <div>
          <h1 className="text-4xl text-center md:text-4xl lg:text-6xl font-Montserrat md:text-left lg:text-left">
            RUH-EIE
          </h1>
          <h1 className="text-5xl font-bold text-center md:text-5xl lg:text-7xl font-Montserrat md:text-left lg:text-left">
            CAREER FAIR
          </h1>
          <h1 className="text-3xl md:text-3xl lg:text-5xl drop-shadow-xl font-Montserrat text-[#FF9503] text-center md:text-left lg:text-left">
            2024
          </h1>
          <p className="max-w-2xl pt-3 mb-6 text-center text-gray-500 font-Montserrat lg:mb-8 md:text-lg lg:text-xl dark:text-black md:text-left lg:text-left">
            Explore thousands of job opportunities with all the information you
            need.It's your future. Come find it. Manage all your job
            applications from start to finish
          </p>
          <div className="flex justify-center pb-5 md:justify-start lg:justify-start">
            <button className="h-10 text-base text-white bg-black rounded-lg md:text-base lg:text-lg font-Montserrat w-36">
              Find Your Job
            </button>
          </div>
        </div>
        <div className="relative flex justify-center items-center w-[400px] md:w-[700px] lg:w-[600px] h-auto pr-20">
          <div className="absolute inset-0 bg-gradient-radial from-[#FFDAA7] to-transparent rounded-lg"></div>
          <img
            src={HeroImage}
            alt="Logo"
            className="relative w-full h-auto pl-8 rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
