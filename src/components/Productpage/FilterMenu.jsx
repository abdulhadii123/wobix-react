import React, { useState, useRef, useEffect } from "react";
import { FiFilter } from "react-icons/fi"; // Importing filter icon

const FilterMenu = () => {
  const [isProductTypeOpen, setIsProductTypeOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const productTypeRef = useRef(null);
  const filterRef = useRef(null);

  // Toggle dropdowns
  const toggleProductTypeMenu = () => {
    setIsProductTypeOpen(!isProductTypeOpen);
    setIsFilterOpen(false); // Close filter menu if open
  };

  const toggleFilterMenu = () => {
    setIsFilterOpen(!isFilterOpen);
    setIsProductTypeOpen(false); // Close product type menu if open
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        productTypeRef.current &&
        !productTypeRef.current.contains(event.target)
      ) {
        setIsProductTypeOpen(false);
      }
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setIsFilterOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex items-center gap-4">
      {/* Product Type Dropdown */}
      <div className="relative" ref={productTypeRef}>
        <button
          onClick={toggleProductTypeMenu}
          className="bg-black text-white px-4 py-2 rounded-md flex items-center cursor-pointer"
        >
          Product Type <span className="ml-2">▼</span>
        </button>

        {isProductTypeOpen && (
          <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-10">
            <ul className="text-black">
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                Water Bottles
              </li>
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                Tumblers
              </li>
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                Flasks
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Filter Dropdown */}
      <div className="relative" ref={filterRef}>
        <button
          onClick={toggleFilterMenu}
          className="border border-black px-4 py-2 rounded-md flex items-center cursor-pointer"
        >
          <FiFilter className="mr-2" /> Filter
        </button>

        {isFilterOpen && (
          <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-10">
            <ul className="text-black">
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                Price
              </li>
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                Color
              </li>
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                Material
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterMenu;

