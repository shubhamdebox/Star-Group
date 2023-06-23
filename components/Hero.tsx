import localFont from "next/font/local";
import Image from "next/image";
import { useState } from "react";

const myFont = localFont({ src: "../public/nimbussandext.ttf", weight: "400" });

const techsans = localFont({
  src: "../public/Technique+Sans.otf",
  weight: "400",
});

export default function Hero({ data }: any) {
  const [imageurls, setimageurls] = useState(data.heroes[0].images[0].images);

  return (
    <>
      <div className="max-w-7xl mx-auto ">
        <div className="flex flex-col-reverse md:flex md:flex-row lg:min-h-screen mb-10">
          <div className="md:w-[60%] mx-7  grid justify-items-center content-center ">
            <div className=" grid  text-primary z-10">
              <p
                className={`${myFont.className} text-2xl  md:text-4xl lg:text-5xl`}
              >{`Welcome to the Star Group`}</p>
              <p
                className={`${techsans.className} text-xl md:text-2xl lg:text-3xl pt-2 md:py-5 `}
              >{`An amalgamation of flourishing endeavors`}</p>
              {/* <p className={`${techsans.className} text-xl md:text-2xl lg:text-3xl py-2 `}>{` `}</p> */}
              <p
                className={`${techsans.className} text-sm md:text-sm lg:text-lg `}
              >{` Spanning across hospitality, IT staffing, cosmetology, and more, we are committed to delivering excellence across industries. Each venture, a unique star in our galaxy, contributes to our unified vision. `}</p>
              {/* <div className="text-lg py-5 z-10">
                            <button className={`${techsans.className} text-sm md:text-sm lg:text-base hover:to-blue-600 `}>{`Learn more about our values ->`}</button>
                        </div> */}
            </div>
          </div>
          <div className="md:w-[40%] grid justify-items-center md:justify-items-left content-center mt-1 md:mt-0">
            <div className="grid grid-cols-2 mx-4 my-5">
              {imageurls.map((val: any, index: any) => {
                return (
                  <div key={index}>
                    <Image
                      src={val.url}
                      alt={""}
                      width={300}
                      height={300}
                      className={`relative  z-20 
                                    ${
                                      index == 0
                                        ? " absolute  left-24 top-10 z-30 md:top-0 md:left-0 md:z-0"
                                        : ""
                                    } 
                                    ${
                                      index == 1
                                        ? " absolute hidden  md:block  md:bottom-20 md:right-44 z-30"
                                        : ""
                                    } 
                                    ${
                                      index == 2
                                        ? " absolute bottom-5 md:bottom-10 md:left-32 z-10"
                                        : ""
                                    }
                                    ${
                                      index == 3
                                        ? " absolute md:bottom-32 md:right-10 z-10"
                                        : ""
                                    }
                                    `}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
