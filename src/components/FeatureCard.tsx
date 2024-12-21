import { FeatureCardProps } from "@/types/FeatureCard";
import Image from "next/image";
import React from "react";

function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <div className="text-white flex flex-col justify-center items-center space-y-4 p-5 ">
      <div className="h-20 w-20 lg:h-28 lg:w-28 bg-white text-secondary rounded-full flex justify-center items-center">
        <Image  src={icon} alt={title} className="h-14 w-14 lg:h-20 lg:w-20" />
      </div>
      <h4 className="text-xl lg:text-2xl font-bold text-center">{title}</h4>
      <p className="leading-5 text-xs md:text-sm text-center max-w-[250px]">
        {description}
      </p>
    </div>
  );
}

export default FeatureCard;
