import Image from "next/image";

function Navbar() {
    return (
        <div className="w-[95%] bg-blue-700 flex items-center justify-between p-4  ml-[19px] mr-[19px] rounded-lg">
            {/* logo */}
            <div>
                <Image
                    src="/zenith-logo.png"
                    alt="logo"
                    height={30}
                    width={40}
                />
            </div>
            {/* Nav Items */}
            <div className="flex items-center space-x-4 text-lg cursor-pointer">
                <p className="text-white">About</p>
                <p className="text-white">Schedule</p>
                <p className="text-white">Speakers</p>
                <p className="text-white">Sponsors</p>
                <p className="text-white">FAQ</p>
                <p className="text-white">Contact</p>
            </div>
        </div>
    )
}

export default Navbar;
