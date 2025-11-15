import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

function SmallSection({ smallSection = [] }) {
  if (!Array.isArray(smallSection) || smallSection.length === 0) {
    return (
      <p className="text-center text-gray-500 py-10">No items available.</p>
    );
  }

  return (
    <div className="grid md:grid-cols-3 gap-6 my-10">
      {smallSection.map((item) => (
        <div
          key={item.id}
          className="relative rounded-2xl overflow-hidden group shadow-sm"
        >
          
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
          />

          
          <div className="absolute top-1/2 left-8 -translate-y-1/2 text-left">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 max-w-[220px]">
              {item.title}
            </h2>
            <button className="flex items-center gap-2 mt-4 bg-[#3BB77E] hover:bg-green-600 text-white text-sm font-medium px-5 py-2 rounded-[4px] transition">
              {item.button} <FaArrowRightLong />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SmallSection;
