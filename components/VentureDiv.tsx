import client from "@/utils/apolloClient";
import { gql } from "@apollo/client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import bottom from "../public/bottom.svg"
import Upper from "../public/upper.png"
import localFont from "next/font/local";
const myFont = localFont({ src: '../public/nimbussandext.ttf' })
const techsans = localFont({ src: '../public/Technique+Sans.otf' , weight:"400" } ,)
export default function VentureDiv() {

    
    const [data, setdata] = useState<any>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getVentures() {
            const { data: ventures, error } = await client.query({
                query: gql`
                query MyQuery {
                    ventures {
                      ventureName
                      websiteUrl
                      venturestatus
                      mainImage {
                        url
                      }
                      about
                      location
                      title
                    }
                  }
              `,
            });
            if (!error) {
                setdata(ventures.ventures);
                setLoading(false);
                console.log();
            } else {
                alert(error);
            }
        }
        getVentures();
    }, [])


    return (
        <>
            <div className="max-w-7xl mx-auto py-10 md:py-20 px-7">
                {loading ? (
                    //loader pending
                    // <Loader />
                    <p>Loading More ....</p>
                ) : (
                    <>
                        {data.length > 0 ? (
                            <>
                                <div className=" transition-all duration-500">
                                    {data.map((val: any, index: any) => {
                                        return (
                                            <>
                                                <div className="py-3 md:py-10 w-[100%]  transition-all duration-300" key={val.location}>
                                                    <div className={`  ${index%2 == 0 ? "flex row" : "flex flex-row-reverse " } group-hover:scale-110 group-hover:scale-y-105 transition-all duration-300` }>
                                                        <Link href={val.websiteUrl} className="group relative block bg-gray-800  " target="_blank">
                                                            <div className="">
                                                            <Image
                                                                layout="fill"
                                                                alt="Developer"
                                                                src={val.mainImage.url}
                                                                className={`absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50 md:scale-y-95 group-hover:scale-x-100 group-hover:scale-y-100 group-hover:transition group-hover:delay-300 group-hover:duration-300 group-hover:ease-in-out ${val.venturestatus != "Active" ? "grayscale hover:grayscale-0" : "" } `}
                                                            />
                                                            </div>
                                                            {index%2 == 0 ? <><Image 
                                                                alt="Developer"
                                                                src={bottom}
                                                                className="hidden md:block absolute -right-5 -bottom-5 "
                                                                /></> : <> <Image 
                                                                alt="Developer"
                                                                src={Upper}
                                                                className="hidden absolute md:block -left-5 -top-5 "
                                                                /></>}
                                                            <div className="hidden md:block absolute right-0 p-5 text-white text-xl backdrop-blur-sm  z-20 ">
                                                                <p className={`${myFont.className}`}>Explore</p>
                                                            </div>
                                                            <div className="relative p-4 sm:p-6 lg:p-8 group-hover:transition group-hover:delay-300 group-hover:duration-300 group-hover:ease-in-out">
                                                                <div className="border-2 border-r-0 md:border-0 group-hover:border-2 py-2 px-3 group-hover:border-r-0 ">
                                                                    <div className="absolute top-6 backdrop-blur-sm">
                                                                        <p className={`text-xl font-medium uppercase tracking-widest text-lightblue ${myFont.className}`}>
                                                                        {val.venturestatus}
                                                                        </p>

                                                                        <p className={`text-xl font-bold text-white sm:text-2xl py-2 ${myFont.className}`}>{val.ventureName}</p>

                                                                        <p className={` text-white text-lg pt-5 ${techsans.className}`}>- {val.location}</p>
                                                                    </div>
                                                                    <div className="group-hover:transition group-hover:delay-300 group-hover:duration-300 group-hover:ease-in-out mt-32 group-hover:mt-32  group-hover:lg:mt-64 lg:w-[1000px] transition-all duration-300 ">
                                                                        <div
                                                                            className="md:translate-y-8 transform opacity-100 md:opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                                                                        >
                                                                             <p className={`text-xl py-3 font-bold text-white ${myFont.className}`}>
                                                                               {val.title}
                                                                            </p>
                                                                            <p className={`text-lg text-white ${techsans.className}`}>
                                                                               {val.about}
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    })}

                                </div>
                            </>
                        ) : (
                            <>
                                <div className="justify-center text-center">
                                    <span className="text-5xl"> <p>No Data found</p></span>
                                </div>
                            </>
                        )}
                    </>
                )}

            </div>
        </>
    )
}