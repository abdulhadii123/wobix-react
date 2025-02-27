import React, { useState } from "react";

const DetailContent = () => {
  const [activeTab, setActiveTab] = useState("details");

  return (
    <div className="bg-[whitesmoke]">
    <div className=" wrapper">
      {/* Tabs */}
      <div className="flex border-b border-[rgba(0,0,0,0.2)]">
        <button
          className={`py-2 px-4 font-medium ${
            activeTab === "details"
              ? "border-b-3 border-black text-black"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("details")}
        >
          Details
        </button>
        <button
          className={`py-2 px-4 font-medium ${
            activeTab === "reviews"
              ? "border-b-3 border-black text-black"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("reviews")}
        >
          Reviews
        </button>
      </div>

      {/* Content */}
      <div className="mt-4 text-gray-700">
        {activeTab === "details" ? (
          <div>
            {/* Key Features */}
            <h3 className="text-lg font-semibold mb-2">Key Features</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Premium Material: High-quality, food-grade stainless steel.</li>
              <li>Double-Wall Insulation: Keeps drinks cold for 24h or hot for 12h.</li>
              <li>Eco-Friendly: Reusable and BPA-free.</li>
              <li>Leak-Proof: Secure screw-on lid with a silicone seal.</li>
              <li>Ergonomic Build: Lightweight, fits cup holders & backpacks.</li>
            </ul>

            {/* Specifications */}
            <h3 className="text-lg font-semibold mt-4 mb-2">Specifications</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Capacity: 750ml</li>
              <li>Material: Stainless Steel (304 Grade)</li>
              <li>Dimensions: 10" (H) × 3" (W)</li>
              <li>Weight: 300 grams</li>
              <li>Color Options: Matte Black, Ocean Blue, Rose Gold, Forest Green</li>
              <li>Care Instructions: Hand wash recommended.</li>
            </ul>

            {/* Why Choose */}
            <h3 className="text-lg font-semibold mt-4 mb-2">Why choose this bottle?</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Durable and long-lasting.</li>
              <li>Perfect for hot and cold beverages.</li>
              <li>Stylish and eco-conscious.</li>
            </ul>

            {/* What's in the Box */}
            <h3 className="text-lg font-semibold mt-4 mb-2">What's in the box?</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>1x EcoFlow Stainless Steel Water Bottle</li>
              <li>1x Cleaning Brush</li>
            </ul>
          </div>
        ) : (
          <div>
            <h3 className="text-lg font-semibold mb-2">Customer Reviews</h3>
            <p className="text-gray-600">No reviews yet. Be the first to review this product!</p>
          </div>
        )}
      </div>
      </div>
    </div>
  );
};

export default DetailContent;
