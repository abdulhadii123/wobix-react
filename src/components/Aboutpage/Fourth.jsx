/** @format */

import React from "react";

function Fourth() {
  return (
    <div className="w-full pl-4 md:pl-16 pt-[60px] animate-fadeIn">
      <div className="flex flex-col md:flex-row justify-between items-center">
        {/* Left Section */}
        <div className="w-full sm:w-[90%] md:w-[49%]">
          <h2 className="text-[36px] sm:text-[48px] lg:text-[62px] font-semibold">
            Our Story
          </h2>
          <p className="mb-[20px] text-gray-600 leading-relaxed">
            What started as a simple idea to make hydration easier has grown
            into a brand committed to innovation and sustainability. We realized
            the need for water bottles that are not only functional but also
            stylish and environmentally conscious. Our journey began with a
            focus on high-quality materials and user-centric design, and today,
            we take pride in offering products that make a difference in
            everyday lives and the world around us. With every bottle, we aim to
            empower individuals to stay healthy and make choices that benefit
            the planet.
          </p>
          <hr className="border-gray-300" />
          <p className="mt-[20px] mb-[10px] italic text-gray-700">
            "We believe that every reusable bottle represents countless
            single-use plastics saved from our oceans. It's not just about
            hydration; it's about creating a sustainable future."
          </p>

          {/* Author Section */}
          <div className="flex items-center mt-4">
            <div className="w-[40px] h-[40px] mr-3">
              <img
                className="w-full h-full rounded-full object-cover"
                src="/images/Sarah.jpeg"
                alt="Sarah Chen"
              />
            </div>
            <div className="text-gray-600">
              <h3 className="font-semibold">Sarah Chen</h3>
              <p className="text-sm">Founder & CEO</p>
            </div>
          </div>
        </div>

        {/* Right Section (Image) */}
        <div className="w-full sm:w-[90%] md:w-[49%]">
          <img className="w-full rounded-lg shadow-lg" src="/images/blkbottle.png" alt="Bottle" />
        </div>
      </div>
    </div>
  );
}

export default Fourth;
