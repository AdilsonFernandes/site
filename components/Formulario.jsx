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
                <h2 className=" text-2xl uppercase text-blue-700 font-bold mb-5">
                    Localização
                </h2>

                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59140.75163940865!2d-45.035071699999996!3d-22.11464995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cb4b8cb2d429cd%3A0xc1b7ad10ef14c37c!2zU8OjbyBMb3VyZW7Dp28gLSBNRw!5e0!3m2!1spt-BR!2sbr!4v1673290214614!5m2!1spt-BR!2sbr"
                    
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    className="w-full h-96"
                    >
                </iframe>


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

