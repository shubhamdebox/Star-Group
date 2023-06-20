import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../public/logo.svg";
// import { morgan, stan } from "@/pages/_app";

const Footer = () => {
  return (
    <div id="footer" className="bg-primary text-white py-8 relative" >
      {/* <div className="pb-6 overflow-clip pt-8">
        <Icon />
      </div> */}
       {/* <div className="max-w-6xl mx-auto bg-[#C7CECF] ">
          <div className=" flex justify-center text-center py-10 text-black text-2xl">
             <p>{`"Where `}</p><span className="px-1">{` Hospitality,`}</span><span className="px-1">{` Expertise,`}</span>
             <span className="px-1">{` and`}</span><span className="px-1">{` Style Converge"`}</span>
          </div>
        </div>  */}
      <div className="grid md:grid-cols-3 grid-cols-1 max-w-6xl mx-auto  gap-10 pt-8 w-11/12 ">
       
        <div className=" ">
          <Image src={logo} alt={""}
          />
        </div>
        <div className=" flex flex-col gap-2 md:ml-14 ">
          <h2 className={`pb-4 text-2xl md:text-4xl `}>
            Contact Us
          </h2>
          {/* <h2>Open 7 days a week</h2> */}
          <h2 className=" py-1 text-xl">Address</h2>
          <p>2253 William Way
            Greenfield, IN 46140</p>
          <h2 className="text-xl">Phone</h2>
          <Link href="tel:+1 908 625 2228" className="">+1 (908) 625-2228</Link>
          <h2 className=" text-xl py-1"> E-Mail</h2>
          <Link
            href="mailto:info@starsgroupinc.com"
            className=""> info@starsgroupinc.com</Link>
        </div>
        <div className="">
          <h2 className={`pb-4 text-2xl md:text-4xl `}>
            Quick Links
          </h2>
          <div className="flex flex-col gap-3">
            <div className="text-xl flex  items-center gap-2">

              <Link href="/" className="">
                Gallery
              </Link>
            </div>
            <div className="text-xl flex  items-center gap-2 py-2">

              <Link
                href="/About"
                className=""
              >
                About us
              </Link>
            </div>
            <div className="text-xl flex  items-center gap-2 py-2">

              <Link
                href="/Contactus"
                className=""
              >
                Contact us
              </Link>
            </div>
          </div>

        </div>
      </div>
      <hr className="border-t-2 border-white mt-4 max-w-6xl mx-auto" />
      <div className="grid place-items-center py-8 text-center px-4  ">
        {/* <Image src={logo} alt={""} className="py-2" /> */}
        <h2 className="text-base md:text-lg pb-2 divide-x">
          <span>
            Copyright © <span className="px-2">{new Date().getFullYear()}</span>
          </span>
          <span className="px-1"> All rights reserved by Star Group</span>
        </h2>
        <Link href="https://debox.co.in/" target="_blank" className="text-base">
          Designed and developed by{" "}
          <span className=" text-primeBeige text-sm font-bold">
            {" "}
            Debox Consulting
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
