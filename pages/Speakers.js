/* eslint-disable @next/next/no-img-element */
import SpeakerCard from "../components/SpeakerCard";
import SpeakerData from "../components/SpeakerData";

function Speakers() {
  return (
    <div
      id="speakers"
      className="zen-container flex flex-col items-center justify-center p-2 m-2 space-y-8"
    >
      {/* Heading */}
      <div className="">
        <div className="text-center mb-10">
          <h2 className="text-6xl font-bold">Speakers</h2>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 md:gap-x-20">
        {SpeakerData.map((data) => (
          <SpeakerCard
            key={data.id}
            name={data.name}
            image={data.image}
            designations={data.designations}
            tlink={data.tlink}
            llink={data.llink}
          />
        ))}
      </div>
      {/* <div className="flex items-center justify-evenly md:w-[1200px] ">
        {SpeakerData.map((data) => (
          <SpeakerCard
            key={data.id}
            name={data.name}
            image={data.image}
            designations={data.designations}
            tlink={data.tlink}
            llink={data.llink}
          />
        ))}
      </div> */}
    </div>
  );
}

export default Speakers;

{
  /* <section id="speakers" className="bg-primary">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2 className="section-heading">Speakers and Judges</h2>
                    </div>
                </div>
            </div>

            <div className="container mt-5">
                <div className="row no-gutters">

                    <div className="col-xl-2 col-md-3 col-sm-4 col-6">
                        <a href="https://twitter.com/NadavAHollander" target="_blank" rel="noreferrer">
                            <div className="border-none mt-4 mb-4 ml-0 mr-0 hover: bg-[#172341]">
                                <Image className="h-[200px] w-full object-cover" src="/zenith_logo.png" alt="Nadav Hollandar" width={50} height={50} />
                                <div className="bg-[#203260]">
                                    <div className="speaker-card-header bg-[#172341] text-center pt-[1.2rem] mr-0 mb-[0.8rem] ml-0">
                                        <h5 className="font-bold">Nadav Hollander</h5>
                                        <p className="text-faded text-base">Founder &amp; CEO
                                            <br />Dharma Labs
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>

                </div>
            </div>
        </section> */
}
