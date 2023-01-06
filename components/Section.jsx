import Image from "next/image"

import icon from "../public/icons/pin.png"
import CardSection from "./CardSection"


export default function Section() {

    return (

        <div>
            <div className="justify-center items-center text-center">
                <h1 className="text-xl md:text-4xl bold">Explore casas em sua área</h1>
                <div className="flex justify-center mt-5 space-x-4 mb-10">
                    <Image src={icon} 
                    className="w-5 h-5"
                    />
                    <h3 className="text-slate-500 text-sm md:text-xl font-bold ">
                        São Lourenço, Minas Gerais
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