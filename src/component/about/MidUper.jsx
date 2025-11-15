import React from "react";
import icon1 from "/icon-1.png";
import icon2 from "/icon-2.png";
import icon3 from "/icon-3.png";
import icon4 from "/icon-4.png";
import icon5 from "/icon-5.png";
import icon6 from "/icon-6.png";

function MidUper() {
  const card = [
    {
      id: 1,
      icon: icon1,
      title: "Best Prices & Offers",
      subtitle:
        "There are many variations of passages of lorem lpsom available, but the majority have suffered alteration in some form",
    },
    {
      id: 2,
      icon: icon2,
      title: "Wide Assortment",
      subtitle:
        "There are many variations of passages of lorem lpsom available, but the majority have suffered alteration in some form",
    },
    {
      id: 3,
      icon: icon3,
      title: "Free Delivery",
      subtitle:
        "There are many variations of passages of lorem lpsom available, but the majority have suffered alteration in some form",
    },
    {
      id: 4,
      icon: icon4,
      title: "Easy Returns",
      subtitle:
        "There are many variations of passages of lorem lpsom available, but the majority have suffered alteration in some form",
    },
    {
      id: 5,
      icon: icon5,
      title: "100% Satisfaction",
      subtitle:
        "There are many variations of passages of lorem lpsom available, but the majority have suffered alteration in some form",
    },
    {
      id: 6,
      icon: icon6,
      title: "Great Daily Deal",
      subtitle:
        "There are many variations of passages of lorem lpsom available, but the majority have suffered alteration in some form",
    },
  ];

  return (
    <div className="w-11/12 mx-auto space-y-[64px] mt-[50px]">
      <h3 className="text-[40px] text-[#253D4E] font-bold  ">
        What We Provide?
      </h3>
      <div className="  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[24px]   ">
        {card.map((item) => (
          <div
            key={item.id}
            className=" w-[424px] h-[424px] flex flex-col space-y-[30px] justify-center items-center   border border-[#ECECEC]  rounded-[15px] p-4   "
          >
            <div className="  ">
              <img
                src={item.icon}
                alt={item.title}
                className="h-[100px] w-[100px] "
              />
            </div>
            <div>
              <h4 className="font-bold text-[#253D4E] text-[24px] text-center ">
                {item.title}
              </h4>
              <p className="text-[#7E7E7E] text-[17px] text-center ">
                {item.subtitle}
              </p>
            </div>
            <div className="">
              <button className="text-[#3BB77E] text-[16px] cursor-pointer ">
                Read more
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MidUper;
