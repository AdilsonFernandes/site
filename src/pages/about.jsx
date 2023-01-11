import Image from "next/image"
import logo from "../../public/logo/logotipo.png"
import Burguer from "../../components/Burguer"
import Footer from "../../components/Footer"

export default function Inicio() {
    return (

        <div className="mb-16 w-full ">
            <header className="m-auto flex justify-between items-center shadow-dark relative  h-24">
                <Image src={logo} width={120} />
                <Burguer />

            </header>

            <div className=" text-white flex flex-col justify-center text-center justify-items-center items-center h-[300px] bg-app  bg-no-repeat bg-cover">
                <div className="bg-black bg-opacity-20 h-full w-full flex flex-col justify-center">
                    <h1 className="text-6xl mb-4 filter drop-shadow-dark font-bold">
                        Encontre o imóvel perfeito
                    </h1>
                    <h2 className="drop-shadow-dark text-xl">
                        Sobre nós
                    </h2>
                </div>
            </div>
            <p className="text-center m-20">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, sequi iusto? Veniam ullam eaque laudantium quo maxime ad unde sit qui repellat itaque nihil non ratione, beatae, velit blanditiis atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus laborum iure autem qui labore aliquam, perferendis ad saepe dolor consequuntur id cupiditate esse facilis asperiores natus veniam itaque quasi soluta!
                    </p>
                    <Footer/>
        </div>





    )
}