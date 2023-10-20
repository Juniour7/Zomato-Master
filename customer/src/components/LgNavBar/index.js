import React from "react";
import { ImLocation } from "react-icons/im";
import { AiFillCaretDown, AiOutlineSearch } from "react-icons/ai";

const LgNavBar = () => {
    return(
        <>
            <div className="flex items-center gap-5 my-4">
                <div className="w-32">
                    <img 
                        src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
                        alt="logo"
                        className="w-full h-full"
                    />
                </div>
                <div>
                    <div className="relative">
                        <div className="border-solid border rounded-lg shadow-lg">  
                            <input 
                                type="text"
                                className="pl-10 pr-4 py-3 rounded-lg"
                                placeholder="Block B, Jaypee Greens"
                            />
                            <input 
                                type="text"
                                className="w-96 pl-10 pr-4 py-3 rounded-lg"
                                placeholder="Search for resaurant, cuisine or a dish"
                            />
                            <div className="absolute inset-y-0 left-0  pl-3 flex items-center pointer-events-none">
                                <span className="text-zomato-300">
                                    <ImLocation />
                                </span>
                            </div>
                            <div className="absolute inset-y-0 right-0  pl-3 pr-3 flex items-center pointer-events-none">
                                <span className="text-gray-600">
                                    <AiFillCaretDown />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <button>Log in</button>
                    <button>Sign up</button>
                </div>
            </div>
        </>
    );
};

const LgNav = () => {
    return (
        <>
            <nav className="hidden lg:flex bg-white">
                <LgNavBar />
            </nav>
        </>
    );
};

export default LgNav;