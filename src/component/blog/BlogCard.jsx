import React from "react";
import pic from "/391.png";

function BlogCard({ blogData }) {
  return (
    <section className=" w-11/12 mx-auto px-6 py-12 bg-white mt-[102px]">
      <p className="flex items-center text-[40px] text-[#253D4E] font-bold mb-[40px] gap-2  ">
        <img src={pic} alt="" />
        Recips Articles
      </p>

      <div className="">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogData.map((post) => (
            <div
              key={post.id}
              className="flex flex-col items-center text-center h-[472px] w-[392px] "
            >
             
              <div className="  rounded-[15px] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className=" h-[309px] object-cover object-center"
                  
                />
              </div>

              
              <div className="mt-4">
                <p className="text-[14px] text-[#B6B6B6] mb-1">
                  {post.category}
                </p>
                <h3 className="text-[#253D4E] font-bold text-[24px">
                  {post.title}
                </h3>
                <div className="text-[#7E7E7E] text-[13px] flex items-center justify-center space-x-2 mt-2">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.views}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogCard;
