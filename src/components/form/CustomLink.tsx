import { FunctionComponent } from "react"
import { NavLink } from "react-router-dom"

type Props = {
    text: string,
    road: string
}
export const CustomLinkRed: FunctionComponent<Props> = ({ text, road }) => {
    return (
        <NavLink to={road} className="w-full h-8 border-2 border-primary flex items-center justify-center text-xs text-white uppercase px-8 font-semibold rounded-full bg-primary">
            {text}
        </NavLink>
    )
}

export const CustomLinkWhite: FunctionComponent<Props> = ({ text, road }) => {
    return (
        <NavLink to={road} className="w-full h-8 border-0 border-white flex items-center justify-center text-xs text-white uppercase px-8 font-semibold rounded-full">
            {text}
        </NavLink>
    )
}