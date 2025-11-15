import React from "react";

import BlogCard from "../component/blog/BlogCard";
import { useLoaderData } from "react-router";

function Blog() {
  const blogData = useLoaderData(); 

  return (
    <div>
      <BlogCard blogData={blogData} />
    </div>
  );
}

export default Blog;
