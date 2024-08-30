import { FunctionComponent } from "react";
import { customBorder } from "../../tools/tailwind";


type Props = {
    gameName: string
    picture: string
}
export const GameCard: FunctionComponent<Props> = ({ gameName, picture }) => {
    return (
        <div className={`${customBorder} w-80 relative flex p-4 pt-8 mb-8 bg-background rounded-md`}>
            <div className="py-1 px-4 absolute top-[-1em] left-4 rounded-xl text-white text-sm bg-primary border-x-8 border-background">Texas Hold'em</div>
            <img src={picture} className="w-20 h-20" />
            <div className="ml-4 w-full">
                <p className="w-full flex justify-between items-center">
                    <h1 className="text-white text-lg font-semibold uppercase">{gameName}</h1>
                    <p className="text-xs px-2 py-1 bg-tertiary rounded">2/8 Joueurs</p>
                </p>
                <p className="text-xs mb-1 mt-1">
                    <span className="text-white">Cave : </span>
                    <span>100 / 200 MGA</span>
                </p>
                <p className="text-xs">
                    <span className="text-white">Mise : </span>
                    <span>1 000 - 20 000 MGA</span>
                </p>
            </div>
        </div>
    )
}