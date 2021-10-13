import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <div id="footer" className="flex items-center justify-center p-4 mb-6 ">
        <footer className="bg-[#030035] p-10 md:p-10 md:pt-4 md:pl-24 md:pr-24 w-[90%] rounded-lg drop-shadow-xl shadow-2xl">
          <div className="text-white flex items-start justify-center md:justify-evenly space-y-10 md:space-x-24 flex-col md:flex-row mb-6">
            {/* Zenith Logo */}
            <span className="p-5 flex items-center justify-center">
              <Image
                className="image"
                src="/zenith-logo.png"
                alt="logo"
                width={200}
                height={200}
              />
            </span>
            <span className="flex flex-col justify-center space-y-3 space-x-4 md:space-x-36 md:flex-row md:justify-evenly">
              {/* Contact */}
              <div className="flex flex-col">
                <p className="font-bold text-2xl flex justify-center md:text-lg">
                  Contact
                </p>
                <span className="mt-4 ml-2">
                  <h1 className="font-semibold">Aniket Kumar Sinha</h1>
                  <h3 className="text-xs md:font-normal mt-1">
                    +91-6203961808
                  </h3>
                  <h6 className="text-xs md:font-normal">
                    sinhaaniket32@gmail.com
                  </h6>
                  <h1 className="font-semibold mt-2">Ojas Sharma</h1>
                </span>
              </div>

              {/* Explore */}
              <span className=" flex flex-col ">
                <span>
                  <p className="font-bold text-2xl flex justify-center md:text-lg md:flex-none">
                    Explore
                  </p>
                  <span className=" flex flex-col md:mt-4 md:ml-2 space-y-1">
                    <a href="#about" className="text-white hover:text-blue-300">
                      <span>About</span>
                    </a>
                    <a
                      href="#schedule"
                      className="text-white hover:text-blue-300"
                    >
                      <span>Schedule</span>
                    </a>
                    <a
                      href="#speakers"
                      className="text-white hover:text-blue-300"
                    >
                      <span>Speakers</span>
                    </a>
                    <a
                      href="#sponsors"
                      className="text-white hover:text-blue-300"
                    >
                      <span>Sponsors</span>
                    </a>
                    <a href="#faq" className="text-white hover:text-blue-300">
                      <span>FAQ</span>
                    </a>
                    <a
                      href="#contact"
                      className="text-white hover:text-blue-300"
                    >
                      <span>ContactUs</span>
                    </a>
                  </span>
                </span>
              </span>
            </span>
            <div className="flex flex-col md:p-10 md:w-[25%] md:items-end md:ml-24">
              <span>
                <p className="font-bold mb-4">find us-Online</p>
                <span className="flex items-center justify-center space-x-2">
                  <span className=" bg-white p-[3px] rounded-full flex items-center justify-center">
                    <a
                      href="https://twitter.com/festzenith"
                      target="_blank"
                      rel="noreferrer"
                      className="grid"
                    >
                      <Image
                        className="image rounded-full filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100 cursor-pointer transform duration-300 ease-in-out"
                        src="/twitter.png"
                        alt="logo"
                        width={40}
                        height={40}
                      />
                    </a>
                  </span>
                  <span className=" bg-white p-[3px] rounded-full flex items-center justify-center">
                    <a
                      href="https://github.com/dscbkbiet/zenith"
                      target="_blank"
                      rel="noreferrer"
                      className="grid"
                    >
                      <Image
                        className="image rounded-full filter grayscale opacity-30 hover:grayscale-0 hover:opacity-100 cursor-pointer transform duration-300 ease-in-out"
                        src="/github.png"
                        alt="logo"
                        width={40}
                        height={40}
                      />
                    </a>
                  </span>
                  <span className=" bg-white p-[3px] rounded-full flex items-center justify-center">
                    <a
                      href="https://www.linkedin.com/company/festzenith/"
                      target="_blank"
                      rel="noreferrer"
                      className="grid"
                    >
                      <Image
                        className="image rounded-full filter grayscale opacity-50 hover:grayscale-0 hover:opacity-100 cursor-pointer transform duration-300 ease-in-out"
                        src="/linkedin.png"
                        alt="logo"
                        width={40}
                        height={40}
                      />
                    </a>
                  </span>
                </span>
              </span>
            </div>
          </div>
          <span className=" w-full flex items-center justify-center mt-10 md:mt-0">
            <hr className="h-[1px] w-[85%] mt-4 bg-white" />
          </span>
          <div className="mt-4 text-gray-300 text-center font-bold text-sm">
            © 2021 GDSC-BKBIET All Rights Reserved
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
