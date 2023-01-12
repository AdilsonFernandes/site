import Image from "next/image"
import logo from "../../public/logo/logotipo.png"
import Burguer from "../../components/Burguer"
import Footer from "../../components/Footer"
import Wpp from "../../components/Wpp.jsx"

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
            <p className="text-center m-20">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, sequi iusto? Veniam ullam eaque laudantium quo maxime ad unde sit qui repellat itaque nihil non ratione, beatae, velit blanditiis atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus laborum iure autem qui labore aliquam, perferendis ad saepe dolor consequuntur id cupiditate esse facilis asperiores natus veniam itaque quasi soluta!
            </p>
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
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59140.75163940865!2d-45.035071699999996!3d-22.11464995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cb4b8cb2d429cd%3A0xc1b7ad10ef14c37c!2zU8OjbyBMb3VyZW7Dp28gLSBNRw!5e0!3m2!1spt-BR!2sbr!4v1673290214614!5m2!1spt-BR!2sbr"

                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                className="w-full h-[600px] border-r-2 border-solid border-blue-400"
            >
            </iframe>
            <Footer />
        </div>





    )
}