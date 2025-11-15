import React from "react";
import about5 from "/about-5.png";

function MidLowwer() {
  return (
    <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-[15px] mt-[74px]">
      <img src={about5} alt="" />
      <div className="flex flex-col justify-center">
        <h3 className=" text-[24px] text-[#B6B6B6] font-bold text-center ">
          Our performance
        </h3>
        <h3 className=" text-[48px] text-[#253D4E] font-bold text-center">
          Your Partner for e- commerce grocery solution
        </h3>

        <h3 className=" text-[16px] text-[#7E7E7E] text-center ">
          Ed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto
        </h3>
        <h3 className=" text-[16px] text-[#7E7E7E] text-center">
          Pitatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
          enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
          sed quia
        </h3>
      </div>
    </div>
  );
}

export default MidLowwer;
