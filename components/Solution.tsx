import Link from "next/link";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
const myFont = localFont({ src: "../public/nimbussandext.ttf" });
const techsans = localFont({
    src: "../public/Technique+Sans.otf",
    weight: "400",
});

import Image from "next/image";
import localFont from "next/font/local";

const Solutions = ({ data }: any) => {
    const val = data.ventures.slice(0, 4);
    const [solutions, setSolutions] = useState(val);
    const [progress, setProgress] = useState(0);
    const [swiper, setSwiper] = useState<any>(0);

    return (
        <div className="pt-12">
            <div
                className={`max-w-7xl mx-auto grid  pb-10 text-center space-y-6`}
            >
                <div className={`text-4xl  lg:text-5xl ${myFont.className}`}>
                    <p>{`Our Ventures`}</p>
                </div>
                {/* <p className="md:text-lg max-w-4xl">
          {
            "Starting with the American Star Alliance in 2002, we have come a long way with multiple ventures in hospitality, cosmetology and IT staffing based in Indiana, Pennsylvania and New Jersey."
          }
        </p> */}
            </div>
            <div className="">
                {solutions && (
                    <Swiper
                        onSwiper={setSwiper}
                        spaceBetween={30}
                        centeredSlides={true}
                        speed={500}
                        autoplay={{
                            delay: 8000,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}
                        onAutoplayTimeLeft={(a, b, c) => {
                            setProgress(100 - c * 100);
                        }}
                        className="mySwiper"
                        slidesPerView={"auto"}
                    >
                        {solutions.map((solution: any, idx: any) => {
                            return (
                                <SwiperSlide
                                    key={idx}
                                    className="flex h-full !w-fit cursor-pointer"
                                >
                                    <Link href={solution.websiteUrl} target="_blank" key={solution.mainImage.url}>
                                        <div className="h-[70vh] relative !w-[85vw] group">
                                            {idx === swiper.activeIndex && (
                                                <div
                                                    style={{
                                                        width: progress + "%",
                                                    }}
                                                    className={`bg-secondary h-2 bottom-0 absolute z-10 `}
                                                />
                                            )}

                                            <Image
                                                src={solution.mainImage.url}
                                                className="h-full bg-center transition-all duration-300 brightness-[0.40] grayscale-[0.1] group-hover:brightness-[0.60]"
                                                objectFit="cover"
                                                layout="fill"
                                                alt={solution.title + " Image"}
                                                priority
                                            />

                                            <div className="absolute text-left top-[50%] left-[5%] z-50 text-white max-w-2xl">
                                                <h2 className="md:text-3xl text-xl pb-6">
                                                    {solution.ventureName}
                                                </h2>
                                                <p className="md:text-lg text-sm">{solution.about}</p>
                                            </div>
                                            <div className="absolute top-4 right-5 ">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={1.5}
                                                    stroke="#fff"
                                                    className="w-8 h-8 "
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                    </Link>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                )}
                <div className="flex justify-between items-center md:px-16 pt-10 px-4">
                    <div className="flex">
                        <button
                            // ref={prevRef}
                            onClick={() => swiper.slidePrev()}
                            className="md:mx-8 mx-2 hover:cursor-pointer"
                        >
                            <span className="sr-only">Previous Slide</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="56.932"
                                height="24.993"
                                viewBox="0 0 86.932 24.993"
                            >
                                <g
                                    id="Icon_feather-arrow-right"
                                    data-name="Icon feather-arrow-right"
                                    transform="translate(1.5 2.121)"
                                >
                                    <path
                                        id="Path_3"
                                        data-name="Path 3"
                                        d="M91.432,18H7.5"
                                        transform="translate(-7.5 -7.625)"
                                        fill="none"
                                        stroke="#071757"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="3"
                                    />
                                    <path
                                        id="Path_4"
                                        data-name="Path 4"
                                        d="M28.375,7.5,18,17.875,28.375,28.25"
                                        transform="translate(-18 -7.5)"
                                        fill="none"
                                        stroke="#071757"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="3"
                                    />
                                </g>
                            </svg>
                        </button>
                        <button
                            // ref={nextRef}
                            onClick={() => swiper.slideNext()}
                            className="justify-center items-center hover:cursor-pointer"
                        >
                            <span className="sr-only">Next Slide</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="56.932"
                                height="24.993"
                                viewBox="0 0 86.932 24.993"
                                className=""
                            >
                                <g
                                    id="Icon_feather-arrow-right"
                                    data-name="Icon feather-arrow-right"
                                    transform="translate(1.5 2.121)"
                                >
                                    <path
                                        id="Path_3"
                                        data-name="Path 3"
                                        d="M7.5,18H91.432"
                                        transform="translate(-7.5 -7.625)"
                                        fill="none"
                                        stroke="#071757"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="3"
                                    />
                                    <path
                                        id="Path_4"
                                        data-name="Path 4"
                                        d="M18,7.5,28.375,17.875,18,28.25"
                                        transform="translate(55.556 -7.5)"
                                        fill="none"
                                        stroke="#071757"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="3"
                                    />
                                </g>
                            </svg>
                        </button>
                    </div>
                    {/* w-fit ml-auto */}
                    <div className="flex gap-1 md:gap-2 justify-center items-center hover:cursor-pointer hover:text-white text-lg hover:bg-primary px-1 md:px-4 md:py-1 py-0.5 transition-colors duration-300 relative group/item bg-transparent text-primary border hover:border-secondary border-primary">
                        <div className=""></div>
                        <button className="">
                            <Link
                                href={"/ventures"}
                                className="text-xs md:text-lg whitespace-nowrap"
                            >
                                See all ventures
                            </Link>
                        </button>
                        <span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-3 h-3 "
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                                />
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Solutions;
