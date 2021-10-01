import React, { useRef } from "react";

function HomePage() {
    const ref = useRef(null);
    React.useEffect(() => {
        import("@lottiefiles/lottie-player");
    });

    return (
        <div className="min-h-screen bg-center flex items-center mt-5">
            <div className="absolute w-80 md:w-[95%] h-full top-16 ">
                <lottie-player
                    id="firstLottie"
                    ref={ref}
                    autoplay
                    loop
                    mode="normal"
                    background="transparent"
                    speed="1"    
                    src="https://assets5.lottiefiles.com/packages/lf20_1cazwtnc.json"
                    // style={{ width: "1000px", height: "1000px", position: "absolute", left: "0", right: "0" }}
                    ></lottie-player>
            </div>


            <div className="absolute flex flex-col justify-evenly text-white left-[70px] top-20 md:left-[580px] z-100">
                <div className="mb-2">
                    <h1 className="text-2xl md:text-6xl font-bold">Hello Hackers</h1>
                    <h2 className="text-2xl md:text-7xl">Welcome the Zenith</h2>
                </div>
                
                <div className="flex space-x-2">
                    <button className="p-1 border-2 rounded-lg">Discord</button>
                    <button className="p-1 border-2 rounded-lg">Register</button>
                </div>
            </div>

        </div>
    )
}

export default HomePage;
