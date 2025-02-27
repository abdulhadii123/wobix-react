import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SliderComponent() {
    const settings = {
        dots: false, // ❌ Remove dots
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay:false,
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
  

  return (
    
    <div className="w-full max-w-4xl mx-auto mt-10">
      <h2 className="text-2xl font-semibold text-center mb-6">Featured Products</h2>
      <Slider {...settings}>
        <div>
          <img src="https://via.placeholder.com/800x400" alt="Slide 1" className="w-full rounded-lg" />
        </div>
        <div>
          <img src="https://via.placeholder.com/800x400" alt="Slide 2" className="w-full rounded-lg" />
        </div>
        <div>
          <img src="https://via.placeholder.com/800x400" alt="Slide 3" className="w-full rounded-lg" />
        </div>
      </Slider>
    </div>
  );
}

export default SliderComponent;
