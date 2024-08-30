import { FunctionComponent, } from "react";
import { Outlet } from "react-router-dom";
import { NavBar } from "../components/navigation/nav-bar";
import { BgFixed } from "../components/home/bg-fixed";

export const Root: FunctionComponent = () => {

    return (
        <>
            <NavBar />
            <BgFixed />
            <Outlet />
        </>
    )
}
