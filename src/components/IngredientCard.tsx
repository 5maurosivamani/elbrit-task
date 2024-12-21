import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

type IngredientCardType = {
  title: string;
  description: string;
  image: StaticImageData;
};

function IngredientCard({ title, description, image }: IngredientCardType) {
  console.log(title, description);
  return (
    <div className="flex justify-center ">
      <div className="bg-accent text-primary  rounded-lg relative min-w-[300px]">
        <Image src={image} alt={title} className="w-full h-full" />
        <div className="absolute top-0 left-0 h-full w-full p-8">
          <div className="flex flex-col justify-between h-full">
            <div>
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="text-gray-600 font-medium">{description}</p>
            </div>

            <Link
              href="#"
              title="See More"
              className="underline underline-offset-4 font-semibold "
            >
              SEE MORE
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IngredientCard;
