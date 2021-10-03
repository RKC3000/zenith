import Link from "next/link";
import React, { useRef } from "react";

function HomePage() {
  const ref = useRef(null);
  React.useEffect(() => {
    import("@lottiefiles/lottie-player");
  });

  return (
    <div
      id="home"
      className="min-h-screen flex-col-reverse md:flex-row bg-center flex items-center justify-center w-full "
    >
      <div className="w-[40vh] md:w-[30vw]">
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
          <h2 className="text-2xl md:text-7xl">Welcome the Zenith</h2>
        </div>

        <div className="flex space-x-2">
          <button className="p-1 border-2 rounded-lg hover:bg-white hover:text-black">
            <a href="https://forms.office.com/r/SwAGhnSB6C">Register</a>
          </button>
          <button className="p-1 border-2 rounded-lg hover:bg-white hover:text-black">
            <a href="https://discord.gg/YCcD37fTyB">Discord</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
