
import CardSection from "./CardSection"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function Section({ localidade }) {

    return (

        <div>
            <div className="justify-center items-center text-center">
                <h1 className=" flex justify-center items-center text-center text-xl md:text-4xl font-bold text-blue-700">
                    Explore casas em sua área
                </h1>

                <div className="flex justify-center mt-5 space-x-4 mb-10">
                    <h3 className="text-slate-500 text-sm md:text-xl font-bold flex justify-center items-center">
                        <FontAwesomeIcon icon={faLocationDot} className="text-gray-600 text-2xl mr-2" />
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