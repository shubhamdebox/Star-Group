import localFont from "next/font/local";
import React from "react";
import Toprightcorner from "./reusable/Toprightcorner";
const myFont = localFont({ src: "../public/nimbussandext.ttf" });
const techsans = localFont({
  src: "../public/Technique+Sans.otf",
  weight: "400",
});
const Homeinfo = () => {
  return (
    <div className="">
      {/* <div className='bg-secondary'>
                <div className='max-w-7xl mx-auto '>
                    <div className='grid justify-center text-center   '>
                        <div className={`text-4xl lg:text-5xl py-5 lg:py-10 ${myFont.className}`}>
                            <span>{`Our Group's Initiatives`}</span>
                        </div>
                    </div>
                </div>
            </div> */}
      <div className="bg-secondary py-10">
        <div className="max-w-7xl mx-auto ">
          <div className="grid justify-center text-center relative ">
            <div className={`lg:text-xl   px-5 ${techsans.className}`}>
              <span className="z-30">
                {`Star Group is an amalgamation of flourishing endeavors that span across various sectors. 
We pride ourselves on our diverse portfolio, ranging from high-end hotels like Star Nest, Holiday Inn Express, and Hilton, to IT staffing via American Star Alliance, and leading cosmetology services with StarGlow Salons. We extend our footprint into the real estate market with upscale apartment complexes, and we offer compassionate assisted living facilities. 
Each venture is a shining example of our commitment to innovation, customer satisfaction, and excellence. 
Explore our network of ventures, each one unique, yet united under the umbrella of the Star Group.`}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homeinfo;
