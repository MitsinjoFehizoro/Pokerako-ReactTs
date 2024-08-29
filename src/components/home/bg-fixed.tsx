import { FunctionComponent } from "react";
import card1 from '../../assets/images/card1.png'
import card2 from '../../assets/images/card2.png'
import jeton1 from '../../assets/images/jeton1.png'
import jeton2 from '../../assets/images/jeton2.png'
import jeton3 from '../../assets/images/jeton3.png'
import jeton4 from '../../assets/images/jeton4.png'
import jeton5 from '../../assets/images/jeton5.png'

export const BgFixed: FunctionComponent = () => {
    return (
        <section className="w-full h-[100vh] fixed bg-background ">
            <div className="h-72 w-72 absolute top-[-5em] right-[-5em] blur-3xl rounded-full bg-gradient-to-tr from-tertiary" />
            <img src={card1} className="w-36 absolute top-56 left-24" />
            <img src={card2} className="w-44 absolute top-20 right-[-3em] rotate-45" />
            <img src={jeton1} className="w-56 absolute bottom-12 right-4 rotate-12" />
            <img src={jeton2} className="w-32 absolute bottom-64 right-36" />
            <img src={jeton3} className="w-48 z-10 absolute bottom-0 left-8 " />
            <img src={jeton4} className="w-36 absolute bottom-56 left-36 -rotate-12" />
            <img src={jeton5} className="w-32 absolute top-28 left-10" />
            {/* <div className="w-full h-[100vh] flex justify-center items-center">
                    <img src={card3} className="w-80 mt-28" />
                </div> */}
            <div className="h-72 w-72 absolute bottom-[-5em] left-[-5em] blur-3xl rounded-full bg-gradient-to-bl from-tertiary" />
        </section>
    )
}