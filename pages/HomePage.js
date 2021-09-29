import React, { useRef } from "react";

function HomePage() {
    const ref = useRef(null);
    React.useEffect(() => {
        import("@lottiefiles/lottie-player");
    });

    return (
        <div className="min-h-screen bg-center flex items-center mt-5">
            <div className="absolute w-[95%] h-full top-10  ">
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
                    style={{ width: "600px", height: "600px" }}
                    ></lottie-player>
            </div>


            <div className="absolute left-[580px] text-white top-48 z-100">
                <h1 className="text-6xl font-bold">Hello Hackers</h1>

                <h2 className="text-7xl">Welcome the Zenith</h2>
            </div>

        </div>
    )
}

export default HomePage;
