import React from "react";
import main from "/Main.png";
import main1 from "/Main-1.png";
import logo1 from "/377.png";
import logo2 from "/378.png";
import logo3 from "/379.png";
import logo4 from "/380.png";

function Lower() {
  return (
    <div className="w-11/12 mx-auto my-[200px] ">
        <p className="text-[40px] text-[#253D4E] font-bold text-center mb-[64px] ">Our Team</p>
      <div className=" gap-[60px] grid grid-cols-1 md:grid-cols-3 ">
        <div className="w-[447px] space-y-[20px]">
          <p className="text-[16px] text-[#3BB77E] font-bold">Our Team</p>

          <h3 className="font-bold text-[48px] text-[#253D4E]">
            Meet Our Expert Team
          </h3>

          <p className="text-[#7E7E7E] text-[16px]">
            Proin ullamcorper pretium orci. Donec necscele risque leo. Nam massa
            dolor imperdiet neccon sequata congue idsem. Maecenas malesuada
            faucibus finibus.
          </p>

          <p className="text-[#7E7E7E] text-[16px]">
            Proin ullamcorperper pretium orci. Donec necscele risque leo. Nam
            massa dolor imperdiet neccon sequata congue idsem. Maecenas
            malesuada faucibus finibus.
          </p>

          <button className="bg-[#3BB77E] h-[47px] w-[187px] rounded-[12px] text-[16px] text-white">
            View All Members
          </button>
        </div>

        {/* RIGHT SIDE IMAGE + FLOATING CARD */}
        <div className="relative w-fit">
          <img src={main} alt="" className="rounded-xl" />

          <div
            className="
          h-[165px]
          w-[335px]
          bg-white
          absolute
          top-[ 95%]
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          flex
          flex-col
          justify-center
          items-center
          space-y-[17px]
          rounded-xl
          shadow
          shadow-[#0000000D]
        "
          >
            <h1 className="text-[24px] text-[#253D4E] font-bold">H. Merinda</h1>

            <h4 className="text-[17px] text-[#7E7E7E]">CEO & Co-Founder</h4>

            <div className="flex gap-[12px]">
              <img src={logo1} alt="" />
              <img src={logo2} alt="" />
              <img src={logo3} alt="" />
              <img src={logo4} alt="" />
            </div>
          </div>
        </div>
        <div className="relative w-fit">
          <img src={main1} alt="" className="rounded-xl" />

          <div
            className="
          h-[165px]
          w-[335px]
          bg-white
          absolute
          top-[ 95%]
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          flex
          flex-col
          justify-center
          items-center
          space-y-[17px]
          rounded-xl
          shadow
          shadow-[#0000000D]
        "
          >
            <h1 className="text-[24px] text-[#253D4E] font-bold">
              Dilan Specter
            </h1>

            <h4 className="text-[17px] text-[#7E7E7E]">#7E7E7E</h4>

            <div className="flex gap-[12px]">
              <img src={logo1} alt="" />
              <img src={logo2} alt="" />
              <img src={logo3} alt="" />
              <img src={logo4} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lower;
