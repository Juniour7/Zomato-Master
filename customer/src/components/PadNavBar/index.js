import React from "react";
import { IoMdContact } from "react-icons/io";

const PadNav = () => {
    return (
        <>
            <div className="flex justify-between w-full items-center">
                <div className="w-28 m-4">
                    <img 
                        src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
                        alt="logo"
                        className="w-full h-full"
                    />
                </div>
                <div className="w-14 h-14">
                    <span className=" text-zomato-400 ">
                        <IoMdContact className="w-full h-full"/>
                    </span>
                </div>
            </div>
        </>
    );
};

const PadNavBar = () => {
    return (
        <>
            <nav className="bg-white w-full shadow-md hidden lg:hidden md:block">
                <PadNav />
            </nav>
        </>
    );
};

export default PadNavBar;