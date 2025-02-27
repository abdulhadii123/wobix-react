import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FilterMenu from "./FilterMenu";
import { useNavigate } from "react-router-dom";


const SingleProducts = () => {
  const sliderRef = useRef(null);
  const navigate =useNavigate()

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // 3 cards per row
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024, // Tablets
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // Mobile Devices
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const ProductList = [
    {
      id:'1',
      name: "Eco Sip Bottle",
      capacity: "750ML",
      price: "$120",
      image: "/images/blkbtl.png",
    },
    {
        id:'2', 
      name: "Eco Sip Bottle",
      capacity: "750ML",
      price: "$120",
      image: "/images/multibtl.png",
    },
    {
        id:'3',
      name: "Eco Sip Bottle",
      capacity: "750ML",
      price: "$120",
      image: "/images/pinkbtl.png",
    },
    {
        id:'4',
      name: "Eco Sip Bottle",
      capacity: "750ML",
      price: "$120",
      image: "/images/orgbtl.png",
    },
  ];

  return (
    <div className="bg-[whitesmoke] py-10 relative">
      <div className="wrapper">
        {/* Top Section */}
        <div className="top flex flex-col md:flex-col md:items-center">
          
          <div className="right md:w-full flex justify-center items-center">
            <h2 className="text-2xl md:text-4xl lg:text-[80px] text-center w-[80%] ">
            Hydration Made Smarter, Sleeker, and Sustainable.
            </h2>
          </div>
          <div className="left">
            <img src="/images/leftbottle.png" alt="bottle" />
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="flex justify-between items-center mt-10 ">
            <FilterMenu />
        </div>
        {/* Product Slider (Now with 3 Cards Per Row) */}
        <div className="relative">
          <Slider ref={sliderRef} {...settings} className="mt-10">
            {ProductList.map((product, index) => (
              <div key={index} className="px-3">
                <div className="bg-gray-100 p-4 rounded-lg hover:shadow-md">
                  <img
                    className="w-full aspect-[1/1.1] object-cover rounded-md"
                    src={product.image}
                    alt={product.name}
                  />
                  <div className="flex justify-between items-center mt-2">
                    <div className="content">
                      <h3 className="text-lg font-semibold">{product.name}</h3>
                      <p className="text-sm text-gray-600">{product.capacity}</p>
                    </div>
                    <div className="price">
                      <p className="text-xl font-bold">{product.price}</p>
                    </div>
                  </div>
                  <button className="w-full mt-4 p-3 bg-black text-white font-bold rounded-lg hover:bg-gray-900 transition cursor-pointer"onClick={()=>navigate(`/products/${product.id}`)}>
                    Buy Now
                  </button>
                </div>
              </div>
            ))}
          </Slider>

          <Slider ref={sliderRef} {...settings} className="mt-10">
            {ProductList.map((product, index) => (
              <div key={index} className="px-3">
                <div className="bg-gray-100 p-4 rounded-lg hover:shadow-md">
                  <img
                    className="w-full aspect-[1/1.1] object-cover rounded-md"
                    src={product.image}
                    alt={product.name}
                  />
                  <div className="flex justify-between items-center mt-2">
                    <div className="content">
                      <h3 className="text-lg font-semibold">{product.name}</h3>
                      <p className="text-sm text-gray-600">{product.capacity}</p>
                    </div>
                    <div className="price">
                      <p className="text-xl font-bold">{product.price}</p>
                    </div>
                  </div>
                  <button className="w-full mt-4 p-3 bg-black text-white font-bold rounded-lg hover:bg-gray-900 transition cursor-pointer"onClick={()=>navigate(`/products/${product.id}`)}>
                    Buy Now
                  </button>
                </div>
              </div>
            ))}
          </Slider>

          <Slider ref={sliderRef} {...settings} className="mt-10">
            {ProductList.map((product, index) => (
              <div key={index} className="px-3">
                <div className="bg-gray-100 p-4 rounded-lg hover:shadow-md">
                  <img
                    className="w-full aspect-[1/1.1] object-cover rounded-md"
                    src={product.image}
                    alt={product.name}
                  />
                  <div className="flex justify-between items-center mt-2">
                    <div className="content">
                      <h3 className="text-lg font-semibold">{product.name}</h3>
                      <p className="text-sm text-gray-600">{product.capacity}</p>
                    </div>
                    <div className="price">
                      <p className="text-xl font-bold">{product.price}</p>
                    </div>
                  </div>
                  <button className="w-full mt-4 p-3 bg-black text-white font-bold rounded-lg hover:bg-gray-900 transition cursor-pointer "onClick={()=>navigate(`/products/${product.id}`)}>
                    Buy Now
                  </button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
    
  );
};

export default SingleProducts;
