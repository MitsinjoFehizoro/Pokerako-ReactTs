import { FunctionComponent, PropsWithChildren } from "react";
import { customBorder, responsivePadding } from "../../tools/tailwind";
import { LogoCol } from "../navigation/logo";

type Props = {
    title: string
}
export const BaseConnexion: FunctionComponent<PropsWithChildren<Props>> = ({ children, title }) => {
    return (
        <section className={`${responsivePadding} w-full min-h-[100vh] mt-14 flex flex-col items-center justify-center absolute bg-gradient-to-t from-background to-background/0 `} >
            <LogoCol />
            <div className={`${customBorder} w-96 p-8 rounded-md`}>
                <h1 className="uppercase font-bold text-white text-center">{title}</h1>
                {children}
            </div>
        </section>
    )
}