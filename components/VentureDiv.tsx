import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import bottom from "../public/bottom.svg";
import Upper from "../public/upper.png";
import localFont from "next/font/local";
import { useRouter } from "next/router";

const myFont = localFont({ src: "../public/nimbussandext.ttf" });
const techsans = localFont({
  src: "../public/Technique+Sans.otf",
  weight: "400",
});
export default function VentureDiv({ value }: any) {
  const router = useRouter();
  const { category } = router.query;
  const [data, setdata] = useState<any>(value.ventures);

  //get unique category for buttons.
  const categories: any[] = [];
  value.ventures.forEach((element: any) => {
    if (!categories.includes(element?.category?.name)) {
      categories.push(element?.category?.name);
    }
  });

  useEffect(() => {
    if (category == "All" || category == null) {
      setdata(value.ventures);
    } else {
      const a = value.ventures.filter(
        (val: { category: any; ventureName: string }) =>
          val?.category?.name === category
      );
      setdata(a);
    }
  }, [category]);

  return (
    <>
      <div className="max-w-7xl mx-auto py-10 lg:py-20 px-3 lg:px-10">
        <div></div>
        <div className="flex  overflow-x-scroll lg:overflow-auto ">
          <button
            className={`${
              category == null || category == "All"
                ? "bg-primary/90  text-white "
                : " "
            } text-sm transition-colors duration-300 hover:bg-primary/90 hover:text-white   border-2 mx-3 px-4 md:px-6 md:text-lg mb-5 `}
            onClick={() =>
              router.push(
                {
                  pathname: "/ventures",
                  query: { category: "All" },
                },
                undefined,
                { shallow: true }
              )
            }
          >
            {"All"}
          </button>
          {categories.map((e: any) => {
            return (
              <>
                <button
                  className={`${
                    category == e ? "bg-primary/90  text-white " : " "
                  }transition-colors duration-300 hover:bg-primary/90  hover:text-white py-2 border-2 mx-3 px-6 md:text-lg text-sm mb-5`}
                  onClick={() =>
                    router.push(
                      {
                        pathname: "/ventures",
                        query: { category: e },
                      },
                      undefined,
                      { shallow: true }
                    )
                  }
                >
                  {e}
                </button>
              </>
            );
          })}
        </div>
        <>
          {data.length > 0 ? (
            <>
              <div className="hidden md:block">
                {data.map((val: any, index: any) => {
                  return (
                    <div className="py-3 lg:py-10 " key={index}>
                      <div
                        className={`  ${
                          index % 2 == 0 ? "flex row" : "flex flex-row-reverse "
                        } group-hover:scale-110 group-hover:scale-y-105  `}
                      >
                        <Link
                           href={
                            val.venturestatus != "Active" ? "#" : val.websiteUrl
                          }
                          className={`group relative block bg-gray-800  ${
                            val.venturestatus != "Active" ? "cursor-default" : "cursor-pointer"
                          }`}
                          target="_blank"
                        >
                          <div className="">
                            <Image
                              layout="fill"
                              alt="Developer"
                              src={val.mainImage.url}
                              className={`brightness-[0.40] lg:brightness-100 absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50 lg:scale-y-95 group-hover:scale-x-100 group-hover:scale-y-100 group-hover:transition group-hover:delay-300 group-hover:duration-300 group-hover:ease-in-out ${
                                val.venturestatus != "Active"
                                  ? "grayscale hover:grayscale-0"
                                  : ""
                              } `}
                            />
                          </div>
                          {index % 2 == 0 ? (
                            <>
                              <Image
                                alt="Developer"
                                src={bottom}
                                className="hidden lg:block absolute -right-5 -bottom-5 "
                              />
                            </>
                          ) : (
                            <>
                              {" "}
                              <Image
                                alt="Dev"
                                src={Upper}
                                className="hidden absolute lg:block -left-5 -top-5 "
                              />
                            </>
                          )}
                          <div className="hidden lg:block absolute top-3 lg:top-5  right-4 text-white text-xl   z-20 ">
                            <p className={`${myFont.className} uppercase`}>
                              Explore
                            </p>
                          </div>
                          <div className="relative p-4 sm:p-6 lg:p-8 group-hover:transition group-hover:delay-300 group-hover:duration-300 group-hover:ease-in-out">
                            <div className="relative border-r-0 lg:border-0 group-hover:border-2 py-2 px-3 group-hover:border-r-0 lg:group-hover:border-t-0">
                              <div className="w-[2%]  lg:border-2 border-r-transparent  border-l-transparent absolute border-t-transparent -top-[2px] left-[-0.17rem] lg:hidden group-hover:block"></div>
                              <div className="absolute  lg:-top-3 left-5  ">
                                <p
                                  className={`text-xl font-medium  tracking-widest text-lightblue ${myFont.className}`}
                                >
                                  {val.venturestatus}
                                </p>

                                <p
                                  className={`text-xl font-bold text-white sm:text-2xl py-2 ${myFont.className}`}
                                >
                                  {val.ventureName}
                                </p>

                                <p
                                  className={` text-white text-lg pt-5 ${techsans.className}`}
                                >
                                  - {val.location}
                                </p>
                              </div>
                              <div className=" mt-32 group-hover:mt-32  group-hover:lg:mt-64 xl:w-[1000px] transition-all duration-300 ">
                                <div className="lg:translate-y-8 transform opacity-100 lg:opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                                  <p
                                    className={`text-xl py-3 font-bold text-white ${myFont.className}`}
                                  >
                                    {val.title}
                                  </p>
                                  <p
                                    className={`text-sm lg:text-lg text-white ${techsans.className}`}
                                  >
                                    {val.about}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="md:hidden">
                {data.map((val: any, index: any) => {
                  return (
                    <div className=" lg:py-10 border-2 border-black/60 my-4" key={index}>
                      <Link
                        href={
                          val.venturestatus != "Active" ? "#" : val.websiteUrl
                        }
                        className=""
                        target="_blank"
                      >
                        <>
                          <div className="w-full pb-3  ">
                            <Image
                              width={0}
                              height={0}
                              sizes="100vw"
                              style={{ width: "100%", height: "auto" }}
                              src={val.mainImage.url}
                              alt={""}
                            />
                          </div>

                          <div className="relative   py-2 px-3 ">
                            <div className="absolute  lg:-top-2  ">
                              {val.venturestatus != "Active" ? (
                                <>
                                  {" "}
                                  <p
                                    className={`text-xl font-medium  tracking-widest text-lightblue ${myFont.className}`}
                                  >
                                    {val.venturestatus}
                                  </p>
                                </>
                              ) : (
                                <></>
                              )}

                              <p
                                className={`text-xl font-bold text-black sm:text-2xl py-2 ${myFont.className}`}
                              >
                                {val.ventureName}
                              </p>

                              <p
                                className={` text-black text-lg  ${techsans.className}`}
                              >
                                - {val.location}
                              </p>
                            </div>
                            <div
                              className={`${
                                val.venturestatus != "Active"
                                  ? "mt-24"
                                  : "mt-16"
                              }  group-hover:mt-32  group-hover:lg:mt-64 xl:w-[1000px] transition-all duration-300 `}
                            >
                              <div className="lg:translate-y-8 transform opacity-100 lg:opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                                <p
                                  className={`text-xl py-3 font-bold text-black ${myFont.className}`}
                                >
                                  {val.title}
                                </p>
                                <p
                                  className={`text-sm lg:text-lg text-black ${techsans.className}`}
                                >
                                  {val.about}
                                </p>
                              </div>
                            </div>
                          </div>
                        </>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </>
          ) : (
            <>
              <div className="justify-center text-center">
                <span className="text-5xl">
                  {" "}
                  <p>No Data found</p>
                </span>
              </div>
            </>
          )}
        </>
      </div>
    </>
  );
}
