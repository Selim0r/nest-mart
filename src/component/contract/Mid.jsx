import React from "react";
import { IoLocationSharp } from "react-icons/io5";

function Mid() {
  return (
    <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 mt-[60px] ">
      <div className="space-y-[15px] ">
        <p className="text-[24] text-[#3BB77E] font-bold ">Office</p>
        <p className="text-[#7E7E7E] text-[14px] ">
          205 North Michigan Avenue, Suite 810
        </p>
        <p className="text-[#7E7E7E] text-[14px] ">Chicago, 60601, USA</p>
        <p className="text-[#7E7E7E] text-[14px] ">Phone: (123) 456-7890</p>
        <p className="text-[#7E7E7E] text-[14px] ">Email: contact@Evara.com</p>
        <button className="bg-[#3BB77E] rounded-[4px] h-[40px] w-[150px] flex items-center justify-center gap-2 text-white">
          <IoLocationSharp className="text-[18px]" />
          View map
        </button>
      </div>
      <div className="space-y-[15px] ">
        <p className="text-[24] text-[#3BB77E] font-bold ">Studio</p>
        <p className="text-[#7E7E7E] text-[14px] ">
          205 North Michigan Avenue, Suite 810
        </p>
        <p className="text-[#7E7E7E] text-[14px] ">Chicago, 60601, USA</p>
        <p className="text-[#7E7E7E] text-[14px] ">Phone: (123) 456-7890</p>
        <p className="text-[#7E7E7E] text-[14px] ">Email: contact@Evara.com</p>
        <button className="bg-[#3BB77E] rounded-[4px] h-[40px] w-[150px] flex items-center justify-center gap-2 text-white">
          <IoLocationSharp className="text-[18px]" />
          View map
        </button>
      </div>
      <div className="space-y-[15px] ">
        <p className="text-[24] text-[#3BB77E] font-bold ">Shop</p>
        <p className="text-[#7E7E7E] text-[14px] ">
          205 North Michigan Avenue, Suite 810
        </p>
        <p className="text-[#7E7E7E] text-[14px] ">Chicago, 60601, USA</p>
        <p className="text-[#7E7E7E] text-[14px] ">Phone: (123) 456-7890</p>
        <p className="text-[#7E7E7E] text-[14px] ">Email: contact@Evara.com</p>
        <button className="bg-[#3BB77E] rounded-[4px] h-[40px] w-[150px] flex items-center justify-center gap-2 text-white">
          <IoLocationSharp className="text-[18px]" />
          View map
        </button>
      </div>
    </div>
  );
}

export default Mid;
