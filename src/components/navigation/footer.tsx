import { FunctionComponent } from "react";
import { responsivePadding } from "../../tools/tailwind";
import logo from '../../assets/logo/logo.png'
import logo_long from '../../assets/logo/logo-long.png'

export const Footer: FunctionComponent = () => {
    return (
        <footer className={`${responsivePadding} w-full justify-around py-14`}>
            <div className="flex items-center">
                <img src={logo} className="w-20" alt="" />
                <img src={logo_long} className="h-12" />
            </div>
        </footer>
    )
}