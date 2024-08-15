import Image from "next/image";
import React from "react";
import logo from "../../../public/cupid.png";
import { CiMenuKebab } from "react-icons/ci";

const Navbar: React.FC = () => {
  return (
    <nav className="w-screen h-16 shadow-md flex items-center justify-between px-4 bg-white">
      <Image src={logo} alt="cupid" className="h-12 w-12" />

      <div className="flex items-center justify-around w-1/3">
        <button className=" py-1 px-4 bg-green rounded-md text-gray text-sm font-light">
          Login
        </button>
        <CiMenuKebab className="text-xl" />
      </div>
    </nav>
  );
};

export default Navbar;
