import Image from "next/image"
import Link from "next/link"
//import Carrossel from "./Bootstrap.jsx"
import logo from "../public/logo/logotipo.png"

export default function Inicio() {
    return (
        <div className="mb-16  ">
            <header className="flex justify-between items-center shadow-dark relative w-full h-24">
                <Image src={logo} width={120} />
                <nav className="space-x-8 mx-10" >

                    <Link href="/contato" className="tracking-wide hover:text-blue-700 transition-all">
                        Início
                    </Link>
                    <Link href="/contato" className="tracking-wide hover:text-blue-700">
                        Sobre nós
                    </Link>
                    <Link href="/contato" className="tracking-wide hover:text-blue-700">
                        São Lourenço
                    </Link>
                    <Link href="/contato" className="tracking-wide hover:text-blue-700">
                        Imóveis
                    </Link>
                    <Link href="/contato" className="tracking-wide hover:text-blue-700">
                        Contato
                    </Link>
                </nav>
            </header>

            <div className=" text-white flex flex-col justify-center justify-items-center items-center w-auto bg-app  h-[600px] bg-no-repeat bg-cover">

                <h1 className="text-6xl mb-4 filter drop-shadow-dark font-bold">
                    Encontre o imóvel perfeito
                </h1>
                <h3 className="mb-4 filter drop-shadow-dark text-3xl">
                    Temos os melhores imóveis da Região
                </h3>
                <div className="space-x-4 ">
                    <input type="text"
                        placeholder="Onde você quer morar?"
                        className="p-4 bg-bgIcon bg-no-repeat bg-left text-center text-slate-600 rounded-md"
                    />
                    <button className="bg-blue-700 hover:bg-blue-500 p-4 rounded-md">
                        Procurar
                    </button>
                </div>
            </div>

        </div>





    )
}