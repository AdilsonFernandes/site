import Link from "next/link"

export default function CardSection({ qtdPropriedades }) {
    return (
        <div className="flex flex-wrap ">

            <div className="m-5">
                <Link href='/???' className=" rounded transition bg-bgCasa bg-cover text-white w-96 h-64 flex flex-col justify-center items-center content-center drop-shadow-dark">
                    <div className=" bg-black px-[132px] py-24 hover:bg-opacity-0 hover:transition bg-opacity-30 rounded-sm">
                        <p className="text-4xl drop-shadow-dark transition  ">
                            Casa
                        </p>
                        <h3 className="drop-shadow-dark ">
                            {qtdPropriedades}
                        </h3>
                    </div>
                </Link>
            </div>

            <div className="m-5">
                <Link href='/???' className=" rounded transition bg-bgAp bg-cover text-white w-96 h-64 flex flex-col justify-center items-center content-center drop-shadow-dark">
                    <div className=" bg-black px-[75px] py-24 hover:bg-opacity-0 hover:transition bg-opacity-30 rounded-sm">
                        <p className="text-4xl drop-shadow-dark transition  ">
                            Apartamentos
                        </p>
                        <h3 className="drop-shadow-dark ">
                            {qtdPropriedades}
                        </h3>
                    </div>
                </Link>
            </div>

            <div className="m-5">
                <Link href='/???' className=" rounded transition bg-bgLote bg-cover text-white w-96 h-64 flex flex-col justify-center items-center content-center drop-shadow-dark">
                    <div className=" bg-black px-[132px] py-24 hover:bg-opacity-0 hover:transition bg-opacity-30 rounded-sm">
                        <p className="text-4xl drop-shadow-dark transition  ">
                            Lotes
                        </p>
                        <h3 className="drop-shadow-dark ">
                            {qtdPropriedades}
                        </h3>
                    </div>
                </Link>
            </div>

            <div className="m-5">
                <Link href='/???' className=" rounded transition bg-bgCasa bg-cover text-white w-96 h-64 flex flex-col justify-center items-center content-center drop-shadow-dark">
                    <div className=" bg-black px-[110px] py-24 hover:bg-opacity-0 hover:transition bg-opacity-30 rounded-sm">
                        <p className="text-4xl drop-shadow-dark transition  ">
                            Área rural
                        </p>
                        <h3 className="drop-shadow-dark ">
                            {qtdPropriedades}
                        </h3>
                    </div>
                </Link>
            </div>

            <div className="m-5">
                <Link href='/???' className=" rounded transition bg-bgComercial bg-cover text-white w-96 h-64 flex flex-col justify-center items-center content-center drop-shadow-dark">
                    <div className=" bg-black px-[110px] py-24 hover:bg-opacity-0 hover:transition bg-opacity-30 rounded-sm">
                        <p className="text-4xl drop-shadow-dark transition  ">
                            Comercial
                        </p>
                        <h3 className="drop-shadow-dark ">
                            {qtdPropriedades}
                        </h3>
                    </div>
                </Link>
            </div>

            <div className="m-5">
                <Link href='/???' className=" rounded transition bg-bgAp bg-cover text-white w-96 h-64 flex flex-col justify-center items-center content-center drop-shadow-dark">
                    <div className=" bg-black px-[124px] py-24 hover:bg-opacity-0 hover:transition bg-opacity-30 rounded-sm">
                        <p className="text-4xl drop-shadow-dark transition  ">
                            Sobrado
                        </p>
                        <h3 className="drop-shadow-dark ">
                            {qtdPropriedades}
                        </h3>
                    </div>
                </Link>
            </div>
        </div>

    )
}


// Casas APartamentos lotes area rural comercial sobrado 