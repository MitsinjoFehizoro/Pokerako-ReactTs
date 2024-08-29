import { FunctionComponent } from "react";
import { NavBar } from "../components/navigation/nav-bar";
import { BgFixed } from "../components/home/bg-fixed";
import { Home } from "../components/home/home";


export const HomePage: FunctionComponent = () => {
    return (
        <>
            <NavBar />
            <BgFixed />
            <Home />
        </>
    )
}