
import { Inter,Manrope,PT_Sans,Tinos } from 'next/font/google'
import localFont from 'next/font/local';

const tinos = Tinos({subsets:["vietnamese"],  weight: "400" ,style: [ 'italic'],})
const myFont = localFont({ src: '../public/nimbussandext.ttf' })
const techsans = localFont({ src: '../public/Technique+Sans.otf' , weight:"400" } ,)

export default function Colagecontainer() {

    let data = [
        {title:"Integrity" , description : "Upholding our ethical standards, maintaining transparency in our operations, and providing professional, honest, and reliable service."},
        {title:"Respect" , description : "Treating all our stakeholders - including colleagues, clients, and the public - with kindness, understanding, and tact."},
        {title:"Efficiency" , description : "Striving for optimal performance and reliability by improving processes, meeting commitments, and achieving results in a timely manner."},
        {title:"Teamwork and Perseverance" , description : "Collaborating effectively for mutual success, fostering skill development, and displaying resilience in the face of difficulty."},
        {title:"Innovation and Adaptability" , description : "Utilizing emerging technologies and data to motivate smarter decision-making and responding swiftly to opportunities and obstacles alike."},
        
    ]

    let data2 = [
        { title: "Vision", title2: "TITLE2", description: "Our vision is to offer premium products & services while delivering market leading results. We believe in creating strong relationships with our customers and partners, providing the most dynamic and holistic solutions, and constantly innovating our products and services to meet the needs and wants of our clients. We strive to pursue a customer-centric approach to ensure a great experience every time" },
        { title: "Mission", title2: "TITLE2", description: "Our mission is to be your first choice for high-quality commercial real estate properties, IT services and wellness. We leverage our deep knowledge of our local markets to consistently deliver the best service & results. We honor our commitment to ethical conduct and strive for transparency in all our business dealings" },
    ]

    return (
        <>
            <div className="max-w-5xl mx-auto ">
                <div className="md:grid md:grid-cols-2 grid px-5 md:px-3 py-20 gap-5 ">

                    <div className="flex flex-col space-y-5 " >
                    <div className="bg-secondary p-4  border-2 shadow-[6px_8px_0px_0px_#1a202c]  z-10" >
                        <p className={`text-3xl pb-5 ${myFont.className} `}>Core Values</p>
                        {data.map((data: any , index:any) => (
                            <>
                                    <div key={data.title}>
                                    <span className={` text-xl ${myFont.className}`}  >{index + 1} {`)`}  {data.title}</span>
                                    <div className="py-2">
                                        {/* <span className={` text-2xl ${tinos.className}`}>{data.title2}</span> */}
                                        <div className="">
                                            <p className={`${techsans.className} px-4`}>{data.description}</p>
                                        </div>
                                    </div>
                                    </div>
                               
                            </>
                        ))}
                         </div>
                    </div>
                    <div className="flex flex-col space-y-5">{data2.map((data: any) => (
                            <>
                                <div  className="bg-secondary p-4 border-2 shadow-[6px_8px_0px_0px_#1a202c] z-10" key={data.title}>
                                    <span className={` text-3xl ${myFont.className}`}>{data.title}</span>
                                    <div className="py-4">
                                        <span className={` text-2xl ${tinos.className}`}>{data.title2}</span>
                                        <div className="py-3">
                                            <p className={`${techsans.className}`}>{data.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ))}</div>
                </div>
            </div>
        </>
    )
}