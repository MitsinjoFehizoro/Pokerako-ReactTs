import { FunctionComponent } from "react";
import '../../sass/components/custom-buttom.scss'

type Props = {
    text: string,
    isLoading: boolean
}
export const CustomButton: FunctionComponent<Props> = ({ text, isLoading }) => {
    return (
        <button className={`${isLoading ? 'bg-transparent' : 'bg-primary'} w-full h-10 border-2 border-primary flex items-center justify-center text-sm text-white uppercase font-semibold rounded-full bg-primary`}>
            {
                isLoading ? (
                    <p className="animateRotation w-5 h-5 rounded-full border-transparent border-l-primary border-r-primary border-4" />

                ) : (
                    <span>{text}</span>
                )
            }
        </button >
    )
}