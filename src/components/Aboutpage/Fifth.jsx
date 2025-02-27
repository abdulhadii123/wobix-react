/** @format */

import React from "react";

function Fifth() {
  return (
    <div className="w-full  pt-[60px] wrapper animate-fadeIn">
      <h3 className="text-center mb-[28px] text-[32px] sm:text-[40px] md:text-[48px] font-semibold">
        Why Choose Us?
      </h3>

      {/* Top Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10">
        {/* Left Image */}
        <div className="w-full sm:w-[80%] md:w-[48%]">
          <img className="w-full rounded-lg shadow-lg" src="/images/blue.png" alt="Blue Bottle" />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-[48%] flex flex-col gap-6">
          <div className="text">
            <h3 className="text-[20px] sm:text-[24px] font-semibold">Innovative Design</h3>
            <p className="text-gray-600 text-[14px] sm:text-[16px] leading-relaxed">
              Each bottle is crafted with cutting-edge technology to keep your beverages at the perfect temperature for hours.
            </p>
          </div>
          <div className="text">
            <h3 className="text-[20px] sm:text-[24px] font-semibold">Eco-friendly Materials</h3>
            <p className="text-gray-600 text-[14px] sm:text-[16px] leading-relaxed">
              We prioritize sustainability by using BPA-free, recyclable, and long-lasting materials.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-6 md:gap-10 mt-12">
        {/* Left Content */}
        <div className="w-full md:w-[48%] flex flex-col gap-6">
          <div className="text">
            <h3 className="text-[20px] sm:text-[24px] font-semibold">Lifestyle Centric</h3>
            <p className="text-gray-600 text-[14px] sm:text-[16px] leading-relaxed">
              Whether you're hitting the gym, heading to the office, or exploring the outdoors, our bottles are designed to fit seamlessly into your life.
            </p>
          </div>
          <div className="text">
            <h3 className="text-[20px] sm:text-[24px] font-semibold">Customer First Approach</h3>
            <p className="text-gray-600 text-[14px] sm:text-[16px] leading-relaxed">
              Your satisfaction is at the core of what we do. We’re committed to providing exceptional products and unmatched customer service.
            </p>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full sm:w-[80%] md:w-[48%]">
          <img className="w-full rounded-lg shadow-lg" src="/images/2bottles.png" alt="Two Bottles" />
        </div>
      </div>
    </div>
  );
}

export default Fifth;
