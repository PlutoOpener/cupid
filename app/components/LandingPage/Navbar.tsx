import Image from "next/image";
import React from "react";
import logo from "../../../public/cupid.png";
import { CiMenuKebab } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

const Navbar: React.FC = () => {
  return (
    <nav className="w-screen h-16 shadow-md flex items-center justify-between xl:px-8  xm:px-2 bg-white px-2">
      <Image src={logo} alt="cupid" className="h-12 w-12" />

      <div className="md:flex lg:flex xl:flex 2xl:flex  items-center justify-between gap-6 hidden">
        <div className="flex items-center justify-center ">
          Solutions <MdKeyboardArrowDown />
        </div>
        <div className="flex items-center justify-center ">
          Products <MdKeyboardArrowDown />
        </div>
        <div className="flex items-center justify-center ">
          Resources <MdKeyboardArrowDown />
        </div>
        <div className="flex items-center justify-center ">
          Contact sales <MdKeyboardArrowDown />
        </div>
        <div className="flex items-center justify-center ">
          Pricing <MdKeyboardArrowDown />
        </div>
      </div>
      <div className="flex items-center justify-around  gap-4 xm:justify-center xm:gap-2 ">
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            console.log(credentialResponse);
            const codedUserData = credentialResponse?.credential;
            const decodedUserdata = jwtDecode(codedUserData!);
            console.log(decodedUserdata);
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />

        <CiMenuKebab className="text-xl md:hidden" />
      </div>
    </nav>
  );
};

export default Navbar;
