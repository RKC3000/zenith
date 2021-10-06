import Image from "next/image";

function Sponsor() {
  return (
    <div id="sponsors" className="min-h-screen flex flex-col mt-28 p-1">
      <h1 className="font-bold text-2xl text-center underline md:ml-20 md:text-6xl">
        Our{" "}
      </h1>
      <h1 className="font-bold text-2xl text-center underline mb-8 md:text-6xl">
        Sponsors
      </h1>

      <div className="flex flex-col items-center justify-center space-y-20 md:flex-row md:space-x-10">
        <div>
          <Image src="/mlsa.png" alt="MLSA" width={400} height={350} />
        </div>

        <div className="flex items-center">
          <Image
            src="/ns-logo-1.png"
            alt="Newton School"
            width={600}
            height={200}
          />
        </div>
      </div>
    </div>
  );
}

export default Sponsor;
