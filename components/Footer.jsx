import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
    return (
        <div>
            <div className="flex flex-col md:grid md:grid-cols-4 bg-blue-500 text-white p-16 text-2xl">
                <div className="flex flex-col justify-start items-start">
                    <p className="font-bold pb-5 ">
                        Institucional
                    </p>
                    <Link href='/teste'>
                        <p className="text-sm fa-solid">

                        <FontAwesomeIcon icon="fa-solid fa-arrow-right"className="px-2" />  Quem Somos
                        </p>
                    </Link>
                    <Link href='/teste'>
                        <p className="text-sm mt-2">
                        <FontAwesomeIcon icon="fa-solid fa-arrow-right"className="px-2" /> História
                        </p>
                    </Link>
                </div>

                <div className="flex flex-col justify-start items-start">
                    <p className="font-bold pb-5">Imóveis</p>
                    <Link href='/teste'>
                        <p className="text-sm ">
                        <FontAwesomeIcon icon="fa-solid fa-arrow-right"className="px-2" /> Casa
                        </p>
                    </Link>
                    <Link href='/teste'>
                        <p className="text-sm mt-2">
                        <FontAwesomeIcon icon="fa-solid fa-arrow-right"className="px-2" />  Apartamento
                        </p>
                    </Link>
                    <Link href='/teste'>
                        <p className="text-sm mt-2">
                        <FontAwesomeIcon icon="fa-solid fa-arrow-right" className="px-2"/>  Lotes
                        </p>
                    </Link>
                    <Link href='/teste'>
                        <p className="text-sm mt-2">
                        <FontAwesomeIcon icon="fa-solid fa-arrow-right"className="px-2" />  Comercial
                        </p>
                    </Link>
                    <Link href='/teste'>
                        <p className="text-sm mt-2 ">
                        <FontAwesomeIcon icon="fa-solid fa-arrow-right"className="px-2" /> Área Rural
                        </p>
                    </Link>
                </div>
                <div className="flex flex-col justify-start items-start">
                    <p className="font-bold pb-5">Serviços</p>
                    <Link href='/teste'>
                        <p className="text-sm ">
                        <FontAwesomeIcon icon="fa-solid fa-arrow-right"className="px-2" />Venda
                        </p>
                    </Link>
                    <Link href='/teste'>
                        <p className="text-sm mt-2">
                        <FontAwesomeIcon icon="fa-solid fa-arrow-right"className="px-2" /> Locação
                        </p>
                    </Link>
                </div>
                <div className="flex flex-col justify-start items-start">
                    <p className="font-bold pb-5">Contato</p>
                    <Link href='/teste'>
                        <p className="text-sm ">
                        <FontAwesomeIcon icon="fa-solid fa-arrow-right" className="px-2"/> Map-marker: Endereço do local
                        </p>
                    </Link>
                    <Link href='/teste'>
                        <p className="text-sm mt-2">
                        <FontAwesomeIcon icon="fa-solid fa-arrow-right" className="px-2" />  História
                        </p>
                    </Link>
                </div>


            </div>
            <div className="flex justify-center  bg-gray-300 text-blue-700 p-2 font-bold">
                <p>Developed by Susi Technologies - 2023 - All Rights Reserved</p>

            </div>
        </div>
    )
}