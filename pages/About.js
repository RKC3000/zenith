import React, { useRef } from "react";

function About() {
    const ref = useRef(null);
    React.useEffect(() => {
        import("@lottiefiles/lottie-player");
    });


    return (
        <div id="about" className="min-h-screen flex flex-col bg-[#1b0038]">
            <h1 className="text-4xl font-bold text-white ml-20 mb-3 mt-5">What is</h1>
            <h1 className="text-6xl font-bold text-white ml-20 mb-8">Zenith?</h1>
            
            <div className="flex items-center justify-evenly">
                {/* text */}
                <div className="w-[500px]">
                    <div>
                        <p className="text-lg text-white font-semibold">
                            Zenith-the couth and technical event of BK Birla Institute of Engineering &Technology. It’s a wrap-up of knowledge, enthusiasm, experience, and unadulterated thrills making it a journey worthwhile with a theme of cosmos making an infinite valley of stars at incomparable heights defines one’s success. It brings along numerous events with different learning experiences and ripened thoughts from the expertise, also to be noted the continuos ongoing convivial moments with a whole lot of interaction. We hope it reaches up to ur expectations as soaring high above our own expectations makes one lead its glory and that’s when we can reach our highest peaks  Zenith - excellence personified !!!         
                        </p>
                    </div>
                </div>

                {/* animations */}
                <div className="mr-5">
                    <lottie-player
                        id="firstLottie"
                        ref={ref}
                        autoplay
                        loop
                        mode="normal"
                        background="transparent"
                        speed="1"    
                        src="https://assets7.lottiefiles.com/packages/lf20_edzccurz.json"
                        style={{ width: "300px", height: "300px" }}
                        ></lottie-player>
                </div>
                
                
            </div>
        </div>
    )
}

export default About;
