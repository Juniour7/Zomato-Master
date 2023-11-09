import React from "react";

//components
import NavBar from "../components/NavBar";
import PadNavBar from "../components/PadNavBar";
import LgNav from "../components/LgNavBar";
import FoodTab from "../components/FoodTab";
import Delivery from "../components/Delivery/index";


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
            <FoodTab />
        </>
    );
};

export default HomeLayout;