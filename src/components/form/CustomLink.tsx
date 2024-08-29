import { FunctionComponent } from "react"
import { NavLink } from "react-router-dom"

type Props = {
    text: string,
    road: string,
    isBorder?: boolean
}
export const CustomLinkRed: FunctionComponent<Props> = ({ text, road }) => {
    return (
        <NavLink to={road} className={`w-full h-10 border-2 border-primary flex items-center justify-center text-sm text-white uppercase font-semibold rounded-full bg-primary`}>
            {text}
        </NavLink>
    )
}

export const CustomLinkWhite: FunctionComponent<Props> = ({ text, road, isBorder = false }) => {
    return (
        <NavLink to={road} className={`${isBorder ? 'border-2' : 'border-0'} w-full h-10 border-white flex items-center justify-center text-sm text-white uppercase px-8 font-semibold rounded-full`}>
            {text}
        </NavLink>
    )
}