import client from "@/utils/apolloClient";
import { gql } from "@apollo/client";
import localFont from "next/font/local";
import Image from "next/image";
import { Inter, Manrope, PT_Sans, Tinos } from 'next/font/google'
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import { useState } from "react";
const tinos = Tinos({ subsets: ["vietnamese"], weight: "400", style: ['italic'], })
const manrope = Manrope({ subsets: ['latin'], weight: "500" })
const pTSans = PT_Sans({
    subsets: [],
    weight: "400"
});
const myFont = localFont({ src: '../public/nimbussandext.ttf' , weight:"400" } ,)


export default function Hero({ data }: any) {

    const [imageurls,setimageurls] = useState(data.heroes[0].images[0].images);

    return (<>
        <div className="max-w-7xl mx-auto ">
            <div className="flex flex-col-reverse md:flex md:flex-row md:min-h-[500px] lg:min-h-screen">
                <div className="md:w-[60%] mx-7  grid justify-items-center content-center  ">
                    <div className=" grid  text-primary z-10">
                        <p className={`${myFont.className} text-xl md:text-3xl lg:text-4xl`}>{`Welcome to the Star Group`}</p>
                        <p className={`${myFont.className} text-2xl md:text-4xl lg:text-5xl pt-2 md:pt-5 `}>{`An amalgamation,`}</p>
                        <p className={`${myFont.className} text-2xl md:text-4xl lg:text-5xl py-2 `}>{` of flourishing endeavors`}</p>
                        {/* <div className="text-lg py-10 z-10">
                            <p className={`${pTSans.className}`}>{`Star group: Elevating Experiences in Hospitality,`}</p>
                            <p className={`${pTSans.className}`}>{`Cosmetology, and IT Staffing!`}</p>
                        </div> */}
                    </div>

                </div>
                <div className="md:w-[40%] grid justify-items-center md:justify-items-left content-center mt-1 md:mt-0">
                    <div className="grid grid-cols-2 mx-4 my-5">
                         {imageurls.map((val:any , index:any)=>{
                               return(<>
                                <div key={index}>
                                    <Image src={val.url} alt={""} width={300} height={300} className={`relative  z-20 
                                    ${index == 0 ? " absolute  left-24 top-10 z-30 md:top-0 md:left-0 md:z-0" : ""} 
                                    ${index == 1 ? " absolute hidden  md:block  md:bottom-20 md:right-44 z-30" : ""} 
                                    ${index == 2 ? " absolute bottom-5 md:bottom-10 md:left-32 z-10" : ""}
                                    ${index == 3 ? " absolute md:bottom-32 md:right-10 z-10" : ""}
                                    `}/>
                                </div>
                               </>)
                         })}
                         
                    </div>
                </div>
            </div>
        </div>
    </>)
}

