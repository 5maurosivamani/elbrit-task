import React from "react";
import Button from "./Button";
import Image from "next/image";
import { FaCapsules, FaWeight } from "react-icons/fa";
import { FaBowlFood } from "react-icons/fa6";
import proBioticTablets from "../assets/probiatics-tablets.webp";
import BannerListItem from "./BannerListItem";

function Banner() {
  return (
    <div className=" bg-accent pt-10 pb-36">
      <div className="w-4/5 mx-auto flex flex-col space-y-[1rem] lg:space-y-[3rem]">
        <h2 className="text-[2.3rem] sm:text-[3.5rem] md:text-[4.5rem] xl:text-[6rem] text-center font-bold text-blue-950">
          Essential Vitamins
        </h2>

        <div className="flex flex-col lg:flex-row  justify-center lg:justify-between items-center  space-y-10 lg:space-y-0">
          <div className="flex  sm:justify-between w-full lg:w-auto">
            <div className="flex flex-col items-center sm:items-start justify-center  space-y-6 mx-auto sm:mx-0">
              <p className="text-gray-400 text-lg">Online Medical Supplies</p>
              <h3 className="text-2xl text-secondary font-semibold leading-6">
                Get Your Vitamins <br />& Minerals
              </h3>
              <div className=" flex justify-start">
                <Button title="EXPLORE" />
              </div>
            </div>

            <div className="hidden sm:block lg:hidden sm:h-[300px] max-w-[300px] lg:max-w-[380px] lg:mx-0 mb-5 md:mb-0 ">
              <Image
                src={proBioticTablets}
                alt="Probiotic Tablets"
                className="h-full w-full"
              />
            </div>
          </div>

          <div className="sm:hidden lg:block sm:h-[300px] max-w-[300px] lg:max-w-[380px] mx-auto lg:mx-0 mb-5 md:mb-0 ">
            <Image
              src={proBioticTablets}
              alt="Probiotic Tablets"
              className="h-full w-full"
            />
          </div>

          <div className=" flex flex-col space-y-6 max-w-[300px] sm:self-start lg:self-center">
            <BannerListItem
              title="Vitamins"
              content="Increased Vitamins and minerals in your diet"
              icon={FaCapsules}
            />
            <BannerListItem
              title="Weight Loss"
              content="Weight Loss Find scientifically proven solutions"
              icon={FaWeight}
            />
            <BannerListItem
              title="Functional Foods"
              content="Functional Foods From protein powers to baby formula"
              icon={FaBowlFood}
            />
          </div>
          {/* </div> */}
        </div>

        <div className="flex justify-center lg:justify-start items-center space-x-3 ">
          <div className="h-6 md:h-8 w-6 md:w-8 rounded-full bg-secondary bg-opacity-55"></div>
          <div className="h-6 md:h-8  w-6 md:w-8 rounded-full bg-secondary bg-opacity-55"></div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
