import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { FaTags, FaShoppingCart } from "react-icons/fa";

import pic1 from "/1.jpg";
import pic2 from "/2.jpg";
import pic3 from "/3.jpg";
import pic4 from "/4.jpg";
import pic5 from "/5.jpg";
import pic6 from "/6.jpg";
import pic7 from "/7.jpg";
import pic8 from "/8.jpg";
import pic9 from "/9.jpg";
import pic10 from "/10.jpg";
import pic11 from "/11.jpg";
import pic12 from "/12.jpg";
import pic13 from "/13.jpg";
import pic14 from "/14.jpg";
import pic15 from "/15.jpg";

function MegaCard() {
  const card = [
    {
      id: 1,
      product_name: "Seeds of Change Organic Red Rice",
      category: "Fresh Fruits",
      price: 28.85,
      discount: 12,
      brand: "NestFood",
      img: pic1,
    },
    {
      id: 2,
      product_name: "All Natural Style Chicken Meatballs",
      category: "Bread and Meat",
      price: 52.85,
      discount: 8,
      brand: "NestFood",
      img: pic2,
    },
    {
      id: 3,
      product_name: "Angie's Sweet & Salty Kettle Corn",
      category: "Baking material",
      price: 48.85,
      discount: 20,
      brand: "Country Crock",
      img: pic3,
    },
    {
      id: 4,
      product_name: "Foster Farms Takeout Crispy Classic",
      category: "Baking material",
      price: 17.85,
      discount: 17,
      brand: "Country Crock",
      img: pic4,
    },
    {
      id: 5,
      product_name: "Blue Almonds Lightly Salted Vegetables",
      category: "Fresh Fruits",
      price: 23.85,
      discount: 19,
      brand: "Country Crock",
      img: pic5,
    },
    {
      id: 6,
      product_name: "Chobani Complete Vanilla Greek Yogurt",
      category: "Fresh Fruits",
      price: 54.85,
      discount: 21,
      brand: "Country Crock",
      img: pic6,
    },
    {
      id: 7,
      product_name: "Haagen Caramel Cone Ice Cream Boxed",
      category: "Baking material",
      price: 22.85,
      discount: 8,
      brand: "Hamburger Hel",
      img: pic7,
    },
    {
      id: 8,
      product_name: "Gorton’s Beer Battered Fish Fillets",
      category: "Frozen Seafood",
      price: 23.85,
      discount: 6,
      brand: "Hamburger Hel",
      img: pic8,
    },
    {
      id: 9,
      product_name: "Encore Seafoods Stuffed Alaskan",
      category: "Cooking & Baking",
      price: 35.85,
      discount: 6,
      brand: "Hamburger Hel",
      img: pic9,
    },
    {
      id: 10,
      product_name: "Canada Dry Ginger Ale - 2 L Bottle",
      category: "Baking material",
      price: 32.85,
      discount: 3,
      brand: "Hamburger Hel",
      img: pic10,
    },
    {
      id: 11,
      product_name: "Extra virgin olive oil, canola oil, nufort oil",
      category: "Baking material",
      price: 58.0,
      discount: 4,
      brand: "Totino’s Pizza",
      img: pic11,
    },
    {
      id: 12,
      product_name: "Frozen vegetables broccoli, spinach",
      category: "Baking material",
      price: 71.0,
      discount: 8,
      brand: "Totino’s Pizza",
      img: pic12,
    },
    {
      id: 13,
      product_name: "Frozen fruit strawberry, berries",
      category: "Fresh Fruits",
      price: 78.0,
      discount: 29,
      brand: "Manuchan Ramen",
      img: pic13,
    },
    {
      id: 14,
      product_name: "Pre-portioned, low-fat ice cream yogurt",
      category: "Food and Juice",
      price: 79.0,
      discount: 31,
      brand: "Manuchan Ramen",
      img: pic14,
    },
    {
      id: 15,
      product_name: "Dried fruit: apricots, figs, prunes",
      category: "Baking material",
      price: 56.0,
      discount: 29,
      brand: "USA Noodle Soup",
      img: pic15,
    },
  ];

  const categories = ["All", ...new Set(card.map((p) => p.category))];
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? card
      : card.filter((p) => p.category === activeCategory);

  return (
    <div className="w-11/12 mx-auto pt-[58px] ">
      <h2 className="text-[32px] text-[#253D4E] font-bold">Popular Products</h2>

      <div className="flex justify-end items-center gap-2 mb-6 text-[16px] font-semibold pr-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-2 py-1 transition cursor-pointer ${
              activeCategory === cat ? "text-[#3BB77E]" : "text-[#253D4E]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2">
        {filtered.map((item) => (
          <div key={item.id} className="bg-white p-4 mb-[50px]">
            <div className="border border-[#ECECEC] text-center space-y-[15px] rounded-[15px] shadow hover:shadow-lg transition h-[411px] w-[220px]">
              <div className="relative w-full h-40 bg-gray-100 rounded-lg flex items-center justify-center mb-3">
                <img
                  src={item.img}
                  alt={item.product_name}
                  className="object-contain h-full"
                />

                <span className="absolute top-0 left-0 bg-[#3BB77E] text-white text-[12px] px-2 py-1 rounded-tl-[15px] rounded-br-[20px] flex items-center gap-1">
                  <FaTags className="text-xs" />
                  {item.discount}%
                </span>
              </div>

              <p className="text-[#ADADAD] text-[12px]">{item.category}</p>

              <h3 className="font-bold text-[16px] text-[#253D4E]">
                {item.product_name}
              </h3>

              <p className="text-[#B6B6B6] text-[16px]">
                By{" "}
                <span className="text-[#3BB77E] text-[16px] p-2">
                  {item.brand}
                </span>
              </p>

              <div className="flex items-center justify-around">
                <div className="flex items-center gap-2">
                  <p className="text-[#3BB77E] font-semibold text-[18px]">
                    $
                    {(item.price - item.price * (item.discount / 100)).toFixed(
                      2
                    )}
                  </p>
                  <p className="text-[#ADADAD] line-through text-[14px]">
                    ${item.price}
                  </p>
                </div>

                <button className="flex items-center gap-1 px-3 py-1 bg-[#DEF9EC] text-[#3BB77E] rounded-[4px] cursor-pointer">
                  <FaShoppingCart /> Add
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MegaCard;
