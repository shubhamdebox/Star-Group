import React from "react";

import localFont from "next/font/local";

const myFont = localFont({ src: '../public/nimbussandext.ttf' , weight:"400" } ,)

function Info({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className={`relative lg:overflow-hidden  bg-accent bg-primary/95`}>
      <div className="mx-auto max-w-7xl ">
        <div className="relative z-10 bg-accent pb-8 sm:pb-16 md:pb-40">
          <div className="">
            <main className="mx-auto max-w-7xl  ">
              <div className="text-center  mt-8 pt-16  w-11/12 mx-auto">
                <h1 className="text-2xl lg:text-3xl mb-4 font-bold tracking-tight text-white sm:text-4xl ">
                  <span className={`block xl:inline ${myFont.className}`}>{title}</span>{" "}
                 
                 
                </h1>
                <p className={`${myFont.className} mt-3 text-sm lg:text-lg text-white`}>
                {description}
                </p>
              </div>
            </main>
          </div>
        </div>
      </div>
     
    </div>
  );
}

export default Info;
