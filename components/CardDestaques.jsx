import Image from "next/image"
import fotoCard from "../public/bgCard.jpg"
import iconCoracao from "../public/icons/coracao.png"
import iconMais from "../public/icons/mais.png"
import flecha from "../public/icons/flecha.png"


export default function CardDestaques({ imovel, cidade, quartos, metros, preco, }) {
    return (
        <div className=" space-x-9 flex flex-row shadow m-auto">
            <div className="w-72 flex flex-col justify-start text-start bg-gray-300 rounded-md pb-5">
                <Image src={fotoCard} alt='imagem do card' className="rounded-md mb-4" />
                <div className="mx-4 ">
                    <p className="text-xl text-gray-800 font-bold mb-5 ">
                        {imovel}
                    </p>
                    <p className="text-gray-600">
                        {cidade}
                    </p>
                    <div className="flex justify-between mx-4 mb-7 text-gray-800 mt-2">
                        <p className="flex"> <Image src={flecha}
                            className="mr-4 w-5 h-auto opacity-70" />
                            {quartos}
                        </p>
                        <p>{metros}</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-gray-800">
                            {preco}
                        </p>
                        <div className="flex space-x-5">
                            <Image src={iconCoracao} width={20} />
                            <Image src={iconMais} width={20} />
                        </div>
                    </div>
                    <p className="text-start text-gray-600">
                        VENDA
                    </p>
                </div>

            </div>
        </div>
    )
}