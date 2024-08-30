import { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";
import { CustomLinkRed, CustomLinkWhite } from "../form/CustomLink";
import { LogoRow } from "./logo";

export const NavBar: FunctionComponent = () => {

    return (
        <nav className="flex fixed top-0 left-0 z-50 justify-around items-center w-full bg-background border-b-[1px] border-gray/10">
            <LogoRow />
            <div className="flex">
                <NavLink to='' className='uppercase text-xs px-4'>accueil</NavLink>
                <NavLink to='' className='uppercase text-xs px-4'>Jouer</NavLink>
                <NavLink to='' className='uppercase text-xs px-4'>Tournoi</NavLink>
                <NavLink to='' className='uppercase text-xs px-4'>à propos</NavLink>
                <NavLink to='' className='uppercase text-xs px-4'>Comment jouer ?</NavLink>

            </div>
            <div className="flex">
                <div className="w-40">
                    <CustomLinkWhite text="se connecter" road="/login" />
                </div>
                <div className="w-32">
                    <CustomLinkRed text="s'inscrire" road="/signup" />
                </div>
            </div>
        </nav>
    )
}