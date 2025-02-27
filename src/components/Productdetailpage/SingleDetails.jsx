import React, { useState } from "react";

const SingleDetails = () => {
  const [selectedCapacity, setSelectedCapacity] = useState("1L");
  const [selectedColor, setSelectedColor] = useState("black");

  const capacities = ["1L", "2L"];
  const colors = [
    { name: "black", bg: "bg-black" },
    { name: "mint", bg: "bg-teal-400" },
    { name: "red", bg: "bg-red-500" },
    { name: "pink", bg: "bg-pink-400" },
  ];

  return (
    <div className=" bg-[whitesmoke]">
    <div className="flex flex-col md:flex-row w-full gap-8 wrapper">
    {/* Left Section - Product Info */}
    <div className="w-full md:w-[50%]">
      <h4 className="text-gray-500 text-sm">American Tall</h4>
      <h1 className="text-3xl md:text-4xl font-bold">Eco Sip Bottle</h1>

      {/* Rating */}
      <div className="flex items-center my-2">
        <span className="text-yellow-500 text-lg">★★★★★</span>
        <span className="text-gray-600 ml-2 text-sm">4.6 (158 Reviews)</span>
      </div>

      {/* Price Section */}
      <div className="flex items-center my-3">
        <span className="text-gray-400 line-through text-lg md:text-xl mr-2">
          ₹800
        </span>
        <span className="text-black text-xl md:text-2xl font-semibold">
          ₹600
        </span>
      </div>

      {/* Capacity Selection */}
      <div className="mt-4">
        <h3 className="text-gray-600 text-sm">Capacity:</h3>
        <div className="flex gap-2 mt-2">
          {capacities.map((capacity) => (
            <button
              key={capacity}
              className={`px-3 py-1 border rounded-md ${
                selectedCapacity === capacity
                  ? "bg-black text-white"
                  : "bg-white border-gray-400"
              }`}
              onClick={() => setSelectedCapacity(capacity)}
            >
              {capacity}
            </button>
          ))}
        </div>
      </div>

      {/* Color Selection */}
      <div className="mt-4">
        <h3 className="text-gray-600 text-sm">Colours:</h3>
        <div className="flex gap-2 mt-2">
          {colors.map((color) => (
            <div
              key={color.name}
              className={`w-10 h-10 rounded-md border-2 ${
                selectedColor === color.name
                  ? "border-black"
                  : "border-transparent"
              } cursor-pointer ${color.bg}`}
              onClick={() => setSelectedColor(color.name)}
            ></div>
          ))}
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-6 flex flex-col md:flex-row gap-4">
        <button className="w-full md:w-40 py-3 bg-black text-white rounded-md cursor-pointer">
          Buy now
        </button>
        <button className="w-full md:w-40 py-3 border border-black rounded-md cursor-pointer">
          Add to cart
        </button>
      </div>
    </div>

    {/* Right Section - Product Image & Thumbnails */}
    <div className="flex flex-col md:flex-row items-center justify-between w-full md:w-[48%] gap-4">
      {/* Main Bottle Image */}
      <div className="w-full max-w-[250px] md:max-w-sm">
        <img
          src="/images/blkbtl.png"
          alt="Eco Sip Bottle"
          className="w-full object-cover"
        />
      </div>
        {/* Thumbnails in 2x2 Grid, Positioned Beside the Bottle */}
        <div className="grid grid-cols-2 gap-2">
          <img
            src="/images/Frame04.png"
            alt="Thumbnail"
            className="w-16 h-16 border rounded-md cursor-pointer"
          />
          <img
            src="/images/Frame05.png"
            alt="Thumbnail"
            className="w-16 h-16 border rounded-md cursor-pointer"
          />
          <img
            src="/images/Frame06.png"
            alt="Thumbnail"
            className="w-16 h-16 border rounded-md cursor-pointer"
          />
          <img
            src="/images/Frame07.png"
            alt="Thumbnail"
            className="w-16 h-16 border rounded-md cursor-pointer"
          />
        </div>
      </div>
    </div>
    </div>
  );
};

export default SingleDetails;
