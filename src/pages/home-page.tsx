import { FunctionComponent } from "react";
import { Home } from "../components/home/home";
import { WhyUs } from "../components/why-us/why-us";
import { responsivePadding } from "../tools/tailwind";
import { GameVariant } from "../components/game/game-variant";
import { Footer } from "../components/navigation/footer";


export const HomePage: FunctionComponent = () => {
    return (
        <section className={`${responsivePadding} absolute w-full bg-gradient-to-t from-background to-background/10`}>
            <Home />
            <GameVariant />
            <WhyUs />
            <Footer />
        </section>
    )
}