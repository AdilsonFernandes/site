import Image from "next/image"
import logo from "../../public/logo/logotipo.png"
import Burguer from "../../components/Burguer"
import Footer from "../../components/Footer"

export default function about() {
    return (

        <div className="w-full ">
            <header className="fixed m-auto -mt-24 flex justify-between items-center shadow-dark bg-white w-full z-20 h-24">
                <Image src={logo} width={120} />
                <Burguer/>

            </header>

            <div className="mt-24 text-white flex flex-col justify-center text-center justify-items-center items-center h-[300px] bg-app  bg-no-repeat bg-cover">
                <div className="bg-black bg-opacity-20 h-full w-full flex flex-col justify-center">
                    <h1 className="text-6xl mb-4 filter drop-shadow-dark font-bold">
                        Sobre nós
                    </h1>
                    
                </div>
            </div>
            <p className="text-center m-20">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, sequi iusto? Veniam ullam eaque laudantium quo maxime ad unde sit qui repellat itaque nihil non ratione, beatae, velit blanditiis atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus laborum iure autem qui labore aliquam, perferendis ad saepe dolor consequuntur id cupiditate esse facilis asperiores natus veniam itaque quasi soluta!
            </p>
            <Footer/>
        </div>





    )
}