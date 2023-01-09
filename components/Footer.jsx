import Link from "next/link";

export default function Footer() {
    return (
        <div>
            <div className="flex flex-col justify-center items-center text-center md:grid md:grid-cols-4 bg-blue-500 text-white p-16 text-2xl">
                <div>
                    <p>Institucional</p>
                    <Link href='/teste'>
                        <p className="text-sm ">
                            &#10148;Teste
                        </p>
                    </Link>
                    <Link href='/teste'>
                        <p className="text-sm mt-2">
                            &#10148;Teste
                        </p>
                    </Link>
                    <Link href='/teste'>
                        <p className="text-sm mt-2">
                            &#10148;Teste
                        </p>
                    </Link>
                </div>
                <div>
                    <p>Imóvies</p>
                    <Link href='/teste'>
                        <p className="text-sm mt-2">
                            &#10148;Teste
                        </p>
                    </Link>
                    <Link href='/teste'>
                        <p className="text-sm mt-2">
                            &#10148;Teste
                        </p>
                    </Link>
                    <Link href='/teste'>
                        <p className="text-sm mt-2">
                            &#10148;Teste
                        </p>
                    </Link>
                </div>
                <div>
                    <p>Serviços</p>
                    <Link href='/teste'>
                        <p className="text-sm mt-2">
                            &#10148;Teste
                        </p>
                    </Link>
                    <Link href='/teste'>
                        <p className="text-sm mt-2">
                            &#10148;Teste
                        </p>
                    </Link>
                    <Link href='/teste'>
                        <p className="text-sm mt-2">
                            &#10148;Teste
                        </p>
                    </Link>
                </div>
                <div>
                    <p>Contatos</p>
                    <Link href='/teste'>
                        <p className="text-sm mt-2">
                            &#10148;Teste
                        </p>
                    </Link>
                    <Link href='/teste'>
                        <p className="text-sm mt-2">
                            &#10148;Teste
                        </p>
                    </Link>
                    <Link href='/teste'>
                        <p className="text-sm mt-2">
                            &#10148;Teste
                        </p>
                    </Link>
                </div>

            </div>
            <div className="flex justify-between  bg-gray-300 text-blue-700 p-10">
                <p>Desnvolvido por</p>
                <div className="mr-16 space-x-10">
                    <Link href="/">@</Link>
                    <Link href="/">@</Link>
                    <Link href="/">@</Link>
                </div>
            </div>
        </div>
    )
}