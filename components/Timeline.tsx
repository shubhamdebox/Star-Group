import localFont from 'next/font/local'
import Image from 'next/image'
const myFont = localFont({ src: '../public/nimbussandext.ttf' })
const techsans = localFont({ src: '../public/Technique+Sans.otf', weight: "400" },)
import img from "../public/house2.webp"
import 'aos/dist/aos.css';

const Timeline = () => {
 
    let data = [
        { image: img, year: "2002", title: "Birth of American Star Alliance", content: "American Star Alliance was established, marking our initial foray into the IT sector, with a special emphasis on manpower consultancy." },
        { image: img, year: "2006", title: "Acquisition of our First Hotel - The Holiday Inn, Crawfordsville", content: "Our journey into the hospitality industry began with the acquisition of the Holiday Inn in Crawfordsville." },
        { image: img, year: "2009", title: "Establishment of the Holiday Inn Express, Crawfordsville", content: "The year saw the ground-up construction of the Holiday Inn Express in Crawfordsville, expanding our footprint in the hotel industry." },
        { image: img, year: "2012", title: "Launch of the Holiday Inn Express, Greenfield ", content: "Continuing our expansion, the Holiday Inn Express in Greenfield was set up." },
        { image: img, year: "2019", title: "Arrival of Fairfield Inn by Marriott", content: "Adding to our diversifying hotel portfolio, the Fairfield Inn by Marriott was established.        " },
        { image: img, year: "2023", title: "Unveiling of The Nest", content: "The Nest, our latest venture, opened its doors, signifying the ongoing growth of the Star Group's hotel portfolio." },
    ]


    return (
        <div className='max-w-7xl  mx-auto py-10 overflow-x-hidden' >
            <div className={`grid justify-center items-center pb-10 ${myFont.className}`} data-aos="fade-up"  >
                <span className='text-4xl lg:text-5xl'>Timeline</span>
            </div>
            <div className='md:flex md:flex-col space-y-5  md:space-y-12 px-5 md:px-20 lg:px-60 '  >
                {data.map((val: any, index) => {
                    return (<>
                        <div className={` `} key={index}>
                            <div className={`${index % 2 == 0 ? "md:flex row  " : "md:flex md:flex-row-reverse "}`} 
                            data-aos-duration="1500" data-aos={`${index % 2 == 0 ?"fade-left" : "fade-right"}` }>
                                <div className=''>
                                    <Image src={val.image} alt={'Timeline Images'} width={0}
                                        height={0}
                                        sizes="100vw"
                                        className='w-[100%] md:w-[600px]'
                                         ></Image>
                                </div>
                                <div className=' flex flex-col space-y-4 md:w-[70%] py-5 px-4'>
                                    <p className={`font-bold ${techsans.className} md:text-2xl`}>{` ${val.year}`}</p>
                                    <p className={`font-bold ${techsans.className} md:text-xl`}>{` ${val.title}`}</p>
                                    <p className={`font-bold ${techsans.className}`}>{` ${val.content} `}</p>
                                </div>
                            </div>
                        </div>
                    </>)
                })}
            </div>
        </div>
    )
}

export default Timeline