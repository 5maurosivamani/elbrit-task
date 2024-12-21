import React from "react";
import IngredientCard from "./IngredientCard";
import IngImage1 from "../assets/ing-bg-1.webp";
import IngImage2 from "../assets/ing-bg-2.webp";
import IngImage3 from "../assets/ing-bg-3.webp";
import IngImage4 from "../assets/ing-bg-4.webp";
import IngImage5 from "../assets/ing-bg-5.webp";

const IngredientsData = [
  {
    id: 1,
    title: "Vitamin C",
    description: "Vitamin C as ascorbic acid",
    image: IngImage1,
  },
  {
    id: 2,
    title: "Vitamin B3",
    description: "Niacin for healthy gut and skin",
    image: IngImage2,
  },
  {
    id: 3,
    title: "Magnesium",
    description: "Boost energy and support muscle function",
    image: IngImage3,
  },
  {
    id: 4,
    title: "Hyaluronic Acid",
    description: "For smooth, supple and soft skin!",
    image: IngImage4,
  },
  {
    id: 5,
    title: "Lactobacillus",
    description: "Invigorate your gut microbiome",
    image: IngImage5,
  },
];

function Ingredients() {
  return (
    <div className="w-4/5 mx-auto my-10 grid gap-5  xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 place-content-center">
      <div className="text-primary  lg:col-span-2">
        <h2 className="font-semibold mb-3">INGREDIENTS</h2>
        <h3 className="text-2xl lg:text-3xl font-semibold mb-4">Better Ingredients</h3>
        <p className="text-gray-600">
          Only the best when you choose products offered on our platform
          high-quality ingredients for high quality products!
        </p>
      </div>
      {IngredientsData.map((item) => (
        <React.Fragment key={item.id}>
          <IngredientCard {...item} />
        </React.Fragment>
      ))}
      <div className="hidden lg:flex flex-col justify-end overflow-clip relative min-h-[200px] rounded-lg  ">
        <div className="h-48 w-48 rounded-full bg-sky-300 -translate-x-1/2 -translate-y-1/2 absolute"></div>
        <div className="h-24 w-24 rounded-full bg-orange-300"></div>
      </div>
    </div>
  );
}

export default Ingredients;
