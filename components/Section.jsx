
import CardSection from "./CardSection"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Section({ localidade }) {

    return (

        <div>
            <div className="justify-center items-center text-center">
                <h1 className="text-xl md:text-4xl font-bold text-blue-700">
                    <FontAwesomeIcon icon="fa-solid fa-location-dot" className="px-5 text-2xl text-gray-600"/>
                    Explore casas em sua área
                </h1>
                <div className="flex justify-center mt-5 space-x-4 mb-10">
                    <h3 className="text-slate-500 text-sm md:text-xl font-bold ">
                        {localidade}
                    </h3>
                    <button className="text-sm">
                        Mudar localidade
                    </button>
                </div>
                <CardSection
                    qtdPropriedades='18 propriedades'
                />
            </div>
        </div>
    )
}