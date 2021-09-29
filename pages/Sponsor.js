import Image from "next/image";

function Sponsor() {
    return (
        <div className="min-h-screen flex flex-col items-center space-y-10">
            <h1 className="text-8xl font-bold underline">Our Sponsors</h1>

            <div className="flex flex-col items-center justify-between space-y-20">
                <div>
                    <Image
                        src="/sawo-labs.png"
                        alt="Sawo Labs"
                        width={550}
                        height={250}
                    />
                </div>

                <div>
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
