import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";

//Layout
import HomeLayout from "../Layout/Home.Layout";

const HomeLayoutHOC = ({component: Component, ...rest}) => {
    return (
        <>
            <Routes>
                <Route 
                    component= {(props) => {
                        <HomeLayout />
                    }}
                />
            </Routes>
        </>
    );
};

export default HomeLayoutHOC;