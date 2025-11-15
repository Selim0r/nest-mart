import React from "react";
import Left from "/about_left.png";
import about1 from "/about-1.png";
import about2 from "/about-2.png";
import about3 from "/about-3.png";

function Upper() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-[100px] w-11/12 mx-auto ">
      <div className="h-[736px]">
        <img src={Left} alt="" />
      </div>
      <div className="flex flex-col justify-center space-y-[35px]">
        <h2 className="text-[40px] text-[#253D4E] font-bold ">
          Welcome to Nest
        </h2>
        <p className="text-[#7E7E7E] text-[16px] ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate id est laborum.
        </p>
        <p className="text-[#7E7E7E] text-[16px] ">
          Ius ferri velit sanctus cu, sed at soleat accusata. Dictas prompta et
          Ut placerat legendos interpre.Donec vitae sapien ut libero venenatis
          faucibus. Nullam quis ante Etiam sit amet orci eget. Quis commodo odio
          aenean sed adipiscing. Turpis massa tincidunt dui ut ornare lectus.
          Auctor elit sed vulputate mi sit amet. Commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate id est laborum.
        </p>
        <div className="flex items-center gap-[24px] ">
          <img src={about1} alt="" />
          <img src={about2} alt="" />
          <img src={about3} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Upper;
