import { titleH4 } from "../../tools/tailwind"
import { GameCard } from "./game-card"
import game1 from '../../assets/images/game1.png'
import game2 from '../../assets/images/game2.png'
import game3 from '../../assets/images/game3.png'
import game4 from '../../assets/images/game4.png'
import game5 from '../../assets/images/game5.png'
import game6 from '../../assets/images/game6.png'

export const GameVariant = () => {
    return (
        <section className="mt-20">
            <h4 className={`${titleH4} mb-8`}>
                <span>Jeux </span>
                <span className="text-primary">Disponibles.</span>
            </h4>
            <div className="flex flex-wrap items-center justify-around">
                <GameCard gameName="valiha" picture={game1} />
                <GameCard gameName="lokanga" picture={game2} />
                <GameCard gameName="kabosa" picture={game3} />
                <GameCard gameName="Angorodao" picture={game4} />
                <GameCard gameName="Banjon" picture={game5} />
                <GameCard gameName="Kalimba" picture={game6} />
            </div>
        </section>
    )
}