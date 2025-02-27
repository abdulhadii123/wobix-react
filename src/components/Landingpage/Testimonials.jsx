/** @format */

import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Testimonials() {
  const sliderRef = useRef(null);
  const settings = {
    dots: false, // ❌ Remove dots
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000, // Smooth auto sliding
    arrows: false, // Hide default arrows (we use custom ones)
    responsive: [
      {
        breakpoint: 1024, // Tablets
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // Mobile Devices
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // Small Screens
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const testimonials = [
    {
      name: "Hellen Jummy",
      image: "/images/art-img.jpeg",
      text: "Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi.",
      position: "Financial Counselor",
    },
    {
      name: "Hellen Jummy",
      image: "/images/art-img.jpeg",
      text: "Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi.",
      position: "Financial Counselor",
    },
    {
      name: "Hellen Jummy",
      image: "/images/art-img.jpeg",
      text: "Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi.",
      position: "Financial Counselor",
    },
  ];

  return (

    <div className="bg-[whitesmoke]">
      <div className="wrapper">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-[40px] py-[40px] ">
          <div className="mb-6 md:mb-0 md:w-1/4">
            <h4 className="text-gray-500 text-[20px]">Testimonials</h4>
            <p className="text-[#0F6143] text-l w-[42%]">
              What Our Customers Are Saying
            </p>
          </div>
          <div className="md:w-3/4">
            <h2 className="text-2xl md:text-4xl lg:text-[56px] ">
              Real experiences from people who love staying hydrated with our
              bottles
            </h2>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div>
          <Slider ref={sliderRef} {...settings} className="mt-10">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className=" px-3"
              >
                {""}
                <div className=" bg-white p-10 rounded-lg shadow-md transition-all duration-300 hover:shadow-2xl">
                <p className="text-gray-700 mb-4">{testimonial.text}</p>
                <div className="flex items-center gap-4">
                  <div className="image w-[40px]">
                    <img
                      className="rounded-[50%]"
                      src={testimonial.image}
                      alt="Testimonial"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-500">{testimonial.position}</p>
                  </div>
                </div>
                </div>
              </div>
            ))}
          </Slider>

          {/* Navigation Arrows */}
          <div className="flex justify-end  gap-4 wrapper">
            <button
              className="border rounded-full p-3 hover:bg-gray-100 transition mt-10 active:opacity-50 cursor-pointer"
              onClick={() => sliderRef.current.slickPrev()}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 18L9 12L15 6"
                  stroke="#252525"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              className="border rounded-full p-3 hover:bg-gray-100 transition mt-10 active:opacity-50 cursor-pointer"
              onClick={() => sliderRef.current.slickNext()}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 18L15 12L9 6"
                  stroke="#252525"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Testimonials;
