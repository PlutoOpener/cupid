import Image from "next/image";
import Navbar from "./components/LandingPage/Navbar";
import { FaQuoteLeft } from "react-icons/fa";
import Section from "./components/LandingPage/Section";
import Footer from "./components/Universal/Footer";

export default function Home() {
  return (
    <div className="w-screen h-screen">
      <Navbar />
      <div className="bg-none mt-8">
        <Image
          src="https://media.licdn.com/dms/image/D4D12AQEn7iaT75cWSw/article-cover_image-shrink_600_2000/0/1662465946904?e=2147483647&v=beta&t=rB49pwFfArb1YzjQj74s-yLJ5o_adI8Ea8Iy2jGh2tg"
          alt="Project management"
          width={500}
          height={500}
        />

        <div
          className="w-5/6 h-full bg-lightGreen m-auto relative p-6 mt-8 rounded-2xl before:content-[''] before:w-4 before:h-4 before:border-lightGreen before:border-8 before:border-t-green before:border-l-green  before:absolute before:top-0 before:left-0                  after:content-[''] after:w-4\
         after:h-4 after:border-lightGreen after:border-8 after:border-b-green after:border-r-green  after:absolute after:bottom-0 after:right-0"
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
