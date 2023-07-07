import localFont from "next/font/local";
import intergrity from "../public/integrity.svg"
import respect from "../public/respect.svg"
import efficiency from "../public/efficiency.svg"
import innovation from "../public/innovation.svg"
import teamwork from "../public/teamwork.svg"
import Image from "next/image";
const myFont = localFont({ src: "../public/nimbussandext.ttf", weight: "400" });
const techsans = localFont({
  src: "../public/Technique+Sans.otf",
  weight: "400",
});

export default function homegridcon() {
  let data = [
    {
      icon : intergrity,
      title: "Integrity",
      description:
        "Upholding our ethical standards, maintaining transparency in our operations, and providing professional, honest, and reliable service.",
    },
    {
      icon : respect,
      title: "Respect",
      description:
        "Treating all our stakeholders - including colleagues, clients, and the public - with kindness, understanding, and tact.",
    },
    {
      icon : efficiency,
      title: "Efficiency",
      description:
        "Striving for optimal performance and reliability by improving processes, meeting commitments, and achieving results in a timely manner.",
    },
  ];

  let data2 = [
    {
      icon : innovation,
      title: "Innovation and Adaptability",
      description:
        "Utilizing emerging technologies and data to motivate smarter decision-making and responding swiftly to opportunities and obstacles alike.",
    },
    {
      icon : teamwork,
      title: "Teamwork and Perseverance",
      description:
        "Collaborating effectively for mutual success, fostering skill development, and displaying resilience in the face of difficulty.",
    },
  ];

  return (
    <>
      <div className=" lg:min-h-screen ">
        <div className="max-w-5xl mx-auto px-5   lg:py-14">
          <div
            className={`pb-8 text-center text-4xl  lg:text-5xl ${myFont.className}`}
          >
            
            <p>{`Our Core Values`}</p>
          </div>
          <p className="pb-8 md:text-xl text-center">
            {
              "At Star Group, we're driven by more than just our business pursuits.   We operate under a set of core values that shape our decisions, guide our operations, and cultivate our company culture."
            }
          </p>
          <div className="md:grid md:grid-cols-2 grid gap-5 ">
            <div className="flex flex-col">
              {data.map((data: any, index: any) => (
               
                <div
                  className="relative -z-0  group p-4  text-black px-5 py-6"
                  key={data.title}
                > 

                  <div className="relative">
                    <div className="flex">
                      <div className="mx-2">
                  <Image src={data.icon} alt={"icons"} className=""/>
                  </div>
                    <p className={`text-xl md:text-3xl font-bold`}>
                      {data.title}
                    </p>
                    </div>
                    <div className="w-20 -z-10 group-hover:w-28 h-1.5 bg-bordercolor absolute -top-3 duration-300 /"></div>
                    <div className="pt-6  text-sm md:text-lg  group-hover:translate-x-1 duration-150">
                      <p className={`${techsans.className}`}>
                        {data.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col">
              {data2.map((data: any, index: any) => (
               <div
               className="relative -z-0  group p-4  text-black px-5 py-6"
               key={data.title}
             > 

               <div className="relative">
                 <div className="flex">
                   <div className="mx-2">
               <Image src={data.icon} alt={"icons"} className=""/>
               </div>
                 <p className={`text-xl md:text-3xl font-bold`}>
                   {data.title}
                 </p>
                 </div>
                 <div className="w-20 -z-10 group-hover:w-28 h-1.5 bg-bordercolor absolute -top-3 duration-300 /"></div>
                 <div className="pt-6 text-sm md:text-lg  group-hover:translate-x-1 duration-150">
                   <p className={`${techsans.className}`}>
                     {data.description}
                   </p>
                 </div>
               </div>
             </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
