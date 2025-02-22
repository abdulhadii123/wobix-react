/** @format */
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function ProductSection() {
  const sliderRef = useRef(null);
  const settings = {
    dots: false, // ❌ Remove dots
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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

  const ProductList = [
    {
      name: "Eco Sip Bottle",
      capacity: "750ML",
      price: "$120",
      image: "/images/blkbtl.png",
    },
    {
      name: "Eco Sip Bottle",
      capacity: "750ML",
      price: "$120",
      image: "/images/multibtl.png",
    },
    {
      name: "Eco Sip Bottle",
      capacity: "750ML",
      price: "$120",
      image: "/images/pinkbtl.png",
    },
    {
      name: "Eco Sip Bottle",
      capacity: "750ML",
      price: "$120",
      image: "/images/orgbtl.png",
    },
  ];

  return (
    <div className="bg-white py-10 relative">
      <div className="wrapper">
        {/* Top Section */}
        <div className="top flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="left mb-6 md:mb-0 md:w-[20%]">
            <h4 className="text-gray-500 text-[20px]">Products</h4>
            <p className="text-[#0F6143] text-l w-[56%]">
              Sustainability Without Compromise
            </p>
          </div>
          <div className="right md:w-[80%]">
            <h2 className="text-2xl md:text-4xl lg:text-[60px]">
              Discover the Perfect Bottle for Every Occasion
            </h2>
          </div>
        </div>

        {/* Product Slider */}
        <div className="relative">
          <Slider ref={sliderRef} {...settings} className="mt-10">
            {ProductList.map((product, index) => (
              <div key={index} className="px-3">
                {" "}
                {/* Adds spacing */}
                <div className="bg-gray-100 p-4 rounded-lg hover:shadow-md ">
                  <img
                    className="w-full aspect-[1/1.1] object-cover rounded-md"
                    src={product.image}
                    alt={product.name}
                  />
                  <div className="flex justify-between items-center mt-2">
                    <div className="content">
                      <h3 className="text-lg font-semibold">{product.name}</h3>
                      <p className="text-sm text-gray-600">
                        {product.capacity}
                      </p>
                    </div>
                    <div className="price">
                      <p className="text-xl font-bold">{product.price}</p>
                    </div>
                  </div>
                  <button className="w-full mt-4 p-3 bg-black text-white font-bold rounded-lg hover:bg-gray-900 transition">
                    Buy Now
                  </button>
                </div>
              </div>
            ))}
          </Slider>

          {/* Custom Navigation Buttons */}
          <div className="flex justify-end  gap-4 wrapper">
            <button
              className="border rounded-full p-3 hover:bg-gray-100 transition mt-10 active:opacity-50"
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
              className="border rounded-full p-3 hover:bg-gray-100 transition mt-10 active:opacity-50"
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
export default ProductSection;
