import { FunctionComponent } from "react";
import { CustomLinkRed, CustomLinkWhite } from "../form/CustomLink";
import { titleH4 } from "../../tools/tailwind";

export const Home: FunctionComponent = () => {
    return (
        <section className="w-full h-[78vh] flex flex-col justify-end items-center">
            <h4 className={titleH4}>
                <span className="text-primary">poker</span>
                <span>ako</span>
            </h4>
            <h1 className="text-center text-[4em] font-extrabold text-white">
                <p className="mb-[-.4em]">Une plateforme</p>
                <p> en ligne pour jouer au Poker</p>
            </h1>
            <h6 className="tex
            t-lg">Misez avec Pokerako, défiez la chance et repartez gagnant !"</h6>
            <div className="flex mt-8">
                <div className="w-44">
                    <CustomLinkWhite road='' text="se connecter" isBorder={true} />
                </div>
                <p className="mx-4" />
                <div className="w-44">
                    <CustomLinkRed road='' text="s'inscrire" />
                </div>
            </div>
        </section>
    )
}