import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Router from "next/router";
import Link from "next/link";
import localFont from "next/font/local";
import logo from "../public/logo.svg";

import Hamburger from "hamburger-react";
import NavItem from "./Navitem";

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
      className={`fixed w-full z-50 md:py-5 top-0 left-0  bg-primary/90 backdrop-blur-3xl shadow-xl`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 " aria-label="Top">
        <div className="w-full sm:-mb-0 flex items-center justify-between sm:px-6 lg:px-0">
          <div className="flex items-center justify-between w-full">
            <div className="mr-auto md:mx-0 ">
              <Link href="/">
                <div className="cursor-pointer">
                  
                  <div className="hover:scale-110 duration-300 transition-transform py-4 flex justify-between">
                    {" "}
                    <Image
                      priority
                      height={100}
                      width={150}
                      alt="StarGroup logo"
                      src={logo}
                    />
                  </div>
                </div>
              </Link>
            </div>
            {/* MD+ */}
            <div className="hidden gap-8 text-center items-center relative lg:flex ">
             
              {navigation.map((navItem) => (
                <Link
                  key={navItem.name}
                  className="relative font-medium border-bordercolor focus:border-b-2 focus:ring-bordercolor text-white before:absolute before:-bottom-0 before:h-0.5 before:w-full before:scale-x-0 before:bg-bordercolor before:transition hover:before:scale-x-100"
                  href={navItem.href}
                >
                  {navItem.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="lg:hidden block">
            <Hamburger
              toggled={isOpen}
              toggle={setIsOpen}
              size={30}
              rounded
              color="white"
            />
          </div>
        </div>
        <div>
        <ul
          id="mobile_nav"
          className={`transition-all duration-300 absolute  bg-primary text-white flex  ${
            isOpen
              ? "visible opacity-1 translate-y-0"
              : "invisible opacity-0 translate-y-10"
          } flex-col ${
            scrolled ? "top-24" : "top-16"
          } md:top-24 w-full lg:hidden shadow-md left-0 py-3 `}
        >
          <div className="w-11/12 mx-auto">
           

            {/* <hr className="my-2" /> */}
            <ul className="py-2 font-bold text-sm md:text-base flex flex-col">
              <NavItem
                onClick={() => setIsOpen(false)}
                title="About Us"
                link="/about"
                active={router.pathname === "/about"}
              />
              <NavItem
                onClick={() => setIsOpen(false)}
                title="Ventures"
                link="/ventures"
                active={router.pathname === "/ventures"}
              />
              <NavItem
                onClick={() => setIsOpen(false)}
                title="Contact Us"
                link="/contact"
                active={router.pathname === "/contact"}
              />
            </ul>
          </div>
          {/* <NavItem title="Home" link="/" active={router.pathname === "/"} /> */}
        </ul>
        </div>
      </nav>
    </header>
  );
}
