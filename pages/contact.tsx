// import PageHeader from "@/components/reusable/PageHeader";
import React, { useRef, useState, useEffect } from "react";
import { toast, Toaster } from "react-hot-toast";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Info from "@/components/Info";
import Head from "next/head";
import localFont from "next/font/local";
import Link from "next/link";
const techsans = localFont({
  src: "../public/Technique+Sans.otf",
  weight: "400",
});
const myFont = localFont({ src: "../public/nimbussandext.ttf" });
const variants = {
  fadeIn: {
    x: 100,
    opacity: 0,
    transition: {
      duration: 0.25,
      ease: "easeInOut",
    },
  },
  inactive: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.25,
      ease: "easeInOut",
    },
  },
  fadeOut: {
    opacity: 0,
    x: 100,
    transition: {
      duration: 0.25,
      ease: "easeInOut",
    },
  },
};

const Contact = () => {
  interface contactType {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    message: string;
  }
  const [index, setIndex] = useState<any>(0);
  const [loading, setLoading] = useState(false);

  const [contactData, setContactData] = useState<contactType>({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });
  const form = useRef<null | HTMLFormElement>(null);
  function handleSubmit(e: any) {
    e.preventDefault();
    if (typeof form !== null) {
      if (
        !contactData.firstName ||
        !contactData.lastName ||
        !contactData.phone ||
        !contactData.email ||
        !contactData.message
      ) {
        toast.error("Please provide all the details!");
        return;
      }

      if (
        !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
          contactData.email.toString()
        )
      ) {
        toast.error("Please provide a valid email id.");
        return;
      }

      try {
        fetch("/api/contact", {
          method: "POST",
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(contactData),
        });
        toast.success(
          "Your enquiry has been submitted successfully. We'll get back to you at our earliest.",
          { duration: 3000 }
        );
      } catch (e) {
        toast.error("Something went wrong. Please try again later.");
      }
    }
    setContactData({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      message: "",
    });
  }

  return (
    <>
      <Head>
        <title>{`Contact | Get in Touch with us`}</title>
        <meta
          name="description"
          content="Have a question or want to learn more about Star Group's ventures? Contact us today to connect with our team. We'd love to hear from you."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="mt-16 md:mt-24">
        <Info title={"Contact Us"} description={"Connect with Us!"} />
        <div className="z-50">
          <Toaster />
        </div>
        <div className="text-gray-100 px-8 ">
          <div className="max-w-screen-xl   grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto  text-gray-900 rounded-lg ">
            <div className="flex flex-col justify-start">
              <div className=" mb-8">
                <h2
                  className={`text-xl lg:text-3xl font-bold leading-tight md:text-left text-center ${myFont.className}`}
                >
                  Contact Details
                </h2>
              </div>
              <div className={`${techsans.className}`}>
                <div className="flex items-center justify-center md:justify-start py-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-6 "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>

                  <p className="text-sm md:text-base "><Link href="mailto:info@starsgroupinc.com" className="">{`info@starsgroupinc.com`}</Link></p>
                </div>
                <div className="flex items-center justify-center md:justify-start py-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1.5em"
                    viewBox="0 0 384 512 "
                    className=" px-1"
                  >
                    <path d="M215.7 499.2C267 435 384 279.4 384 192 384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2 12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 110 128 64 64 0 110-128z"></path>
                  </svg>
                  <p className="text-sm md:text-base">{`2253 William Way
Greenfield, IN 46140

`}</p>
                </div>
                <div className="flex items-center justify-center md:justify-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1}
                    stroke="currentColor"
                    className="w-9 h-6 mt-[12px]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                  <p className="text-sm md:text-base pt-3"><Link href="tel:+1 908 625 2228" className="">{`+1 (908) 625-2228`}</Link></p>
                </div>
              </div>
            </div>
            <div className="">
              <h2 className="text-center font-bold text-xl py-4 md:hidden">
                Contact us
              </h2>
              <form
                ref={form}
                name="contact"
                encType="multipart/form-data"
                className="grid   gap-5 "
              >
                <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                  <div>
                    <span className="text-sm text-gray-600 font-bold">
                      First Name
                    </span>
                    <label htmlFor="email" className="sr-only">
                      First Name
                    </label>
                    <input
                      className="w-full text-gray-900 border-2 border-gray-600 mt-2 p-2  focus:outline-none focus:shadow-outline"
                      type="text"
                      name="firstName"
                      value={contactData.firstName}
                      onChange={(e) =>
                        setContactData((prev) => ({
                          ...prev,
                          firstName: e.target.value,
                        }))
                      }
                      id="first-name"
                      autoComplete="given-name"
                      placeholder="First Name"
                    />
                  </div>
                  <div>
                    <span className=" text-sm text-gray-600 font-bold">
                      Last Name
                    </span>
                    <label htmlFor="email" className="sr-only">
                      Last Name
                    </label>
                    <input
                      className="w-full  text-gray-900  border-2 border-gray-600 mt-2 p-2  focus:outline-none focus:shadow-outline"
                      type="text"
                      name="lastName"
                      value={contactData.lastName}
                      onChange={(e) =>
                        setContactData((prev) => ({
                          ...prev,
                          lastName: e.target.value,
                        }))
                      }
                      id="last-name"
                      autoComplete="family-name"
                      placeholder="Last Name"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                  <div className="">
                    <span className=" text-sm text-gray-600 font-bold">
                      Email
                    </span>
                    <label htmlFor="email" className="sr-only">
                      Email
                    </label>
                    <input
                      className="w-full  text-gray-900  border-2 border-gray-600 mt-2 p-2  focus:outline-none focus:shadow-outline"
                      id="email"
                      name="email"
                      value={contactData.email}
                      onChange={(e) =>
                        setContactData((prev) => ({
                          ...prev,
                          email: e.target.value,
                        }))
                      }
                      type="email"
                      autoComplete="email"
                      placeholder="Email"
                    />
                  </div>

                  <div className="">
                    <span className=" text-sm text-gray-600 font-bold ">
                      Phone
                    </span>
                    <label htmlFor="email" className="sr-only">
                      Phone
                    </label>
                    <PhoneInput
                      onChange={(phone) => {
                        setContactData({
                          ...contactData,
                          phone: phone,
                        });
                      }}
                      inputProps={{
                        name: "phone",
                      }}
                      value={contactData.phone}
                      country={"us"}
                      inputClass="!w-full !py-6  !mt-2 !text-gray-900  !focus:outline-none !focus:shadow-outline !border-transparent "
                      containerClass="!text-black  !border-gray-600 !border-l-2 !border-r-2 !border-b-2 !border-t-2"
                    />
                  </div>
                </div>
                <div className="">
                  <span className=" text-sm text-gray-600 font-bold">
                    Remarks
                  </span>
                  <label htmlFor="email" className="sr-only">
                    Type your query
                  </label>
                  <textarea
                    className="w-full h-32 border-2 border-gray-600 text-gray-900 mt-2 p-3  focus:outline-none focus:shadow-outline"
                    id="message"
                    name="message"
                    value={contactData.message}
                    onChange={(e) =>
                      setContactData((prev) => ({
                        ...prev,
                        message: e.target.value,
                      }))
                    }
                    rows={4}
                    aria-describedby="message-max"
                    placeholder="Type your query"
                  />
                </div>
                <div className="">
                  <button
                    onClick={handleSubmit}
                    className="w-[50%] text-sm font-bold tracking-wide bg-white hover:bg-primary hover:text-white  border-2 border-gray-600 text-black duration-200  p-2 focus:outline-none focus:shadow-outline"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
