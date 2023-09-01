import React from "react";
import Image from "next/image";
import CountDown from "./CountDown";

const Offer = () => {
  return (
    <div className="bg-black h-screen flex flex-col md:flex-row text-white md:justify-between md:bg-[url('/offerBg.png')] md:h-[70vh]">
      {/**Text Container */}
      <div className="flex-1 flex flex-col justify-center items-center gap-8 p -6 ">
        <h1 className=" text-5xl font-bold xl:text-6xl">Delicious Milk Tea</h1>
        <p className="xl:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ipsum
          tempora nisi, iste saepe velit. Amet?
        </p>
        <CountDown />
        <button className="bg-white text-black rounded-md py-3 px-6">
          Order Now
        </button>
      </div>
      {/**Text Container */}
      <div className="flex-1 w-full relative md:h-full">
        <Image
          src="/offerProduct1.png"
          alt=""
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default Offer;
