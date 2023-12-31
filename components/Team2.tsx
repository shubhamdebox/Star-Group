import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";
import { Inter, Manrope, PT_Sans, Tinos } from "next/font/google";
import linkden from "../public/linkedin.svg";

const manrope = Manrope({ subsets: ["latin"], weight: "500" });
const pTSans = PT_Sans({
  subsets: [],
  weight: "400",
});

const myFont = localFont({ src: "../public/nimbussandext.ttf" });
const techsans = localFont({
  src: "../public/Technique+Sans.otf",
  weight: "400",
});

export default function Team2({ value }: any) {
  const [data, setdata] = useState<any>(value.teams);

  return (
    <>
      {/* main div  */}
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-5">
        {/* content div */}
        <div>
          <div className="justify-center text-center">
            <span
              className={`text-4xl lg:text-5xl ${myFont.className}`}
            >{`Team`}</span>
          </div>
          <div className="justify-center text-center py-6 ">
            <span
              className={`${techsans.className} text-sm lg:text-base`}
            >{`At Star Group, it's the people that make us who we are. We believe in fostering a culture of collaboration, innovation, and shared success. Our team members, each bringing their unique talents and perspectives, work together to uphold our commitment to excellence across all ventures.`}</span>
          </div>
        </div>
        {/* content div ends*/}

        <>
          {data.length > 0 ? (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 md:p-5 gap-5">
                {data.map((val: any, index: any) => {
                  return (
                    <div className="   h-[400px] " key={index}>
                      <div
                        className={`group relative block bg-black  h-[400px]  `}
                      >
                        <Image
                          width={200}
                          height={200}
                          alt="Profile Image"
                          src={val.profileImage.url}
                          className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50 group-hover:brightness-50"
                        />

                        <div className="relative p-2 sm:p-2 lg:px-4 lg:py-4 overflow-hidden ">
                          <div
                            className=" border-2 border-t-transparent border-r-transparent 
                                                            border-b-transparent lg:border-0 group-hover:border-2 group-hover:border-r-transparent z-10 "
                          >
                            <div className="w-3 border-2 border-b-transparent absolute  top-2 left-2 lg:top-4 lg:left-4 lg:hidden group-hover:block"></div>

                            <div className="w-[70%]  border-2 border-r-transparent  border-l-transparent absolute border-t-transparent bottom-[8px] left-2 lg:bottom-4 lg:left-4  lg:hidden group-hover:block">
                              <div className="px-1 opacity-100  group-hover:opacity-100 absolute  -right-8 -top-2.5">
                                <Link
                                  href={val.linkedInUrl}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="text-white bg-black"
                                >
                                  <Image
                                    src={linkden}
                                    alt={"Linkden Logo"}
                                    width={20}
                                    className=""
                                  />
                                </Link>
                              </div>
                            </div>

                            <div className="absolute  top-0.5 lg:top-2  z-20   left-7   ">
                              <p
                                className={` ${manrope.className} px-1 text-sm  font-medium uppercase tlracking-widest text-lightblue`}
                               
                              >
                                {val.designation}
                              </p>

                              <p
                                className={`text-base  text-white ${myFont.className}`}
                              >
                                {val.name}
                              </p>
                            </div>
                            <div className="mt-32  p-4 h-[250px] md:h-[240px]">
                              <div className="absolute bottom-7 left-3 translate-y-0 lg:translate-y-8 transform opacity-100 lg:opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                                <p
                                  className={`text-sm mt-12 p-1 md:p-3 text-white ${techsans.className}`}
                                >
                                  {val?.shortDescription}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          ) : (
            <>
              <div className="justify-center text-center">
                <span className="text-5xl">
                  {" "}
                  <p>No Data found</p>
                </span>
              </div>
            </>
          )}
        </>
      </div>
    </>
  );
}
