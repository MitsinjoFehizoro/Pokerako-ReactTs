import { FunctionComponent } from "react";
import { CustomLinkRed, CustomLinkWhite } from "../form/CustomLink";

export const Home: FunctionComponent = () => {
    return (
        <section className="w-full h-[100vh] absolute flex flex-col justify-center items-center">
            <p className="uppercase text-xl font-semibold">
                <span className="text-primary">poker</span>
                <span className="text-white">ako</span>
            </p>
            <h1 className="text-center text-[4em] font-extrabold text-white">
                <p className="mb-[-.4em]">Une plateforme</p>
                <p> en ligne pour jouer au Poker</p>
            </h1>
            <h6 className="text-lg">Misez avec Pokerako, défiez la chance et repartez gagnant !"</h6>
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