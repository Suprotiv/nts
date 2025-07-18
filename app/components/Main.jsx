import React from "react";
import Image from "next/image";

export default function Main() {
  return (
    <div className="relative top-0 left-0 w-full h-[85vh] text-white overflow-hidden ">
      <div className="w-full h-full relative">
        {/* Gradient overlay */}
        <div className="z-10 w-full  absolute  inset-0 bg-gradient-to-r from-[#111010]/70 to-[#fefdf8]/0 "></div>

        {/* Text container */}
        <div className="z-10   absolute top-[26vh] md:top-[30vh] w-[90%] md:w-[80%] lg:w-[60%] xl:w-[50%] mx-[10%]  animate-fadeInSlow">
          <p className="text-gray-300 text-sm md:text-lg my-3 lg:text-2xl font-thin">
            WELCOME TO
          </p>
          <h1 className="text-white text-4xl lg:text-[2.8rem] my-2 font-semibold ">
            THE NEWTOWN SCHOOL
          </h1>

          <h1 className="text-white text-4xl lg:text-5xl mt-2 mb-4 font-semibold ">
            KOLKATA
          </h1>
          <button className="top-1 relative group mb-8 text-white  py-4 px-6 border-none bg-transparent tracking-wide transition-all duration-500">
            SEE MORE ABOUT US
            {/* Animated button border effect */}
            <span className="absolute top-0 left-0 w-full md:w-5 h-0.5 bg-[#ec1c44] transition-all duration-500 group-hover:w-full"></span>
            <span className="absolute top-0 left-0 w-0.5 h-full md:h-5 bg-[#0371d2] transition-all duration-500 group-hover:h-full"></span>
            <span className="absolute bottom-0 right-0 w-full md:w-5 h-0.5 bg-[#fbb414] transition-all duration-500 group-hover:w-full"></span>
            <span className="absolute bottom-0 right-0 w-0.5 h-full md:h-5 bg-[#1c8749] transition-all duration-500 group-hover:h-full"></span>
          </button>
        </div>
        {/* Background Image */}
      </div>
    </div>
  );
}
