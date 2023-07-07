import { Tinos } from "next/font/google";
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
  // let data = [
  //     {title:"Integrity" , description : "Upholding our ethical standards, maintaining transparency in our operations, and providing professional, honest, and reliable service."},
  //     {title:"Respect" , description : "Treating all our stakeholders - including colleagues, clients, and the public - with kindness, understanding, and tact."},
  //     {title:"Efficiency" , description : "Striving for optimal performance and reliability by improving processes, meeting commitments, and achieving results in a timely manner."},
  //     {title:"Teamwork and Perseverance" , description : "Collaborating effectively for mutual success, fostering skill development, and displaying resilience in the face of difficulty."},
  //     {title:"Innovation and Adaptability" , description : "Utilizing emerging technologies and data to motivate smarter decision-making and responding swiftly to opportunities and obstacles alike."},

  // ]

  let data = [
    {
      logo: (props: any) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 576 512"
          className="fill-white h-6 mx-2 my-1"
        >
          <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" />
        </svg>
      ),
      title: "Vision",
      title2: "",
      description:
        "Our vision is to offer premium products & services while delivering market leading results. We believe in creating strong relationships with our customers and partners, providing the most dynamic and holistic solutions, and constantly innovating our products and services to meet the needs and wants of our clients. We strive to pursue a customer-centric approach to ensure a great experience every time",
    },
  ];

  let data2 = [
    {
      logo: (props: any) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 512 512"
          className="fill-white h-6 mx-2 my-1"
        >
          <path d="M448 256A192 192 0 1 0 64 256a192 192 0 1 0 384 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 80a80 80 0 1 0 0-160 80 80 0 1 0 0 160zm0-224a144 144 0 1 1 0 288 144 144 0 1 1 0-288zM224 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
        </svg>
      ),
      title: "Mission",
      title2: "",
      description:
        "Our mission is to be your first choice for high-quality commercial real estate properties, IT services and wellness. We leverage our deep knowledge of our local markets to consistently deliver the best service & results. We honor our commitment to ethical conduct and strive for transparency in all our business dealings",
    },
  ];

  return (
    <>
      <div className="max-w-5xl mx-auto ">
        <div className="md:grid md:grid-cols-2 grid px-5 md:px-10 py-10 lg:py-20 gap-5 ">
          <div className="flex flex-col space-y-5 ">
            <div className="bg-primary/90 text-white p-4     z-10 hover:scale-105 transition-all duration-300 ease-in-out">
              {data.map((data: any, index: any) => (
                <div key={data.title} className="h-64">
                  <div className="flex ">
                    <p> {data.logo()}</p>
                    <p
                      className={`text-2xl lg:text-3xl pb-5 ${myFont.className} `}
                    >
                      {data.title}
                    </p>
                  </div>
                  {/* <span className={` text-lg lg:text-xl ${myFont.className}`}  >{index + 1} {`)`}  </span> */}
                  <span className={`text-xl lg:text-2xl ${tinos.className}`}>
                    {data.title2}
                  </span>
                  <div className="py-2">
                    {/* <span className={` text-2xl ${tinos.className}`}>{data.title2}</span> */}
                    <div className="">
                      <p
                        className={`${techsans.className} text-sm lg:text-base `}
                      >
                        {data.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col space-y-5 ">
            {data2.map((data: any) => (
              <div
                className="bg-primary/90 h-72  text-white p-4 z-10 hover:scale-105 transition-all duration-300 ease-in-out"
                key={data.title}
              >
                <div className="flex">
                 <p> {data.logo()}</p>
                <span className={`text-2xl lg:text-3xl ${myFont.className}`}>
               
                  {data.title}
                </span>
                </div>
                <div className="py-4">
                  <span className={`text-xl lg:text-2xl ${tinos.className}`}>
                    {data.title2}
                  </span>
                  <div className="py-3">
                    <p className={`${techsans.className} text-sm lg:text-base`}>
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
