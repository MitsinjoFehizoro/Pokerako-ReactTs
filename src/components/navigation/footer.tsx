import { FunctionComponent } from "react";
import { responsivePadding } from "../../tools/tailwind";
import { LogoCol } from "./logo";
import { NavLink } from "react-router-dom";

export const Footer: FunctionComponent = () => {
    return (
        <section className={`${responsivePadding} w-full justify-around pt-14 text-gray`}>
            <LogoCol />
            <div className="text-white text-lg flex justify-center my-4">
                <p className="pr-8">Joueurs en ligne : 25</p>
                <p>Joueurs actifs : 8</p>
            </div>
            <div className="flex justify-center">
                <NavLink to='' className='px-4'>Pokerako</NavLink>
                <NavLink to='' className='px-4'>Administrateurs</NavLink>
                <NavLink to='' className='px-4'>Forums</NavLink>
                <NavLink to='' className='px-4'>Conditions</NavLink>
                <NavLink to='' className='px-4'>Confidentialié</NavLink>
                <NavLink to='' className='px-4'>Règles du site</NavLink>
            </div>
            <div className="flex justify-center text-lg my-4">
                <NavLink to='' className='px-4'><i className="fa-brands fa-facebook"></i></NavLink>
                <NavLink to='' className='px-4'><i className="fa-brands fa-instagram"></i></NavLink>
                <NavLink to='' className='px-4'><i className="fa-solid fa-envelope"></i></NavLink>
                <NavLink to='' className='px-4'><i className="fa-solid fa-square-phone"></i></NavLink>
            </div>
            <footer className=" pt-4 pb-8 flex flex-col items-center  text-sm">
                <p className="mb-1">Pour une expérience de jeu responsable, Pokerako est exclusivement réservé aux joueurs âgés de 18 ans et plus. </p>
                <p><i className="fa fa-copyright mr-2"></i>Powered by MitsinjoFehizoro - 2024</p>
            </footer>
        </section>
    )
}