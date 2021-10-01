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
                    className={`${active ? '' : 'hidden'} flex w-auto text-md mt-44  md:flex md:mt-0 text-lg `}
                >
                    <div className="flex flex-col w-[200px] items-center ml-auto bg-[#030035] md:flex-row space-x-4 ">
                        <a href="#about" className="text-white rounded-lg cursor-pointer">About</a>
                        <a href="#schedule" className="text-white rounded-lg cursor-pointer">Schedule</a>
                        <a href="#speakers" className="text-white rounded-lg cursor-pointer">Speakers</a>
                        <a href="#sponsors" className="text-white rounded-lg cursor-pointer">Sponsors</a>
                        <a href="#faq" className="text-white rounded-lg cursor-pointer">FAQ</a>
                        <a href="#contact" className="text-white rounded-lg cursor-pointer">Contact</a>
                    </div>
                    
                </div>
            </div>
            
        </div>
    )
}

export default Navbar;
