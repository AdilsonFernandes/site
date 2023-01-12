import Image from "next/image"
import logo from "../../public/logo/logotipo.png"
import Burguer from "../../components/Burguer"
import Footer from "../../components/Footer"
import Wpp from "../../components/Wpp.jsx"
import Formulario from "../../components/Formulario"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons"

import Link from "next/link"

export default function about() {
    return (

        <div className="justify-center items-center  min-w-[440px]">
            <Wpp/>
            <header className="fixed m-auto -mt-24 flex justify-between items-center shadow-dark bg-white w-full z-20 h-24">
                <Image src={logo} width={120} />
                <Burguer/>
            </header>

            <div className="mt-24 text-white flex flex-col justify-center text-center justify-items-center items-center h-[300px] bg-app  bg-no-repeat bg-cover">
                <div className="bg-black bg-opacity-20 h-full w-full flex flex-col justify-center">
                    <h1 className="text-6xl mb-4 filter drop-shadow-dark font-bold">
                        Contato
                    </h1>

                </div>
            </div>
            <div className="-mt-20">
           <Formulario/>
           </div>
            <div className="m-20 flex flex-col justify-center items-center font-bold ">
                <h2 className="text-blue-700 text-2xl mb-5">
                    Redes Sociais
                </h2>
                <div className="text-blue-700 space-x-5">
                    <Link href="/insta">
                        <FontAwesomeIcon icon={faInstagram} className="px-2 text-4xl" />
                    </Link>
                    <Link href="/insta">
                        <FontAwesomeIcon icon={faFacebook} className="px-2 text-4xl" />
                    </Link>
                </div>

            </div>
            <Footer />
        </div>





    )
}