import Image from "next/image";
import Link from "next/link";

function Navbar() {
    return (
        <div className="w-[95%] bg-[#030035] flex items-center justify-between p-4  ml-[19px] mr-[19px] rounded-lg">
            {/* logo */}
            <div className="flex items-center p-1">
                <Image
                    src="/zenith-logo.png"
                    alt="logo"
                    height={30}
                    width={40}
                />
                <h1 className="text-2xl font-bold text-white pl-1">Zenith</h1>
            </div>
            {/* Nav Items */}
            <div className="flex items-center space-x-4 text-lg">
                
                    <a href="#about" className="text-white cursor-pointer">About</a>
                    <a href="#schedule" className="text-white cursor-pointer">Schedule</a>
                    <a href="#speakers" className="text-white cursor-pointer">Speakers</a>
                    <a href="#sponsors" className="text-white cursor-pointer">Sponsors</a>
                    <a href="#faq" className="text-white cursor-pointer">FAQ</a>
                    <a href="#contact" className="text-white cursor-pointer">Contact</a>
                
            </div>
        </div>
    )
}

export default Navbar;
