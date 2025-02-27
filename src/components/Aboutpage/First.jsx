/** @format */

import React from "react";

function First() {
  return (
    <div className="wrapper px-4 md:px-10 lg:px-16 xl:px-20 py-10 animate-fadeIn">
      <div className="container flex flex-col md:flex-row justify-between items-center gap-10">
        {/* Left Section */}
        <div className="left flex flex-col w-full md:w-[49%] text-center md:text-left">
          <h1 className="text-[48px] md:text-[64px] lg:text-[80px] xl:text-[112px] font-semibold text-[#1A1A1A] leading-tight">
            About Us
          </h1>
          <h3 className="text-[20px] md:text-[24px] text-gray-700">
            Redefining Hydration, One Bottle at a Time.
          </h3>
        </div>

        {/* Right Section */}
        <div className="right w-full md:w-[48%]">
          <p className="text-gray-600 text-[16px] md:text-[18px] leading-relaxed">
            At <span className="font-bold">[Your Brand Name]</span>, we are passionate about hydration and its role in a healthy, active lifestyle. 
            Founded with the mission to provide innovative, eco-friendly, and stylish hydration solutions, we have grown into a trusted brand that 
            puts people and the planet first. From the start, we’ve been dedicated to creating products that inspire confidence, enhance convenience, 
            and leave a positive impact on the environment.
          </p>
        </div>
      </div>
    </div>
  );
}

export default First;
