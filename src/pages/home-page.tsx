import { FunctionComponent } from "react";
import { NavBar } from "../components/navigation/nav-bar";

export const HomePage: FunctionComponent = () => {
    return (
        <>
            <NavBar />
            <section className="w-full h-[100vh] fixed bg-background ">
                <div className=""/>
            </section>
        </>
    )
}