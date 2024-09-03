"use client";
import Image from "next/image";
import Navbar from "./components/LandingPage/Navbar";
import { FaQuoteLeft } from "react-icons/fa";
import Section from "./components/LandingPage/Section";
import Footer from "./components/Universal/Footer";

import { useRef } from "react";
export default function Home() {
  return (
    <div className="w-screen h-screen">
      <Navbar />
      <div className="bg-none mt-8 ">
        {/* Image for small screen */}
        <div className="xl:flex xl:items-center xl:justify-between xl:px-10">
          <div className="w-screen h-fit xl:w-1/2 ">
            <Image
              src="https://media.licdn.com/dms/image/D4D12AQEn7iaT75cWSw/article-cover_image-shrink_600_2000/0/1662465946904?e=2147483647&v=beta&t=rB49pwFfArb1YzjQj74s-yLJ5o_adI8Ea8Iy2jGh2tg"
              alt="Project management"
              width={1000}
              height={1000}
              className="gif "
            />
          </div>
          <div className="w-1/2 hidden xl:block  h-96 py-16 px-4">
            <h1 className="text-4xl font-extrabold capitalize">
              Making your hustle stressfree & Simplifying the things.
            </h1>

            <h1 className="opacity-50 mt-2">
              Managing projects doesn&apos;t have to be complicated. At cupid we
              provide a streamlined platform that simplifies project management,
              boosts team collaboration, and drives your projects to success.
            </h1>

            <button className="px-10 py-2 bg-green text-gray mt-12 rounded-md">
              Get started
            </button>
          </div>
        </div>

        {/* Image for large screen  */}
        {/* <div className="h-10 w-10">
          <Image
            src="https://media.licdn.com/dms/image/D4D12AQEn7iaT75cWSw/article-cover_image-shrink_600_2000/0/1662465946904?e=2147483647&v=beta&t=rB49pwFfArb1YzjQj74s-yLJ5o_adI8Ea8Iy2jGh2tg"
            alt="Project management"
            width={1000}
            height={1000}
            className="gif sm:block hidden"
          />
        </div> */}

        <div
          className="w-5/6 h-fit bg-lightGreen m-auto relative p-6 mt-8 rounded-2xl before:content-[''] before:w-4 before:h-4 before:border-lightGreen before:border-8 before:border-t-green before:border-l-green  before:absolute before:top-0 before:left-0                  after:content-[''] after:w-4\
         after:h-4 after:border-lightGreen after:border-8 after:border-b-green after:border-r-green  after:absolute after:bottom-0 after:right-0 xl:hidden"
        >
          <div className="flex items-start flex-col gap-4">
            <FaQuoteLeft className="text-xl text-gray" />
            <h1 className="text-gray opacity-70">
              Operations keeps the lights on, strategy provides a light at the
              end of the tunnel, but project management is the train engine that
              moves the organization forward.
            </h1>
          </div>
          <div className="text-gray font-bold text-right"> - Joy Gumz</div>
        </div>
      </div>

      <Section />

      <Footer />
    </div>
  );
}
