import Image, { StaticImageData } from "next/image";
import React from "react";

type BlogCardType = {
  image: StaticImageData;
  halfSize?: boolean;
};

function BlogCard({ image, halfSize }: BlogCardType) {
  return (
    <div
      className={`max-w-[300px] bg-accent relative rounded-xl  ${
        halfSize ? "h-[200px]" : "h-[300px]"
      }`}
    >
      <div className="h-full overflow-clip rounded-xl">
        <Image src={image} alt="Turmeric & Ginger" />
      </div>
      <span className="bg-primary text-white px-4 py-2 rounded-tr-full rounded-br-full absolute top-4 -left-4">
        20 APR
      </span>

      <p className="absolute top-[4rem] px-5 font-bold text-white">
        The Covid-19 Epidemic In 2022 Is Back
      </p>
    </div>
  );
}

export default BlogCard;
