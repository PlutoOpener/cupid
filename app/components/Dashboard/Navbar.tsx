import Image from "next/image";
import React from "react";
import { CiMenuKebab } from "react-icons/ci";
import { FaHamburger, FaPlus } from "react-icons/fa";

export const Navbar = () => {
  return (
    <div className="w-screen h-12 bg-white shadow-md flex items-center justify-between px-2">
      <div className="flex items-center justify-between gap-2">
        <CiMenuKebab className="text-xl" />
        <Image
          className="rounded-full"
          src="https://lh3.googleusercontent.com/a/ACg8ocLIZtKrwEKNhPkmWXFzLGfdjdOUH-Zev7ypOrfodCtPnj3mvQ=s96-c"
          alt="profile"
          height={40}
          width={40}
        />
      </div>

      <div>
        <button className="flex  items-center  justify-center gap-2 bg-green text-gray px-4 py-2 rounded-md">
          Create New Project
          <FaPlus className="font-light" />
        </button>
      </div>
    </div>
  );
};
