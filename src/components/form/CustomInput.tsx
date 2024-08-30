import { FunctionComponent, useId, useState } from "react";
import { customBorder } from "../../tools/tailwind";

type Props = {
    fontawesome: string
    placeholder: string
}
export const CustomInput: FunctionComponent<Props> = ({ fontawesome, placeholder }) => {
    const id = useId()
    const [isActive, setIsActive] = useState(false)

    return (
        <div className="mb-4">
            <div className="relative rounded-full overflow-hidden">
                <p className={`${isActive ? 'bg-secondary text-white' : 'bg-transparent text-gray'} w-12 h-full absolute top-0 left-0 flex items-center justify-center`}>
                    <i className={`${fontawesome} ml-2 text-sm`}></i>
                </p>
                <input
                    className={`${customBorder} ${isActive ? 'text-white pl-14' : 'text-gray pl-12'} w-full h-10 flex items-center pr-4 text-sm outline-none rounded-full bg-transparent`}
                    type="text"
                    name=""
                    id={id}
                    placeholder={placeholder}
                    onFocus={() => setIsActive(true)}
                    onBlur={() => setIsActive(false)}
                />
            </div>
            {/* <p className="text-xs text-primary pt-1 px-4">Email invalide.</p> */}
        </div>


    )
}