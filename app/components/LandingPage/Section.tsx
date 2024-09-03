import Image from "next/image";
import React from "react";
import { BiMenu } from "react-icons/bi";
import easy from "../../../public/easy.png";
import newBie from "../../../public/newbie.png";
import verify from "../../../public/verify.png";
import { Verify } from "crypto";

const Section = () => {
  return (
    <section className="mt-12 w-screen xl:mt-20">
      <div className="w-1/2 m-auto flex items-center justify-center gap-2 ">
        <h1 className="text-md text-xl text-gray font-light xl:text-2xl">
          why
        </h1>
        <span className="text-2xl text-green xl:text-3xl">Cupid</span>
      </div>

      <div className=" xl:flex xl:items-center xl:justify-between ">
        <div className="w-5/6 flex items-center justify-around flex-col gap-4 xl:w-4/6 m-auto rounded-md  mt-8 p-4">
          <div className="">
            <Image src={easy} alt="Easy" width={70} height={70} />
          </div>
          <div className="flex items-center justify-center flex-col ">
            <h1 className="text-2xl font-bold">Easy to use</h1>
            <p className="text-center text-gray">
              Cupid provides you the way to easily manage your project
              irespective of the size.
            </p>
          </div>
          <div>
            <button className="font-light text-lg  px-4 py-1 text-green border border-green rounded-full ">
              Learn more
            </button>
          </div>
        </div>

        {/* devide */}

        <div className="w-5/6 flex items-center justify-around flex-col gap-4  m-auto rounded-md  mt-8 p-4 xl:w-4/6">
          <div className="">
            <Image src={newBie} alt="Easy" width={70} height={70} />
          </div>
          <div className="flex items-center justify-center flex-col">
            <h1 className="text-2xl font-bold">No Method hustle</h1>
            <p className="text-center text-gray">
              Cupid is beginner friendly you dont really need to learn any scrum
              or agile.
            </p>
          </div>
          <div>
            <button className="font-light text-lg  px-4 py-1 text-green border border-green rounded-full ">
              Learn more
            </button>
          </div>
        </div>

        {/* divide */}

        <div className="w-5/6 flex items-center justify-around flex-col gap-4  m-auto rounded-md mt-8 p-4 xl:w-4/6">
          <div className="">
            <Image src={verify} alt="Easy" width={70} height={70} />
          </div>
          <div className="flex items-center justify-center flex-col">
            <h1 className="text-2xl font-bold">Professional verified</h1>
            <p className="text-center text-gray">
              Pros have given great feedback for their large audience targeted
              projects.
            </p>
          </div>
          <div>
            <button className="font-light text-lg  px-4 py-1 text-green border border-green rounded-full ">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
