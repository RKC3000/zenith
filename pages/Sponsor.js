import Image from "next/image";

function Sponsor() {
    return (
        <div id="sponsors" className="min-h-screen flex flex-col">
            <h1 className="text-4xl font-bold ml-20 underline">Our </h1>
            <h1 className="text-6xl font-bold ml-20 underline">Sponsors</h1>

            <div className="flex flex-col items-center justify-between space-y-20">
                <div className="w-48">
                    <Image
                        src="/sawo-labs.png"
                        alt="Sawo Labs"
                        width={550}
                        height={250}
                    />
                </div>

                <div className="w-48">
                    <Image
                        src="/wazirx.png"
                        alt="WazirX"
                        width={550}
                        height={250}
                    />
                </div>
            </div>
        </div>
    )
}

export default Sponsor;
