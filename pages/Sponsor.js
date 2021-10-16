import Image from "next/image";

function Sponsor() {
  return (
    <div
      id="sponsors"
      className="bg-gray-200 pt-24 pb-24 mb-10 flex flex-col mt-20 p-1"
    >
      <h1 className="font-bold text-center md:ml-20 text-6xl mb-20">
        Our Sponsors
      </h1>

      <div className="w-full flex flex-col items-center justify-evenly space-y-10 p-2 md:flex-row md:flex-wrap">
        <a
          href="https://studentambassadors.microsoft.com/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="flex items-center justify-center">
            <Image
              className="object-contain"
              src="/mlsa.png"
              alt="MLSA"
              width={200}
              height={200}
            />
          </div>
        </a>

        <a href="https://www.newtonschool.co/" target="_blank" rel="noreferrer">
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
        </a>

        <a href="https://devfolio.co/" target="_blank" rel="noreferrer">
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
        </a>

        <a href="https://polygon.technology/" target="_blank" rel="noreferrer">
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
        </a>

        <a href="https://tezos.com/" target="_blank" rel="noreferrer">
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
        </a>

        <a href="https://celo.org/" target="_blank" rel="noreferrer">
          <div
            className="flex items-center justify-center md:ml-10"
            style={{ margin: 0 }}
          >
            <Image
              className="object-contain"
              src="/Celo_Logo-Color.png"
              alt="Newton School"
              width={600}
              height={200}
            />
          </div>
        </a>

        <a href="https://filecoin.io/" target="_blank" rel="noreferrer">
          <div
            className="flex items-center justify-center md:ml-10"
            style={{ margin: 0 }}
          >
            <Image
              className="object-contain"
              src="/Filecoin-Coloured.png"
              alt="Newton School"
              width={600}
              height={200}
            />
          </div>
        </a>

        <a href="https://www.sketch.com/" target="_blank" rel="noreferrer">
          <div
            className="flex items-center justify-center md:ml-10"
            style={{ margin: 0 }}
          >
            <Image
              className="object-contain"
              src="/Sketch-Logo-Light.png"
              alt="Newton School"
              width={600}
              height={200}
            />
          </div>
        </a>
      </div>
    </div>
  );
}

export default Sponsor;
