import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";
import { Manrope } from "next/font/google";
import linkden from "../public/linkedin.svg";

const manrope = Manrope({ subsets: ["latin"], weight: "500" });

const myFont = localFont({ src: "../public/nimbussandext.ttf" });
const techsans = localFont({
  src: "../public/Technique+Sans.otf",
  weight: "400",
});

export default function Team({ value }: any) {
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
              className={`${techsans.className} text-sm lg:text-xl`}
            >{`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat debitis aperiam rem id earum accusamus incidunt. Consequuntur dolor eaque alias. Ducimus, fugit ratione dolore aliquid dolorem ea unde sint nobis explicabo, facilis, soluta commodi.`}</span>
          </div>
        </div>
        {/* content div ends*/}

        <>
          {data.length > 0 ? (
            <>
              <div className="grid lg:grid-cols-3 md:p-5 gap-5">
                {data.map((val: any, index: any) => {
                  return (
                    <div className="  md:px-5 h-[400px] " key={val.name}>
                      <div
                        className={`group relative block bg-black ${
                          index % 3 == 1 ? "lg:mt-10" : ""
                        } h-[400px]  `}
                      >
                        <Image
                          width={200}
                          height={200}
                          alt="Profile Image"
                          src={val.profileImage.url}
                          className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                        />

                        <div className="relative p-2 sm:p-2 lg:px-4 lg:py-4 overflow-hidden ">
                          <div
                            className=" border-2 border-t-transparent border-r-transparent 
                                                            border-b-transparent md:border-0 group-hover:border-2 group-hover:border-r-transparent z-10 "
                          >
                            <div className="w-3 border-2 border-b-transparent absolute  top-2 left-2 lg:top-4 lg:left-4 md:hidden group-hover:block"></div>

                            <div className="w-[70%] border-2 border-r-transparent  border-l-transparent absolute border-t-transparent bottom-[8px] left-2 lg:bottom-4 lg:left-4  md:hidden group-hover:block"></div>

                            <div className="absolute  top-0 md:top-3 z-20   left-7   ">
                              <p
                                className={` ${manrope.className} px-1 text-sm  font-medium uppercase tlracking-widest text-lightblue`}
                                border-r-transparent
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
                              <div className="absolute bottom-7 left-3 translate-y-0 md:translate-y-8 transform opacity-100 md:opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                                <p
                                  className={`text-sm mt-12 p-1 md:p-3 text-white ${techsans.className}`}
                                >
                                  {val?.shortDescription}
                                </p>
                              </div>
                            </div>
                            <div className="px-1 opacity-100 md:opacity-0 group-hover:opacity-100 absolute bottom-0 right-16 md:right-48  lg:bottom-2   lg:right-20 backdrop-blur-sm">
                              <Link
                                href={val.linkedInUrl}
                                className="text-white bg-black"
                              >
                                <Image
                                  src={linkden}
                                  alt={"Linkden Logo"}
                                  width={20}
                                />
                              </Link>
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
