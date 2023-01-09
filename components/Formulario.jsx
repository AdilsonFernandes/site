import { useState } from "react"


export default function Formulario() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    function sendEmail(e) {
        e.preventDefault();

        if (name === "" || email === "" || message === "") {
            alert("Preencha todos os campos")
            return;
        }
        alert("teste")
    }

    return (
        <div className="grid grid-cols-1 mt-20 bg-blue-700 md:grid md:grid-cols-2  ">

            <div className="flex flex-col justify-center items-center bg-slate-300 w-full h-full ">
                <h2 className=" text-2xl uppercase text-blue-700 font-bold">
                    Localização
                </h2>
                <h3 className="mt-10">Av não sei das quantas</h3>
                <p className="mt-10 text-2xl uppercase text-blue-700 font-bold"> Siga-nos</p>
                <p> &#64;</p>
            </div>

            <div className="flex flex-col w-full text-white pt-10 pr-5">
                <form className="flex flex-col ml-5"
                    onSubmit={sendEmail}
                >
                    <p className="text-4xl mb-5 font-bold text-blue-300">Formulário de Contato</p>
                    <label className="mt-2">
                        Nome:
                    </label>
                    <input type="text" name="name" placeholder="Digite o seu nome"
                        className="p-2 rounded text-black"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />

                    <label className="mt-2">
                        E-mail:
                    </label>
                    <input type="text" name="name" placeholder="Digite seu e-mail"
                        className="p-2 rounded text-black"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                    <label className="mt-2">
                        Mensagem:
                    </label>


                    <textarea
                        className="h-48 rounded p-2 text-black"
                        placeholder="Digite sua mensagem..."
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                    />
                    <input type="submit" value="Enviar"
                        className="border border-solid border-white rounded w-1/2 mt-5 mb-10 p-2 bg-blue-500 hover:bg-blue-700"
                    />
                </form>
            </div>

        </div>
    )
}

