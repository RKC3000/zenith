import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <div id="footer" className="flex items-center  justify-center p-4 mb-6 ">
        <footer className="bg-[#030035] p-10 pt-4 pl-24 pr-24 w-[90%]  rounded-lg drop-shadow-xl shadow-2xl">
          <div className="text-white flex space-y-10 md:space-x-24 flex-col md:flex-row">
            <span className="p-10">
              <Image
                className="image"
                src="/zenith-logo.png"
                alt="logo"
                width={200}
                height={200}
              />
            </span>
            <span>
              <h1>Aniket Kumar Sinha</h1>
              <h3>6203961808</h3>
              <h4>sinhaaniket32@gmail.com</h4>
            </span>
            <span className="md:p-10 flex flex-col md:pl-24">
              <span>
                <p className="font-bold">About</p>
                <span className="flex flex-col mt-4 ml-2 space-y-1">
                  <a href="#about" className="text-white hover:text-blue-300">
                    <span>Code of Conduct</span>
                  </a>
                  <a
                    href="#schedule"
                    className="text-white hover:text-blue-300"
                  >
                    <span>Schedule</span>
                  </a>
                  <a href="#speaker" className="text-white hover:text-blue-300">
                    <span>Privacy policy</span>
                  </a>
                  <a href="#sponsor" className="text-white hover:text-blue-300">
                    <span>Blogs</span>
                  </a>
                </span>
              </span>
            </span>
            <span className="md:p-10 flex flex-col ">
              <span>
                <p className="font-bold">Explore</p>
                <span className=" flex flex-col mt-4 ml-2 space-y-1">
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
                  <a href="#contact" className="text-white hover:text-blue-300">
                    <span>ContactUs</span>
                  </a>
                </span>
              </span>
            </span>
            <div className="md:p-10 flex flex-col md:w-[25%] md:items-end  md:ml-24">
              <span>
                <p className="font-bold mb-4">find us-Online</p>
                <span className="flex items-center justify-center space-x-4">
                  <span className=" bg-white p-[3px] rounded-full flex items-center justify-center">
                    <Image
                      className="image rounded-full filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100 cursor-pointer transform duration-300 ease-in-out"
                      src="/twitter.png"
                      alt="logo"
                      width={40}
                      height={40}
                    />
                  </span>
                  <span className=" bg-white p-[3px] rounded-full flex items-center justify-center">
                    <Image
                      className="image rounded-full filter grayscale opacity-30 hover:grayscale-0 hover:opacity-100 cursor-pointer transform duration-300 ease-in-out"
                      src="/github.png"
                      alt="logo"
                      width={40}
                      height={40}
                    />
                  </span>
                  <span className=" bg-white p-[3px] rounded-full flex items-center justify-center">
                    <Image
                      className="image rounded-full filter grayscale opacity-50 hover:grayscale-0 hover:opacity-100 cursor-pointer transform duration-300 ease-in-out"
                      src="/linkedin.png"
                      alt="logo"
                      width={40}
                      height={40}
                    />
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
