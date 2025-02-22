import React from "react";

function AboutUsSection() {
  return (
    <div className="bg-[whitesmoke] py-10">
      <div className="wrapper">
        
        {/* Top Section */}
        <div className="top flex flex-col md:flex-row justify-between w-full">
          
          {/* Left Column */}
          <div className="left mt-8 md:mt-16 w-full md:w-[20%] flex flex-col">
            <h4 className="text-gray-500 text-[20px]">About us</h4>
            <p className="text-[#0F6143] text-l md:text-2xl ">Hydration Meets Innovation</p>
          </div>

          {/* Right Column */}
          <div className="right mt-8 md:mt-16 w-full md:w-[80%]">
            <h2 className="text-2xl md:text-4xl lg:text-5xl leading-tight w-full md:w-[90%] mb-6">
              Combining Innovation, Sustainability, and Style to Create Bottles That Inspire Healthy Living.
            </h2>
            <div className="flex flex-col md:flex-row gap-6 md:gap-12 w-full mt-6">
              <p className="w-full md:w-[47%] text-base md:text-lg">
                At [Your Brand Name], we believe hydration should be effortless, enjoyable, and environmentally responsible. That’s why we’ve crafted water bottles that not only meet your lifestyle needs but also make a positive impact on the planet. Our designs blend advanced technology, premium materials, and modern aesthetics to deliver products that keep your beverages at the perfect temperature, wherever life takes you.
              </p>
              <p className="w-full md:w-[47%] text-base md:text-lg">
                From eco-conscious manufacturing to functional elegance, every detail is carefully considered to support your active lifestyle while reducing waste. Join us on our mission to stay hydrated and create a greener, healthier future—one sip at a time.
              </p>
            </div>
          </div>
          
        </div>

        {/* Image Section */}
        <div className="image mt-10 md:mt-16">
          <img src="/images/Frame 3.png" alt="About Us" className="w-full h-auto object-cover rounded-lg shadow-lg" />
        </div>

      </div>
    </div>
  );
}

export default AboutUsSection;
