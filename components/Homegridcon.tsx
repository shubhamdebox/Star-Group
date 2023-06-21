import localFont from 'next/font/local';

const myFont = localFont({ src: '../public/nimbussandext.ttf', weight: "400" },)
const techsans = localFont({ src: '../public/Technique+Sans.otf', weight: "400" },)

export default function homegridcon() {

    let data = [
        { title: "History", description: "Star Group Company has a rich history of success spanning multiple industries. Founded in 1995, the company began as a small cosmetology retail outlet, offering top-quality beauty products and services......." },
        { title: "Vision", description: "At Holiday Inn Express, our vision is to be  the leading choice for budget-conscious travelers worldwide. We envision a future where every guest experiences exceptional service, comfort, and convenience without compromising on affordability......." },
    ]

    let data2 = [
        { title: "Mission", description: "At Star Group Company, our mission is to enhance lives and empower individuals through our diverse range of services........" },
        { title: "Values", description: "our core values serve as the foundation of our success and guide our actions across all our ventures. Integrity is at the forefront, as we prioritize honesty, transparency, and ethical conduct in all our interactions........." },
    ]

    return (
        <>
            <div className='bg-[#E1EBED] lg:min-h-screen '>
                <div className="max-w-5xl mx-auto ">
                    <div className="md:grid md:grid-cols-2 grid px-5 py-10  lg:py-20 gap-5 ">

                        <div className="flex flex-col space-y-5 " >


                            {data.map((data: any, index: any) => (
                                <>
                                    <div className="relative -z-0  group bg-primary/95 p-4 border-2 border-black shadow-[6px_8px_0px_0px_#1a202c]  text-white px-5 py-10 md:px-10 md:py-20" key={data.title}>

<p className={`text-3xl md:text-4xl ${myFont.className} `}>{data.title}</p>

<div className='w-28 -z-10 group-hover:w-14 h-6 bg-bordercolor absolute left-10 md:left-20 md:group-hover:-translate-x-9 group-hover:-translate-x-5 top-[55px] md:top-[100px]  duration-300 '></div>
<div className="py-10 md:text-lg  group-hover:translate-x-2 duration-150">
    <p className={`${techsans.className}`}>{data.description}</p>
</div>

</div>
                                </>
                            ))}
                        </div>

                        <div className="flex flex-col space-y-5">{data2.map((data: any) => (
                            <>
                                <div className="relative -z-0  group bg-primary/95 p-4 border-2 border-black shadow-[6px_8px_0px_0px_#1a202c]  text-white px-5 py-10 md:px-10 md:py-20" key={data.title}>

                                    <p className={`text-3xl md:text-4xl ${myFont.className} `}>{data.title}</p>

                                    <div className='w-28 -z-10 group-hover:w-14 h-6 bg-bordercolor absolute left-10 md:left-20 md:group-hover:-translate-x-9 group-hover:-translate-x-5 top-[55px] md:top-[100px]  duration-300 '></div>
                                    <div className="py-10 md:text-lg  group-hover:translate-x-2 duration-150">
                                        <p className={`${techsans.className}`}>{data.description}</p>
                                    </div>

                                </div>
                            </>
                        ))}</div>
                    </div>
                </div>
            </div>
        </>
    )
}