import React from "react";


function Spotlight() {
  return (

    <div className="bg-[whitesmoke]">
      <div className="wrapper bg-[url('/images/sp.jpg')] bg-cover bg-center w-full rounded-2xl flex flex-col justify-between min-h-[400px] md:min-h-[500px] lg:min-h-[600px]">
        
        {/* Title Section */}
        <div className="flex items-center text-center flex-col justify-center w-full px-4 md:px-12">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight w-full md:w-[80%] lg:w-[50%] my-[100px]">
            Stay Hydrated, Stay Healthy
          </h1>
        </div>
        {/* Description & Button Section */}
        <div className="flex flex-col items-start px-6 md:px-12 lg:px-16 py-6 md:py-12">
          <p className="text-white text-base md:text-lg lg:text-xl w-full sm:w-[50%] md:w-[40%] lg:w-[25%] mb-4">
            Durable, Leak-Proof Bottles for Everyday Adventures
          </p>
          <button className="bg-white text-[#0F6143]  px-6 py-3 rounded-xl shadow-lg transition hover:bg-gray-200 w-full sm:w-[50%] md:w-[40%] lg:w-[20%]">
            Explore all Products
          </button>
        </div>

      </div>
    </div>

  );
}

export default Spotlight;

