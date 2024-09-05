import React from "react";
import noDataImg from "../../../public/Empty.svg";
import Image from "next/image";
const Hero = () => {
  return (
    <div className="mt-12 w-screen">
      <div className="w-2/3 m-auto">
        <Image
          src={noDataImg}
          alt="Nothing to show"
          width={1000}
          height={1000}
        />
        <h1 className="text-xs text-center">
          Nothing to show, Create the project
        </h1>
      </div>
    </div>
  );
};

export default Hero;
