import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Router from "next/router";
import Link from "next/link";
import localFont from "next/font/local";
import logo from "../public/logo.svg";

const navigation = [
  { name: "About Us", href: "/about" },
  { name: "Ventures", href: "/ventures" },
  { name: "Contact Us", href: "/contact" },
];
export default function Navbar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  useEffect(() => {
    const doMagic = () => {
      setIsOpen(false);
    };

    Router.events.on("routeChangeStart", doMagic); // add listener

    return () => {
      Router.events.off("routeChangeStart", doMagic); // remove listener
    };
  }, []);

  return (
    <header
      className={`fixed w-full z-50 md:py-5 top-0 left-0  bg-primary/90 backdrop-blur-3xl`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 " aria-label="Top">
        <div className="w-full  sm:-mb-0 flex items-center justify-between">
          <div className="flex items-center justify-between w-full">
            <div className="mr-auto md:mx-0 ">
              <Link href="/">
                <div className="cursor-pointer">
                  <span className="sr-only">star-group</span>
                  <div className="hover:scale-110 duration-300 transition-transform">
                    {" "}
                    <Image
                      priority
                      height={100}
                      width={150}
                      className="lg:w-52 w-40 h-20"
                      alt="star-group Logo"
                      src={logo}
                    />
                  </div>
                </div>
              </Link>
            </div>
            {/* MD+ */}
            <div
              className={`hidden gap-8  text-center items-center relative lg:flex `}
            >
              {navigation.map((navItem) => (
                <>
                  <Link
                    key={navItem.name}
                    className="relative font-medium border-bordercolor focus:border-b-2 focus:ring-bordercolor text-white before:absolute before:-bottom-0 before:h-0.5 before:w-full before:scale-x-0 before:bg-bordercolor before:transition hover:before:scale-x-100"
                    href={navItem.href}
                  >
                    {navItem.name}
                  </Link>
                </>
              ))}
            </div>
          </div>
        </div>
        {/* PHONES -> TILL MD */}

        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex  lg:hidden absolute top-7 md:top-10 right-4 ml-auto text-white"
          aria-label="Menu Mobile Button"
        >
          <svg
            className="w-8 h-8 !fill-white"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } fixed transition-all top-0 left-0 w-full bg-black h-screen z-[100]  text-lg`}
        >
          <div className="flex justify-between">
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="absolute top-4 right-4 text-white text-5xl"
              aria-label="Menu Mobile Button"
            >
              &times;
            </button>
          </div>
          <ul className="flex flex-col justify-center items-center gap-4 h-full pb-10 text-white">
            {navigation.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-lg block font-bold `}
              >
                <span onClick={() => setIsOpen(false)}>{link.name}</span>
              </Link>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
