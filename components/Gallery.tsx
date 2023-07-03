import { motion } from "framer-motion";
import localFont from "next/font/local";
import React, { useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
const myFont = localFont({ src: "../public/nimbussandext.ttf" });

const Gallery = ({ value }: any) => {
  const [data, setData] = useState(value.galleries);
  const [active, setActive] = useState("");
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="pb-10">
      {/* <div className="max-w-7xl mx-auto grid justify-center text-center pb-10">
        <span
          className={`${myFont.className} text-4xl lg:text-5xl `}
        >{`Gallery`}</span>
      </div>
      <div className=" cursor-pointer pb-5 max-w-7xl mx-auto px-3 lg:px-10">
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry columnsCount={3} gutter="5px">
            {data &&
              data.map((image: any, i: any) => (
                <div key={i} className="relative group overflow-hidden ">
                  <motion.img
                    key={active}
                    initial="initial"
                    animate="animate"
                    transition={{
                      duration: 0.5,
                      delay: i * 0.3,
                      ease: "easeInOut",
                    }}
                    variants={{
                      initial: { opacity: 0, translateX: -50, translateY: -50 },
                      animate: { opacity: 1, translateX: 0, translateY: 0 },
                    }}
                    src={image.image.url}
                    alt="Home Images"
                    style={{ width: "100%", display: "block", opacity: 50 }}
                    onClick={() => {
                      setIsOpen(true);
                      setPhotoIndex(i);
                    }}
                    className="brightness-[0.6] md:brightness-100 md:group-hover:brightness-[0.4] duration-300 "
                  />
                  <div className="absolute md:translate-y-10 bottom-0 text-white duration-300  group-hover:block group-hover:-translate-y-5 text-2xl font-bold left-4 ">
                    <span>{image.venture.ventureName}</span>
                  </div>
                </div>
              ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>

      {data && isOpen && (
        <Lightbox
          imageTitle={data[photoIndex].venture.ventureName}
          mainSrc={data[photoIndex].image.url}
          onImageLoad={() => {
            window.dispatchEvent(new Event("resize"));
          }}
          onCloseRequest={() => {
            setIsOpen(false);
          }}
          nextSrc={data[(photoIndex + 1) % data.length].image.url}
          prevSrc={data[(photoIndex + data.length - 1) % data.length].image.url}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + data.length - 1) % data.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % data.length)
          }
        />
      )} */}
    </div>
  );
};

export default Gallery;
