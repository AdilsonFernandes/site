import Image from "next/image"
import logo from "../../public/logo/logotipo.png"
import Burguer from "../../components/Burguer"
import Footer from "../../components/Footer"
import Wpp from "../../components/Wpp.jsx"
import CardDestaques from "../../components/CardDestaques"
import Link from "next/link"


export default function Inicio() {
    return (

        <div className="justify-center items-center  min-w-[440px]">
            <Wpp />
            <header className="fixed m-auto -mt-24 flex justify-between items-center shadow-dark bg-white w-full z-20 h-24">
                <Link href="/">
                    <Image src={logo} width={120} />
                </Link>
                <Burguer />

            </header>

            <div className=" text-white mt-24 flex flex-col justify-center text-center justify-items-center items-center h-[300px] bg-app  bg-no-repeat bg-cover">
                <div className="bg-black bg-opacity-20 h-full w-full flex flex-col justify-center">
                    <h1 className="text-6xl mb-4 filter drop-shadow-dark font-bold">
                        Casas
                    </h1>

                </div>
            </div>
            <div className="flex  flex-wrap m-10 justify-center gap-5">
                <CardDestaques />
                <CardDestaques />
                <CardDestaques />
                <CardDestaques />
                <CardDestaques />
                <CardDestaques />
                <CardDestaques />
                <CardDestaques />
                <CardDestaques />
                <CardDestaques />
                <CardDestaques />
                <CardDestaques />
                <CardDestaques />
                <CardDestaques />
                <CardDestaques />
            </div>
            <Footer />
        </div>

    )
}