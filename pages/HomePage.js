import Link from "next/link";
import React, { useRef } from "react";
import Image from "next/image";

function HomePage() {
  const ref = useRef(null);
  React.useEffect(() => {
    import("@lottiefiles/lottie-player");
  });

  return (
    <div
      id="home"
      className="min-h-screen flex-col md:flex-row bg-center flex items-center justify-center w-full "
    >
      <div className="w-[40vh] md:w-[30vw] mb-4 md:mb-0">
        <lottie-player
          id="firstLottie"
          ref={ref}
          autoplay
          loop
          mode="normal"
          background="transparent"
          speed="1"
          src="https://assets5.lottiefiles.com/packages/lf20_1cazwtnc.json"
          // style={{ width: "1000px", height: "1000px", position: "absolute", left: "0", right: "0" }}
        ></lottie-player>
      </div>

      <div className="flex flex-col text-white lg:pl-16">
        <div className="mb-2">
          <h1 className="text-2xl md:text-6xl font-bold">Hello Hackers</h1>
          <h2 className="text-4xl md:text-7xl">
            Welcome the{" "}
            <x className="bg-blue-500 rounded-3xl p-4 font-bold pt-0 pb-0">
              Zenith
            </x>
          </h2>
          <h3 className="text-gray-300 italic text-xs md:text-lg mt-2 md:mt-5 text-right font-semibold">
            20-22 October 2021
          </h3>
        </div>

        <div className="flex space-x-4 mt-1">
          <button className="p-1 text-gray-800 bg-white rounded-xl pl-4 pr-4 font-semibold hover:bg-gray-300">
            <a href="https://forms.office.com/r/SwAGhnSB6C">Register</a>
          </button>
          <button className="p-1 text-gray-800 bg-white rounded-xl pl-4 pr-4 font-semibold flex items-center justify-center space-x-2 hover:bg-gray-300">
            <Image
              className="text-gray-800"
              src="/discord.svg"
              alt="logo"
              width={30}
              height={30}
            />
            <a href="https://discord.gg/YCcD37fTyB">Discord</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
