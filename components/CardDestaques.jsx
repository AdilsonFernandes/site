import Image from "next/image"
import fotoCard from "../public/bgCard.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChevronCircleRight,faHeart,faPlus} from "@fortawesome/free-solid-svg-icons";


export default function CardDestaques({ imovel, cidade, quartos, metros, preco, }) {
    return (
        <div className="flex flex-col items-center justify-center ">
            <div className="w-96 md:w-72 flex flex-col text-start rounded-md bg-gray-300 pb-5">
                <Image src={fotoCard} alt='imagem do card' className=" rounded-md mb-4" />
                <div className="mx-4">
                    <p className="text-xl text-gray-800 font-bold mb-5 ">
                        {imovel}
                    </p>
                    <p className="text-gray-600">
                        {cidade}
                    </p>
                    <div className="flex justify-between items-center text-gray-800 mt-2 mb-7">
                        <p>
                        <FontAwesomeIcon icon={faChevronCircleRight} className=" mr-2 text-gray-600"/>
                        {quartos}
                        </p>
                        <p>{metros}</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <p className="text-blue-700 font-bold ">
                            {preco}
                        </p>
                        <div className="space-x-5">
                            <button className="text-gray-600 text-3xl font-bold">
                                <FontAwesomeIcon icon={faHeart} className="text-2xl "/>
                            </button>
                            
                        </div>
                    </div>
                    <p className="text-start text-gray-600">
                        VENDA
                    </p>
                    <div className="mt-5 flex justify-center items-center ">
                        <button className="bg-blue-700 rounded text-white p-1 px-5 hover:bg-blue-500 transition-all"> Detalhes</button>
                    </div>
                </div>

            </div>
        </div>
    )
}