import React from "react";

function Text() {
  return (
    <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 my-[80px]">
      <div className="flex flex-col justify-center gap-[32px] w-[340px] h-[140px] ">
        <p className="text-[32px] text-[#253D4E] font-bold ">Who we are</p>
        <p className="text-[16px] text-[#7E7E7E] ">
          Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim
          ut tellus eros donec ac odio orci ultrices in. ellus eros donec ac
          odio orci ultrices in.
        </p>
      </div>
      <div className="flex flex-col justify-center gap-[32px] w-[340px] h-[140px]">
        <p className="text-[32px] text-[#253D4E] font-bold ">Our history</p>
        <p className="text-[16px] text-[#7E7E7E] ">
          Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim
          ut tellus eros donec ac odio orci ultrices in. ellus eros donec ac
          odio orci ultrices in.
        </p>
      </div>
      <div className="flex flex-col justify-center gap-[32px] w-[340px] h-[140px]">
        <p className="text-[32px] text-[#253D4E] font-bold ">Our mission</p>
        <p className="text-[16px] text-[#7E7E7E] ">
          Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim
          ut tellus eros donec ac odio orci ultrices in. ellus eros donec ac
          odio orci ultrices in..
        </p>
      </div>
    </div>
  );
}

export default Text;
