import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    const data = new Date();
    const ano = data.getFullYear();
    return (
        <div>
            <div className="flex flex-col md:grid md:grid-cols-4 bg-blue-500 text-white p-16 text-2xl">
                <div className="flex flex-col justify-start items-start">
                    <p className="font-bold pb-5 pt-5 ">
                        Institucional
                    </p>
                    <Link href='/teste'>
                        <p className="text-sm fa-solid">

                            <FontAwesomeIcon icon={faChevronCircleRight} className="px-2" />  Quem Somos
                        </p>
                    </Link>
                    <Link href='/teste'>
                        <p className="text-sm mt-2">
                            <FontAwesomeIcon icon={faChevronCircleRight} className="px-2" /> História
                        </p>
                    </Link>
                </div>

                <div className="flex flex-col justify-start items-start">
                    <p className="font-bold pb-5 pt-5">Imóveis</p>
                    <Link href='/teste'>
                        <p className="text-sm ">
                            <FontAwesomeIcon icon={faChevronCircleRight} className="px-2" /> Casa
                        </p>
                    </Link>
                    <Link href='/teste'>
                        <p className="text-sm mt-2">
                            <FontAwesomeIcon icon={faChevronCircleRight} className="px-2" />  Apartamento
                        </p>
                    </Link>
                    <Link href='/teste'>
                        <p className="text-sm mt-2">
                            <FontAwesomeIcon icon={faChevronCircleRight} className="px-2" />  Lotes
                        </p>
                    </Link>
                    <Link href='/teste'>
                        <p className="text-sm mt-2">
                            <FontAwesomeIcon icon={faChevronCircleRight} className="px-2" />  Comercial
                        </p>
                    </Link>
                    <Link href='/teste'>
                        <p className="text-sm mt-2 ">
                            <FontAwesomeIcon icon={faChevronCircleRight} className="px-2" /> Área Rural
                        </p>
                    </Link>
                </div>
                <div className="flex flex-col justify-start items-start">
                    <p className="font-bold pb-5 pt-5">Serviços</p>
                    <Link href='/teste'>
                        <p className="text-sm ">
                            <FontAwesomeIcon icon={faChevronCircleRight} className="px-2" />Venda
                        </p>
                    </Link>
                    <Link href='/teste'>
                        <p className="text-sm mt-2">
                            <FontAwesomeIcon icon={faChevronCircleRight} className="px-2"/>Locação
                        </p>
                    </Link>
                </div>
                <div className="flex flex-col justify-start items-start">
                    <p className="font-bold pb-5 pt-5">Contato</p>
                    <Link href='/teste'>
                        <p className="text-sm flex items-center -mx-2">
                            <FontAwesomeIcon icon={faChevronCircleRight} className="px-2" />
                            Av Damião Junqueira de Souza, 351, São Lourenço-Mg
                        </p>
                        <p className="text-sm px-7">
                            
                        </p>
                    </Link>
                    <Link href='/teste'>
                        <p className="font-bold pb-5 pt-10">Redes Sociais</p>
                        <div className="-m-1">
                            <FontAwesomeIcon icon={faInstagram} className="px-2 text-xl" />
                            <FontAwesomeIcon icon={faFacebook} className="px-2 text-xl" />
                        </div>


                    </Link>

                </div>


            </div>
            <div className="flex flex-col md:flex-row justify-center items-center text-center bg-gray-300 text-blue-700 p-2 font-bold">
                <Link href="https://www.susitech.dev/">Developed by Susi Technologies-</Link> <span className="ml-2 mr-2">{ano} All Rights Reserved</span>
            </div>
        </div>
    )
}