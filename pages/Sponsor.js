import Image from "next/image";

function Sponsor() {
  return (
    <div
      id="sponsors"
      className="mb-10 bg-gray-200 pt-24 pb-24 flex flex-col mt-20 p-1"
    >
      <h1 className="font-bold text-center md:ml-20 text-6xl mb-20">
        Our Sponsors
      </h1>

      <div className="w-full flex flex-col items-center justify-center space-y-10 md:flex-row md:flex-wrap">
        <div className="flex items-center justify-center">
          <Image
            className="object-contain"
            src="/mlsa.png"
            alt="MLSA"
            width={200}
            height={200}
          />
        </div>

        <div
          className="flex items-center justify-center md:ml-10"
          style={{ margin: 0 }}
        >
          <Image
            className="object-contain"
            src="/ns-logo-1.png"
            alt="Newton School"
            width={600}
            height={200}
          />
        </div>

        <div
          className="flex items-center justify-center md:ml-10"
          style={{ margin: 0 }}
        >
          <Image
            className="object-contain"
            src="/Devfolio_Logo-Colored.png"
            alt="Newton School"
            width={600}
            height={200}
          />
        </div>

        <div
          className="flex items-center justify-center md:ml-10"
          style={{ margin: 0 }}
        >
          <Image
            className="object-contain"
            src="/Polygon_Logo-Colored.png"
            alt="Newton School"
            width={600}
            height={200}
          />
        </div>

        <div
          className="flex items-center justify-center md:ml-10"
          style={{ margin: 0 }}
        >
          <Image
            className="object-contain"
            src="/Tezos_Logo-Colored.png"
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
