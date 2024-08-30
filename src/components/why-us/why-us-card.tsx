import { FunctionComponent } from "react";

type Props = {
    title: string
    description: string
    picture: string
}
export const WhyUsCard: FunctionComponent<Props> = ({ title, description, picture }) => {
    return (
        <div className="w-80 h-80 p-8 bg-secondary">
            <div className="w-20 h-20 mb-4 overflow-hidden">
                <img src={picture} className="w-20 h-20 " />
            </div>
            <h6 className="uppercase font-semibold text-white ">{title}</h6>
            <p>{description}</p>
        </div>
    )
}