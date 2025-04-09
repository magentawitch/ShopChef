import React from "react";
import Header from "../Header/Header";
import NavBar from "../Navigation/NavBar";
import { Outlet } from "react-router-dom";


function Root() {
    return (
        <>
            <Header />
            <NavBar />
            <Outlet />
        </>
    )
}

export default Root;