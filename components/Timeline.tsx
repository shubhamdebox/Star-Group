import localFont from "next/font/local";
import Image from "next/image";
const myFont = localFont({ src: "../public/nimbussandext.ttf" });
const techsans = localFont({
  src: "../public/Technique+Sans.otf",
  weight: "400",
});
import img from "../public/house2.webp";
import "aos/dist/aos.css";

const Timeline = () => {
  let data = [
    {
      image: img,
      year: "2001",
      title: "Dawn of American Star Alliance",
      content:
        "Marking the genesis of Star Group, our first venture, the American Star Alliance, came into being, setting the foundation for the many endeavours that followed."
    },
    {
      image: img,
      year: "2003",
      title: "Entering the Wellness Industry with StarGlow Salon",
      content:
        "Embracing the wellness industry, we launched the StarGlow Salon. This venture brought a new dimension to our diverse portfolio, promising holistic well-being for all.",
    },
    {
      image: img,
      year: "2006",
      title: "First Footprint in Commercial Real Estate",
      content:
        "Our journey into the realm of commercial real estate began with the acquisition of the Holiday Inn in Crawfordsville, IN. A momentous step that set the stage for future growth in this sector."
    },
    {
      image: img,
      year: "2012",
      title: "Holiday Inn - Greenfield, A New Landmark",
      content:
        "With the establishment of the Holiday Inn in Greenfield, IN, we continued our journey in the hospitality sector, further solidifying our presence in commercial real estate.",
    },
    {
      image: img,
      year: "2019",
      title: "Fairfield Inn - A Tribute to Excellence",
      content:
        "The Fairfield Inn in Greenfield, IN marked another milestone in our journey, embodying our commitment to providing premium services and fostering strong relationships with customers.",
    },
    {
      image: img,
      year: "2023",
      title: "The Nest - A New Home in Greenfield",
      content:
        "As our most recent venture, The Nest in Greenfield, IN, reaffirms our commitment to provide high-quality commercial real estate properties. It's more than a property; it's a home to many.",
    },
  ];

  return (
    <div className="max-w-7xl  mx-auto py-10 overflow-x-hidden">
      <div
        className={`grid justify-center items-center text-center pb-10 ${myFont.className}`}
        data-aos="fade-up"
      >
        <span className="text-4xl lg:text-5xl">Our Journey</span>
        <p
          className={`${techsans.className} py-5 max-w-5xl`}
        >{`Here's our a journey through time, tracing the remarkable milestones of Star Group. 
From our humble beginnings in 2002 with American Star Alliance, we have grown and diversified into a multifaceted conglomerate.`}</p>
      </div>
      <div className="md:flex md:flex-col space-y-5  md:space-y-12 px-5 md:px-20 lg:px-60 ">
        {data.map((val: any, index) => {
          return (
            <div className={` `} key={index}>
              <div
                className={`${
                  index % 2 == 0
                    ? "md:flex row  "
                    : "md:flex md:flex-row-reverse "
                }`}
                data-aos-duration="1500"
                data-aos={`${index % 2 == 0 ? "fade-left" : "fade-right"}`}
              >
                <div className="">
                  <Image
                    src={val.image}
                    alt={"Timeline Images"}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-[100%] md:w-[600px]"
                  ></Image>
                </div>
                <div className=" flex flex-col space-y-4 md:w-[70%] py-5 px-4">
                  <p
                    className={`font-bold ${techsans.className} md:text-2xl`}
                  >{` ${val.year}`}</p>
                  <p
                    className={`font-bold ${techsans.className} md:text-xl`}
                  >{` ${val.title}`}</p>
                  <p
                    className={`font-bold ${techsans.className}`}
                  >{` ${val.content} `}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;
