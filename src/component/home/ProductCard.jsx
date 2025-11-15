
import React from "react";
import { FaStar } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

const ProductCard = ({ product }) => {
  return (
    <div className="border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden relative">
     
      <div className="absolute top-0 left-0 right-0 flex justify-between items-center">
        {product.offPercentage && (
          <span className="bg-[#3BB77E] text-white text-[12px] h-[32px] w-[60px] flex items-center justify-center rounded-tl-[15px] rounded-br-[20px]">
            {product.offPercentage}%
          </span>
        )}

        {product.batch && (
          <span
            className={`text-white text-[12px] font-semibold px-3 py-[6px] rounded-tr-[15px] rounded-bl-[20px] ${
              product.batch === "sale"
                ? "bg-[#F74B81]"
                : product.batch === "new"
                ? "bg-[#3BB77E]"
                : product.batch === "featured"
                ? "bg-[#67BCEE]"
                : "bg-[#F59758]"
            }`}
          >
            {product.batch}
          </span>
        )}
      </div>

      
      <div className="flex justify-center p-5 bg-white">
        <img
          src={product.img}
          alt={product.title}
          className="h-40 object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      
      <div className="p-4">
        <p className="text-gray-400 text-sm mb-1">{product.brand}</p>
        <h3 className="text-[#253D4E] font-bold text-[16px] mb-2">
          {product.title}
        </h3>

        
        <div className="flex items-center gap-1 mb-1">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={`text-sm ${
                i < product.rating ? "text-yellow-400" : "text-gray-300"
              }`}
            />
          ))}
          <span className="text-xs text-gray-500">({product.rating})</span>
        </div>

        <p className="text-sm text-[#B6B6B6] text-[16px] mb-1">
          By <span className="text-[#3BB77E] text-[16px]">{product.brand}</span>
        </p>

        
        <div className="flex items-center justify-between mt-2">
          <div>
            <p className="text-[#3BB77E] font-bold text-[18px] ">
              ${product.currentPrice}
              {product.oldPrice && (
                <span className="text-[#ADADAD] line-through text-sm ml-2">
                  ${product.oldPrice}
                </span>
              )}
            </p>
          </div>
          <button className="flex items-center gap-2 border bg-[#DEF9EC] text-green-500 px-3 py-1.5 rounded-md hover:bg-green-500 hover:text-white transition">
            <FaShoppingCart />
            <span className="text-sm font-medium">Add</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
