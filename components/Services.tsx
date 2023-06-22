
import { Inter, Manrope, PT_Sans, Tinos } from 'next/font/google'
import hotel from "../public/hotel.svg";
import group from "../public/Group.svg";
import more from "../public/more.svg";
import Image from 'next/image';
import dynamic from 'next/dynamic';
import AOS from 'aos';
import 'aos/dist/aos.css';
import localFont from 'next/font/local';
const myFont = localFont({ src: '../public/nimbussandext.ttf' , weight:"400" } ,)

const CountUp = dynamic(() => import('react-countup'), { ssr: false });


export default function Services() {

    let data = [
        { logo: group, title: "Customers Served", value: 2, symbol:"M" , subtitle: "and counting..." },
        { logo: hotel, title: "Total hotel area", value: 185, symbol:"K" , subtitle: "Square feet and growing..." },
        { logo: more, title: "More than ", value: "22",  symbol:"+" , subtitle: "years of excellence" },
    ]

    return (
        <>

            <div className='bg-lightwhite  text-primary z-10 py-5 '  >
            
                <div className="max-w-7xl mx-auto px-10">
                    <div className='grid md:grid-cols-3 gap-8 justify-center text-center ' data-aos="fade-up" >
                        {data.map((value: any) => {
                            return (
                                <>
                                    <div  key={value.title}>
                                        <div className='py-10 grid justify-center text-center'>
                                            <Image src={value.logo} alt={'Group of peoples'} className='h-14 '/>
                                        </div>
                                       
                                        <span className={`text-2xl lg:text-4xl ${myFont.className}`}>{value.title}</span>

                                        <div className=''>
                                            <p className={`text-5xl lg:text-6xl py-4 ${myFont.className}`}><CountUp end={value?.value} duration={10}/>{value.symbol}</p>
                                            <p className={`italic text-sm ${myFont.className}`}>{value.subtitle}</p>
                                        </div>
 
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}