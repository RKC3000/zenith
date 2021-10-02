import React, { useRef } from "react";

function HomePage() {
  const ref = useRef(null);
  React.useEffect(() => {
    import("@lottiefiles/lottie-player");
  });

  return (
    <div
      id="home"
      className="min-h-screen flex-col-reverse md:flex-row bg-center flex items-center "
    >
      <div className="w-80">
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
            <a>Discord</a>
          </button>
          <button className="p-1 border-2 rounded-lg hover:bg-white hover:text-black">
            <a>Register</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

{
  /* <div className="min-h-screen bg-center flex items-center ">
      <div className="absolute w-80 top-20 md:w-[50%] h-[600px] ">
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

      <div className="absolute flex flex-col text-white left-[70px] top-28 md:top-60 ">
        <div className="mb-2">
          <h1 className="text-2xl md:text-6xl font-bold">Hello Hackers</h1>
          <h2 className="text-2xl md:text-7xl">Welcome the Zenith</h2>
        </div>

        <div className="flex space-x-2">
          <button className="p-1 border-2 rounded-lg hover:bg-white hover:text-black">
            <a>Discord</a>
          </button>
          <button className="p-1 border-2 rounded-lg hover:bg-white hover:text-black">
            <a>Register</a>
          </button>
        </div>
      </div>
    </div> */
}
