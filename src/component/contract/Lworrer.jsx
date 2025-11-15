import React from "react";
import pic from "/460.png";

function Lworrer() {
  return (
    <div className="w-11/12 mx-auto py-16 grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div>
        <p className="text-[#3BB77E] font-semibold text-[20px]">Contact form</p>

        <h2 className="text-[40px] font-bold text-[#253D4E] leading-tight mb-2">
          Drop Us a Line
        </h2>

        <p className="text-[#7E7E7E] text-[15px] mb-8">
          Your email address will not be published. Required fields are marked *
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            placeholder="First Name"
            className="border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-[#3BB77E]"
          />
          <input
            type="text"
            placeholder="Your Email"
            className="border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-[#3BB77E]"
          />
          <input
            type="text"
            placeholder="Your Phone"
            className="border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-[#3BB77E]"
          />
          <input
            type="text"
            placeholder="Subject"
            className="border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-[#3BB77E]"
          />
        </div>

        <textarea
          placeholder="Message"
          className="border border-gray-200 rounded-lg w-full h-40 px-4 py-3 outline-none focus:border-[#3BB77E] mb-6"
        ></textarea>

        <button className="bg-[#253D4E] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#1b2c3a] transition">
          Send message
        </button>
      </div>

      <div className="flex justify-center items-start">
        <div className="w-[350px] h-[360px] rounded-[20px] overflow-hidden shadow">
          <img src={pic} alt="woman" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
}

export default Lworrer;
