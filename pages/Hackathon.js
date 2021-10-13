import Navbar from "../components/Navbar";
import React, { useRef } from "react";
import Footer from "../components/Footer";

function Hackathon() {
  const ref = useRef(null);
  React.useEffect(() => {
    import("@lottiefiles/lottie-player");
  });

  React.useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="flex flex-col bg-[#F8F0E3]">
      <Navbar />
      <div className="mt-32">
        {/* Heading */}
        <h1 className="text-2xl font-extrabold text-center md:mb-3 md:text-7xl">
          Hackathon
        </h1>

        {/* About + Illustration */}
        <div className="flex flex-col text-center md:flex-row md:ml-20">
          {/* about */}
          <div className="flex-1 p-3">
            <div>
              <h1 className="text-3xl text-center font-bold underline md:text-6xl">
                About
              </h1>
              <p className="font-semibold text-center mt-7 ">
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
            <button>
              {/* <div
                class="apply-button"
                data-hackathon-slug="YOUR-HACKATHON-SLUG"
                data-button-theme="light"
                style="height: 44px; width: 312px"
              ></div> */}
            </button>
          </div>
          {/* Illustration */}
          <div className="md:flex-1 md:h-[500px] md:w-[500px] ">
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
          <h1 className="text-3xl text-center font-bold underline md:text-6xl mb-20">
            Theme
          </h1>

          <div className="grid grid-rows-1 gap-y-5 items-center text-center mx-3 md:ml-52 md:grid-cols-2">
            {/* 1st theme */}
            <div className="bg-red-500 w-[300px] h-[400px] p-1 rounded-2xl md:w-[400px] ">
              <h1 className="text-lg font-bold p-2 mb-2 md:text-2xl ">
                Hack the Health:-
              </h1>
              <p className="text-base font-medium md:text-xl">
                Health being an important aspect of one&apos;s life is usually
                neglected these days due to one&apos;s hectic life. A breach of
                one&apos;s peace, ability and focus is wildly disturbed due to
                any health or medical ambiguity. Awareness with easy
                implementation and wide focus with making it health look fun may
                make people keener towars the goal of achieving an healthy mind
                and well maintained physique.
              </p>
            </div>
            {/* 2nd theme */}
            <div className="bg-blue-500 w-[300px] h-[400px] p-1 rounded-2xl md:w-[400px]">
              <h1 className="text-lg font-bold p-2 mb-2 md:text-2xl">
                Hack the Cosmos:-{" "}
              </h1>
              <p className="text-base font-medium md:text-xl">
                How many of you guys know that there lyes a place named Kuiper
                ?? Well for the ones who don&apos;t know its an enormous ring of
                astroids named Kuiper belt. Well new innovations in tech and
                exploration of cosmos have their own fantastic story line which
                makes them both interesting and fascinating at the same time.
                Now take it ahead and make a difference by giving people an
                imaginary tour of cosmos on their screens.
              </p>
            </div>
            {/* 3rd theme */}
            <div className="bg-green-500 w-[300px] h-[400px] p-1 rounded-2xl md:w-[400px]">
              <h1 className="text-lg font-bold p-2 mb-2 md:text-2xl">
                Hack the Trend:-{" "}
              </h1>
              <p className="text-base font-medium md:text-xl">
                This four letter word is enough to create its own world of
                virtual reality or even one&apos;s personalised assistant that
                can cut their long journeys of manual work and spare them with
                even more time to focus on things with greater importance.
                Trending technology can grand us an better version on its past
                and now when we explore it and dig deeper we may find even new
                wonders.
              </p>
            </div>
            {/* 4th theme */}
            <div className="bg-yellow-500 w-[300px] h-[400px] p-1 rounded-2xl md:w-[400px]">
              <h1 className="text-lg font-bold p-2 mb-2 md:text-2xl">
                Hack the Society:-{" "}
              </h1>
              <p className="text-base font-medium md:text-xl">
                Pick up an problem of your own , show its worth with the
                application that you develop and get ur zenith as an idea is
                just a root with its branches trying to have their own way.
              </p>
            </div>
          </div>

          {/* <div className="flex items-center justify-between md:{grid grid-cols-2 items-center} bg-red-500 md:mt-2 lg:p-5"> */}
          {/* details */}
          {/* <div className="w-[380px] ml-20">
              <h1 className="text-2xl font-bold ">Hack the Health:- </h1>
              <p className="text-xl font-medium">
                Health being an important aspect of one&apos;s life is usually
                neglected these days due to one&apos;s hectic life. A breach of
                one&apos;s peace, ability and focus is wildly disturbed due to
                any health or medical ambiguity. Awareness with easy
                implementation and wide focus with making it health look fun may
                make people keener towars the goal of achieving an healthy mind
                and well maintained physique.
              </p>
            </div> */}
          {/* Illustration */}
          {/* <div className="w-96 h-96 ml-32">
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
          </div> */}
          {/* <div className="flex items-center justify-between md:{grid grid-cols-2 items-center} bg-blue-500 mt-2 lg:p-5"> */}
          {/* Illustration */}
          {/* <div className="w-96 h-96">
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
            </div> */}
          {/* details */}
          {/* <div className="w-[380px] ml-20">
              <h1 className="text-2xl font-bold ">Hack the Cosmos:- </h1>
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
          </div> */}
          {/* <div className="flex items-center justify-between md:{grid grid-cols-2 items-center} bg-green-500 mt-2 lg:p-5"> */}
          {/* details */}
          {/* <div className="w-[450px] md:ml-20">
              <h1 className="text-2xl font-bold ">Hack the Tech:- </h1>
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
            </div> */}
          {/* Illustration */}
          {/* <div className="w-96 h-96 md:ml-36">
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
          </div> */}
          {/* <div className="flex items-center justify-between md:{grid grid-cols-2 items-center} bg-yellow-500 lg:mt-2 lg:p-5"> */}
          {/* Illustration */}
          {/* <div className="w-96 h-96">
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
            </div> */}
          {/* details */}
          {/* <div className="w-[450px] ml-20">
              <h1 className="text-2xl font-bold ">Hack the Custom:- </h1>
              <p className="text-xl font-medium">
                Pick up an problem of your own , show its worth with the
                application that you develop and get ur zenith as an idea is
                just a root with its branches trying to have their own way.
              </p>
            </div> */}
          {/* </div> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Hackathon;
