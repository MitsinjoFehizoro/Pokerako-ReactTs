import { FunctionComponent } from "react";

type Props = {
    text: string
}
export const CustomButton: FunctionComponent<Props> = ({ text }) => {
    return (
        <button className="w-full h-10 flex items-center justify-center text-sm text-white uppercase font-semibold rounded-full bg-primary">
            {text}
        </button>
    )
}