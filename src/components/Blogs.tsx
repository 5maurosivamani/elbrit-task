import React from "react";
import BlogCard from "./BlogCard";

import blogOne from "../assets/blog1.png";
import blogTwo from "../assets/blog2.png";
import { keyGenerator } from "@/utils/generateId";

function Blogs() {
  const keyGen  = keyGenerator();

  return (
    <div className="min-h-screen">
      <div className="w-4/5 mx-auto py-10">
        <h2 className="text-secondary font-semibold text-center mb-3">
          OUR BLOG
        </h2>
        <h3 className="text-secondary font-semibold text-center text-2xl lg:text-3xl mb-10">
          Latest news
        </h3>

        <div className="grid xl:grid-cols-4 lg:grid-cols-2 sm:grid-cols-2 gap-10 md:w-10/12 xl:w-full  mx-auto place-content-center">
          {Array(4)
            .fill(0)
            .map((item, i) => {
              const uniqueId = keyGen.next().value;
              return (
                <div className="flex flex-col space-y-10" key={uniqueId}>
                  <BlogCard image={blogOne} halfSize={i % 2 === 1} />
                  <BlogCard image={blogTwo} halfSize={i % 2 === 0} />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Blogs;
