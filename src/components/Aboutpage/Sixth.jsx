/** @format */

import React from "react";

function Sixth() {
  return (
    <section className="relative w-full flex items-center justify-center text-center bg-cover bg-no-repeat mt-20 min-h-screen 
                        backdrop-brightness-50 bg-[url('/images/4bottles.jpeg')]">
      
      {/* Content */}
      <div className="text-white px-6 sm:px-10 py-24 flex flex-col items-center justify-center w-full sm:w-[80%] md:w-[70%]">
        <h1 className="text-2xl sm:text-4xl md:text-6xl  mb-6">
          Join Our Journey
        </h1>
        <p className="text-base sm:text-lg md:text-xl mb-8 leading-relaxed">
          Hydration is just the beginning. Together, let's make a difference for 
          ourselves and the world. Explore our collections and find the perfect 
          water bottle for your lifestyle. Stay hydrated. Stay inspired.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <button className="min-w-[120px] bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition border-2 border-white cursor-pointer">
            Buy now
          </button>
          <button className="min-w-[120px] border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition cursor-pointer">
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
}

export default Sixth;

