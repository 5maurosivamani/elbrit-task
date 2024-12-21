import { IngredientCardProps } from "@/types/IngredientCard";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function IngredientCard({ title, description, image }: IngredientCardProps) {

  return (
    <div className="md:col-span-5 xl:col-span-3">
      <div className="bg-accent text-primary  rounded-lg relative min-w-[300px] max-w-[380px] mx-auto md:mx-0">
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
