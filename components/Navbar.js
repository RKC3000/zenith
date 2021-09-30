import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {

    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    };

    return (
        <div className="w-[95%] bg-[#030035] flex items-center justify-between  md:p-4 ml-[19px] mr-[19px] rounded-lg">
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
            <button
                className="inline-flex p-3 hover:bg-white rounded lg:hidden text-white ml-auto hover:text-white outline-none"
                onClick={handleClick}
            >
                <MenuIcon />
            </button>
            <div
                className={`${ active ? '' : 'hidden'} w-full flex flex-col items-center justify-center text-md space-x-4 lg:inline-flex md: text-lg`}
            >
                
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
