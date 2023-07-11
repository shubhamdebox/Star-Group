import localFont from "next/font/local";
import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const myFont = localFont({ src: "../public/nimbussandext.ttf", weight: "400" });
const techsans = localFont({
  src: "../public/Technique+Sans.otf",
  weight: "400",
});

export default function Hero({ data }: any) {
  const [imageurls, setimageurls] = useState(data.heroes[0].images[0].images);

  return (
    <>
      <div className=" ">
        {/* flex flex-col-reverse md:flex md:flex-row lg:min-h-screen mb-10 */}
        <div className="grid md:grid-cols-2 grid-cols-1  md:min-h-screen ">
          <div className=" mx-7  grid  place-items-center md:order-none order-2 py-5">
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
            </div>
          </div>

          <div className="md:order-none order-1 relative z-10">
          <svg
            className="absolute z-30 inset-y-0 -left-64 hidden h-full w-64   translate-x-1/2 transform text-accent lg:block"
            fill="white"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 ,0" />
          </svg>
            <Swiper
              pagination={{
                dynamicBullets: true,
                clickable: true,
              }}
              modules={[Pagination, Autoplay]}
              speed={3000}
              autoplay={{ delay: 2000 }}
              className="mySwiper"
            >
              {imageurls.map((val: any , index : any) => {
                return (
                  
                  
                    <SwiperSlide key={index}>
                      <Image
                        src={val.url}
                        alt={"hero images"}
                        width={900}
                        height={700}
                        className="z-5"
                      />
                    </SwiperSlide>
                  
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}
