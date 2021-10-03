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
      <div className="mt-32">
        {/* Heading */}
        <h1 className="text-7xl font-extraboldbold text-center underline ml-56 mb-3 md:ml-0">
          Hackathon
        </h1>

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
          <h1 className="text-6xl text-center font-semibold underline ">
            Theme
          </h1>

          {/* Individual theme */}
          <div className="grid grid-cols-2 items-center gap-x-40 gap-y-20">
            {/* details */}
            <div className="w-[380px] ml-20">
              <h1 className="text-2xl font-bold ">Health Hack:- </h1>
              <p className="text-xl font-medium">
                Health being an important aspect of one&apos;s life is usually
                neglected these days due to one&apos;s hectic life. A breach of
                one&apos;s peace, ability and focus is wildly disturbed due to
                any health or medical ambiguity. Awareness with easy
                implementation and wide focus with making it health look fun may
                make people keener towars the goal of achieving an healthy mind
                and well maintained physique.{" "}
              </p>
            </div>
            {/* Illustration */}
            <div className="w-96 h-96 ml-32">
              <lottie-player
                id="firstLottie"
                ref={ref}
                autoplay
                loop
                mode="normal"
                background="transparent"
                speed="2"
                src="https://assets2.lottiefiles.com/packages/lf20_q0nn8kie.json"
              ></lottie-player>
            </div>

            {/* Illustration */}
            <div className="w-96 h-96">
              <lottie-player
                id="firstLottie"
                ref={ref}
                autoplay
                loop
                mode="normal"
                background="transparent"
                speed="1"
                src="https://assets10.lottiefiles.com/packages/lf20_bqmgf5tx.json"
              ></lottie-player>
            </div>
            {/* details */}
            <div className="w-[380px] ml-20">
              <h1 className="text-2xl font-bold ">Cosmic Hack:- </h1>
              <p className="text-xl font-medium">
                How many of you guys know that there lyes a place named Kuiper
                ?? Well for the ones who don&apos;t know its an enormous ring of
                astroids named Kuiper belt. This is where you&apos;ll find dwarf
                planet Pluto. Well thats the case now its you that know it
                existed but can we spread it ahead ? Well new innovations in
                tech and exploration of cosmos have their own fantastic
                storyline which makes them both interesting and fascinating at
                the same time. Now take it ahead and make a difference by giving
                people an imaginary tour of cosmos on their screens
              </p>
            </div>

            {/* details */}
            <div className="w-[450px] ml-20">
              <h1 className="text-2xl font-bold ">Tech Hack:- </h1>
              <p className="text-xl font-medium">
                This four letter word is enough to create its own world of
                virtual reality or even one&apos;s personalised assistant that
                can cut their long journeys of manual work and spare them with
                even more time to focus on things with greater importance.
                Trending technology can grand us an better version on its past
                and now when we explore it and dig deeper we may find even new
                wonders. Give us an technology that u think is wonderful and
                helps us getting even more closer to perfection. Give us
                it&apos;s gist or how may ur application show what is it that it
                can really conjugate.
              </p>
            </div>
            {/* Illustration */}
            <div className="w-96 h-96 ml-36">
              <lottie-player
                id="firstLottie"
                ref={ref}
                autoplay
                loop
                mode="normal"
                background="transparent"
                speed="2"
                src="https://assets8.lottiefiles.com/packages/lf20_m9zragkd.json"
              ></lottie-player>
            </div>

            {/* Illustration */}
            <div className="w-80 md:w-96 md:h-96">
              <lottie-player
                id="firstLottie"
                ref={ref}
                autoplay
                loop
                mode="normal"
                background="transparent"
                speed="2"
                src="https://assets8.lottiefiles.com/packages/lf20_z3wd7moi.json"
              ></lottie-player>
            </div>
            {/* details */}
            <div className="w-[450px] ml-20">
              <h1 className="text-2xl font-bold ">Custom Hacks:- </h1>
              <p className="text-xl font-medium">
                Pick up an problem of your own , show its worth with the
                application that you develop and get ur zenith as an idea is
                just a root with its branches trying to have their own way.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hackathon;
