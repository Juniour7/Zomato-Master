import React from "react";

//components
import NavBar from "../NavBar/index";
import PadNavBar from "../PadNavBar";
import LgNav from "../LgNavBar";


const HomeLayout = (props) => {
    return (
        <>
            <div className="container mx-auto">
                <NavBar />
                {props.children}
            </div>
            <PadNavBar />
            <div className="container mx-auto">
                <LgNav />
            </div>
        </>
    );
};

export default HomeLayout;