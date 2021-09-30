import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Navbar() {

    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    };

    return (
        <div className="w-[85%] h-[50px] bg-[#030035] flex items-center justify-between rounded-lg md:w-[95%] p-4 ml-[19px] mr-[19px] ">
            {/* logo */}
            <div className="flex items-center p-1">
                <Image
                    src="/zenith-logo.png"
                    alt="logo"
                    height={30}
                    width={40}
                />
                <h1 className="text-xl font-bold text-white pl-1 md:text-2xl">Zenith</h1>
            </div>
            {/* Nav Items */}
            <div className="flex flex-col">
                <button
                    className="inline-flex p-3 hover: rounded lg:hidden text-white ml-auto hover:text-white outline-none"
                    onClick={handleClick}
                >
                    <MenuIcon />
                </button>
                <div
                    className={`${ active ? '' : 'hidden'} flex items-center justify-center text-md space-x-4 lg:inline-flex md:text-lg `}
                >
                    
                        <a href="#about" className="text-white cursor-pointer">About</a>
                        <a href="#schedule" className="text-white cursor-pointer">Schedule</a>
                        <a href="#speakers" className="text-white cursor-pointer">Speakers</a>
                        <a href="#sponsors" className="text-white cursor-pointer">Sponsors</a>
                        <a href="#faq" className="text-white cursor-pointer">FAQ</a>
                        <a href="#contact" className="text-white cursor-pointer">Contact</a>
                    
                </div>
            </div>
            
        </div>
    )
}

export default Navbar;
