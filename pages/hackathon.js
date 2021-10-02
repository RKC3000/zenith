import Navbar from "../components/Navbar";
import React, { useRef } from "react";

function Hackathon() {
  const ref = useRef(null);
  React.useEffect(() => {
    import("@lottiefiles/lottie-player");
  });

  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="mt-24">
        {/* Heading */}
        <h1 className="text-7xl font-bold text-center underline">Hackathon</h1>

        {/* About + Illustration */}
        <div className="flex ml-20">
          {/* about */}
          <div className="flex-1 p-3">
            <div>
              <h1 className="text-6xl font-semibold">About</h1>
              <p className="w-[450px] font-semibold mt-7">
                Bright minds with innovative ideas are the core to simplified
                hacks that makes one&apos;s life easier. The journey from
                naturally obtained light to the light from high temperature
                filament was also a part of this hacked life making it an easier
                and comfortable journey ahead. Zenith hacks brings you with such
                an opportunity to drag out insane amount of ideas to work and
                shine high on this road of hacks that makes a difference. So
                grab a place and reach your ZENITH as one&apos;s idea can make
                its difference after it reaches its highest peak !!!
              </p>
            </div>
          </div>
          {/* Illustration */}
          <div className="flex-1 h-[600px] w-[600px] ">
            <lottie-player
              id="firstLottie"
              ref={ref}
              autoplay
              loop
              mode="normal"
              background="transparent"
              speed="1"
              src="https://assets6.lottiefiles.com/packages/lf20_xsnsvpbs.json"
            ></lottie-player>
          </div>
        </div>
        {/* Themes */}
        <div>
          <h1 className="text-6xl text-center font-semibold underline">
            Theme
          </h1>

          {/* Individual theme */}
        </div>
      </div>
    </div>
  );
}

export default Hackathon;
