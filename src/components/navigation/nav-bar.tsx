import { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";
import logo from '../../assets/logo/logo.png'
import logo_long from '../../assets/logo/logo-long.png'
import { CustomLinkRed, CustomLinkWhite } from "../form/CustomLink";

export const NavBar : FunctionComponent = () =>{

    return (
        <nav className="flex fixed top-0 left-0 z-50 justify-around items-center w-full bg-background border-b-[1px] border-gray/10">
                <div className="flex items-center">
                    <img src={logo} className="w-20" alt="" />
                    <img src={logo_long} className="h-12" />
                </div>
                <div className="flex">
                    <NavLink to='' className='uppercase text-xs px-4'>accueil</NavLink>
                    <NavLink to='' className='uppercase text-xs px-4'>Jouer</NavLink>
                    <NavLink to='' className='uppercase text-xs px-4'>Tournoi</NavLink>
                    <NavLink to='' className='uppercase text-xs px-4'>à propos</NavLink>
                    <NavLink to='' className='uppercase text-xs px-4'>Comment jouer ?</NavLink>

                </div>
                <div className="flex">
                    <div className="w-40">
                        <CustomLinkWhite text="se connecter" road="" />
                    </div>
                    <div className="w-32">
                        <CustomLinkRed text="s'inscrire" road="" />
                    </div>
                </div>
            </nav>
    )
}