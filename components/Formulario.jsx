export default function Formulario() {
    return (
        <div className="mt-20 bg-blue-700 grid grid-cols-2">

            <div className="flex flex-col justify-center items-center bg-slate-300 w-full h-full ">
                <h2 className=" text-2xl uppercase text-blue-700 font-bold">
                    Localização
                </h2>
                <h3 className="mt-10">Av não sei das quantas</h3>
                <p className="mt-10 text-2xl uppercase text-blue-700 font-bold"> Siga-nos</p>
                <p> &#64;</p>
            </div>

            <div className="flex flex-col w-full text-white pt-10 pr-5">
                <form className="flex flex-col ml-5">
                    <p className="text-4xl mb-5 font-bold text-blue-300">Formulário de Contato</p>
                    <label className="mt-2">
                        Nome:
                    </label>
                    <input type="text" name="name" placeholder="Digite o seu nome"
                        className="p-2" />
                    <label className="mt-2">
                        E-mail:
                    </label>
                    <input type="text" name="name" placeholder="Digite seu e-mail"
                        className="p-2"
                    />
                    <label className="mt-2">
                        Mensagem:
                    </label>
                    <input type="text" name="name"
                        className="h-40 text-black " />
                    <input type="submit" value="Enviar"
                        className="border border-solid border-white w-1/2 mt-5 mb-10 p-2 bg-blue-700 hover:bg-blue-500"
                    />
                </form>
            </div>

        </div>
    )
}