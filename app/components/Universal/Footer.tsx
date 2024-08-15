import React from "react";
import logo from "../../../public/cupid.png";
import Image from "next/image";
const Footer = () => {
  return (
    <>
      <footer className="w-screen mt-6 p-4 overflow-x-hidden border border-white border-t-gray border-opacity-20">
        <div className="flex items-center justify-between">
          <div>
            <Image src={logo} alt="cupid" className="h-12 w-12" />
          </div>

          <div>
            <Image
              src="https://upload.wikimedia.org/wikipedia/en/4/46/Make_In_India.png"
              alt="Make in India"
              width={100}
              height={100}
            />
          </div>
        </div>

        <div className="mt-10">
          <div className="flex items-start justify-center flex-col gap-2">
            <h1 className="text-md">Company</h1>

            <div className="flex items-start justify-center flex-col text-sm gap-1">
              <button className="opacity-40">Who we are</button>
              <button className="opacity-40">Contact us</button>
              <button className="opacity-40">Careers</button>
              <button className="opacity-40">Investors</button>
              <button className="opacity-40">Terms & policy</button>
            </div>
          </div>

          <div className="flex items-start justify-center flex-col gap-2 mt-4">
            <h1 className="text-md">Learn More</h1>

            <div className="flex items-start justify-center flex-col text-sm gap-1">
              <button className="opacity-40">Privacy</button>
              <button className="opacity-40">Security</button>
              <button className="opacity-40">Terms</button>
              <button className="opacity-40">Customer support</button>
            </div>
          </div>
        </div>
      </footer>
      <div className=" w-screen mt-4 border border-white border-t-gray border-opacity-5 p-4">
        <h1 className="opacity-25 text-sm">
          By continuing past this page, you agree to our Terms of Service,
          Cookie Policy, Privacy Policy and Content Policies. All trademarks are
          properties of their respective owners. 2024 © Cupid™ Ltd. All rights
          reserved.
        </h1>
      </div>
    </>
  );
};

export default Footer;
