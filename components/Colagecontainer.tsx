import { Inter, Manrope, PT_Sans, Tinos } from "next/font/google";
import localFont from "next/font/local";

const tinos = Tinos({
  subsets: ["vietnamese"],
  weight: "400",
  style: ["italic"],
});
const myFont = localFont({ src: "../public/nimbussandext.ttf" });
const techsans = localFont({
  src: "../public/Technique+Sans.otf",
  weight: "400",
});

export default function Colagecontainer() {
  let data = [
    {
      title: "Integrity",
      description:
        "Upholding our ethical standards, maintaining transparency in our operations, and providing professional, honest, and reliable service.",
    },
    {
      title: "Respect",
      description:
        "Treating all our stakeholders - including colleagues, clients, and the public - with kindness, understanding, and tact.",
    },
    {
      title: "Efficiency",
      description:
        "Striving for optimal performance and reliability by improving processes, meeting commitments, and achieving results in a timely manner.",
    },
    {
      title: "Teamwork and Perseverance",
      description:
        "Collaborating effectively for mutual success, fostering skill development, and displaying resilience in the face of difficulty.",
    },
    {
      title: "Innovation and Adaptability",
      description:
        "Utilizing emerging technologies and data to motivate smarter decision-making and responding swiftly to opportunities and obstacles alike.",
    },
  ];

  let data2 = [
    {
      title: "Vision",
      description:
        "We envision a future where Star Group is synonymous with exceptional services. Our focus is on building lasting relationships with customers and partners while continuously enhancing our offerings. Our pursuit of a customer-centric approach guides every decision we make, aiming to deliver a standout experience at every touchpoint.",
    },
    {
      title: "Mission",

      description:
        "Our mission at Star Group is to be your premier choice in the realm of commercial real estate, IT solutions, and wellness. Drawing from our intimate understanding of local markets, we're dedicated to providing superior service and results. Upholding ethical conduct and promoting transparency lie at the heart of our business, guiding us in our mission to serve you better.",
    },
  ];

  return (
    <>
      <div className="max-w-5xl mx-auto ">
        <div className="md:grid md:grid-cols-2 grid px-5 md:px-10 py-10 lg:py-20 gap-5 ">
          <div className="flex flex-col space-y-5 ">
            <div className="bg-secondary p-4  border-2 shadow-[6px_8px_0px_0px_#1a202c]  z-10">
              <p className={`text-2xl lg:text-3xl pb-5 ${myFont.className} `}>
                Core Values
              </p>
              {data.map((data: any, index: any) => (
                <div key={data.title}>
                  <span className={` text-lg lg:text-xl font-bold`}>
                    {data.title}
                  </span>
                  <div className="py-2">
                    {/* <span className={` text-2xl ${tinos.className}`}>{data.title2}</span> */}
                    <div className="">
                      <p className={`${techsans.className} lg:text-base px-4`}>
                        {data.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col space-y-5">
            {data2.map((data: any) => (
              <div
                className="bg-secondary p-4 border-2 shadow-[6px_8px_0px_0px_#1a202c] z-10"
                key={data.title}
              >
                <span className={`text-2xl lg:text-3xl ${myFont.className}`}>
                  {data.title}
                </span>
                <div className="py-4">
                  <div className="py-3">
                    <p className={`${techsans.className} lg:text-base`}>
                      {data.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
