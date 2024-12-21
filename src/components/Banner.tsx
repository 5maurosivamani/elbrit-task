import React from "react";
import Button from "./Button";
import Image from "next/image";
import { FaCapsules, FaWeight } from "react-icons/fa";
import { IconType } from "react-icons";
import { FaBowlFood } from "react-icons/fa6";
import proBioticTablets from "../assets/probiatics-tablets.webp";

function Banner() {
  return (
    <div className=" bg-accent pt-10 pb-36">
      <div className="w-4/5 mx-auto flex flex-col space-y-[2rem] lg:space-y-[3rem]">
        <h2 className="xl:text-[6rem] md:text-[4rem] sm:text-[3rem] text-[2rem] text-center font-bold text-blue-950">
          Essential Vitamins
        </h2>

        <div className="flex flex-col lg:flex-row  justify-center items-center lg:justify-between space-y-10 lg:space-y-0">
          <div className="flex flex-col items-center justify-center space-y-6">
            <p className="text-gray-400 text-lg">Online Medical Supplies</p>
            <h3 className="text-2xl text-secondary font-semibold leading-6">
              Get Your Vitamins <br />& Minerals
            </h3>
            <div>
              <Button title="EXPLORE" />
            </div>
          </div>

          {/* <div className="flex flex-col md:flex-row md:items-center justify-between"> */}
          <div className="sm:h-[400px] lg:h-[auto] max-h-[400px] max-w-[400px] mx-auto lg:mx-0 mb-5 md:mb-0 ">
            <Image
              src={proBioticTablets}
              alt="Probiotic Tablets"
              className="h-full w-full"
            />
          </div>

          <div className=" flex flex-col space-y-6 max-w-[300px] sm:self-start lg:self-center">
            <ListItem
              title="Vitamins"
              content="Increased Vitamins and minerals in your diet"
              icon={FaCapsules}
            />
            <ListItem
              title="Weight Loss"
              content="Weight Loss Find scientifically proven solutions"
              icon={FaWeight}
            />
            <ListItem
              title="Functional Foods"
              content="Functional Foods From protein powers to baby formula"
              icon={FaBowlFood}
            />
          </div>
          {/* </div> */}
        </div>

        <div className="flex items-center space-x-3 justify-center lg:justify-start">
          <div className="h-6 md:h-8 w-6 md:w-8 rounded-full bg-secondary bg-opacity-55"></div>
          <div className="h-6 md:h-8  w-6 md:w-8 rounded-full bg-secondary bg-opacity-55"></div>
        </div>
      </div>
    </div>
  );
}

export default Banner;

type ListItem = {
  title: string;
  content: string;
  icon: IconType;
};

const ListItem = ({ title, content, icon: Icon }: ListItem) => {
  return (
    <div className="flex space-x-3">
      <div className="h-10 w-10 bg-secondary rounded-full text-white flex justify-center items-center">
        <Icon size={20} />
      </div>
      <div>
        <h3 className="text-secondary font-semibold">{title}</h3>
        <p className="text-xs text-gray-400">{content}</p>
      </div>
    </div>
  );
};
