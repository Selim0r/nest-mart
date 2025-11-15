import React from "react";
import icon1 from "/icon-1.png";
import icon2 from "/icon-2.png";
import icon3 from "/icon-3.png";
import icon4 from "/icon-4.png";
import icon5 from "/icon-5.png";

function Offer() {
  const offers = [
    {
      id: 1,
      icon: icon1,
      title: "Best prices & offers",
      subtitle: "Orders $50 or more",
    },
    {
      id: 2,
      icon: icon2,
      title: "Free delivery",
      subtitle: "24/7 amazing services",
    },
    {
      id: 3,
      icon: icon3,
      title: "Great daily deal",
      subtitle: "When you sign up",
    },
    {
      id: 4,
      icon: icon4,
      title: "Wide assortment",
      subtitle: "Mega Discounts",
    },
    {
      id: 5,
      icon: icon5,
      title: "Easy returns",
      subtitle: "Within 30 days",
    },
  ];

  return (
    <div className=" px-4 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
      {offers.map((item) => (
        <div
          key={item.id}
          className=" w-[252px] h-[100px]  flex items-center gap-4 bg-[#F4F6FA] border border-gray-100 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300"
        >
          <div className="p-3 bg-green-50 rounded-full flex-shrink-0">
            <img src={item.icon} alt={item.title} className="w-10 h-10" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 text-sm">
              {item.title}
            </h4>
            <p className="text-gray-500 text-xs">{item.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Offer;
