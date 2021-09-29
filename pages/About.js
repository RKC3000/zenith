import Image from "next/image";

function About() {
    return (
        <div className="min-h-screen flex flex-col bg-[#483d8b]">
            <h1 className="text-4xl font-bold text-white ml-20 mb-8 mt-5 underline">ABOUT</h1>
            
            <div className="flex items-center justify-evenly">
                {/* animations */}
                <div className="mr-5">
                    <Image
                        src="/astronaut-floating-with-rocket-on-space.gif"
                        alt="galaxy-orbit"
                        height={200}
                        width={200}
                    />
                </div>
                
                {/* text */}
                <div className="w-[500px]">
                    <div>
                    <p className="text-4xl text-white">What is zenith?</p>
                        <p className="text-lg text-white font-semibold">
                            -Zenith-the couth and technical event of BK Birla Institute of Engineering &Technology.It’s a wrap-up of knowledge, enthusiasm, experience, and unadulterated thrills making it a journey worthwhile with a theme of cosmos making an infinite valley of stars at incomparable heights defines one’s success. It brings along numerous events with different learning experiences and ripened thoughts from the expertise, also to be noted the continuos ongoing convivial moments with a whole lot of interaction. We hope it reaches up to ur expectations as soaring high above our own expectations makes one lead its glory and that’s when we can reach our highest peaks _ Zenith- excellence personified !!!        
                        </p>
                    </div>
                    <br/>
                    <p className="text-lg text-white font-semibold">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                </div>
            </div>
        </div>
    )
}

export default About;
