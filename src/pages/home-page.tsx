import { FunctionComponent } from "react";
import { NavBar } from "../components/navigation/nav-bar";
import { BgFixed } from "../components/home/bg-fixed";
import { Home } from "../components/home/home";
import { WhyUs } from "../components/why-us/why-us";
import { responsivePadding } from "../tools/tailwind";
import { GameVariant } from "../components/game/game-variant";


export const HomePage: FunctionComponent = () => {
    return (
        <>
            <NavBar />
            <BgFixed />
            <section className={`${responsivePadding} absolute w-full pb-14 bg-gradient-to-t from-background`}>
                <Home />
                <GameVariant />
                <WhyUs />
                <Footer />
            </section>
        </>
    )
}