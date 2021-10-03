import Image from "next/dist/client/image";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function SpeakerCard({ image, name, tlink, llink, designations }) {
  return (
    <section className="pt-6 pb-6 bg-[#321051] flex flex-col items-center justify-center border-2 border-[#42255D] mb-10 text-gray-200 rounded-xl md:h-72 md:w-60 md:space-x-3 md:space-y-3 ">
      {/* Image */}
      <div className="flex justify-center ">
        <Image
          src={image}
          alt={name}
          height={100}
          width={100}
          className="mt-2 rounded-xl"
        />
      </div>

      {/* Name and About */}
      <div className="flex flex-col items-center" style={{ margin: "12px" }}>
        <h1 className="text-xl font-semibold text-center">{name}</h1>
        <p className="text-sm text-center">{designations}</p>
      </div>

      {/* socials */}
      <section className="flex items-center justify-center space-x-4">
        <div>
          <a href={tlink} rel="noreferrer" target="_blank">
            <TwitterIcon />
          </a>
        </div>
        <div>
          <a href={llink} rel="noreferrer" target="_blank">
            <LinkedInIcon />
          </a>
        </div>
      </section>
    </section>
  );
}

export default SpeakerCard;
