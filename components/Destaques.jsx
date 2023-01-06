
import CardDestaques from "./CardDestaques"

export default function Destaques() {
    return (
        <div>
            <div className="flex flex-col justify-centers items-center text-center mt-20 mx-4">
                <p className="text-4xl mb-5">
                    Confira os nossos destaques
                </p>
                <p className="mb-10 text-zinc-500">
                    Abaixo você confere todos os nossos destaques do mês
                </p>
                <div className="flex justify-start flex-wrap gap-4 m-10">
                    <CardDestaques
                        imovel='Apartamento novo na Cobertura'
                        cidade='São Lourenço Sul de Minas Gerais'
                        quartos='2 quartos'
                        metros='82m²'
                        preco='R$ 5.000.000.00'
                    />
                    <CardDestaques
                        imovel='Apartamento novo na Cobertura'
                        cidade='São Lourenço Sul de Minas Gerais'
                        quartos='2 quartos'
                        metros='82m²'
                        preco='R$ 5.000.000.00'
                    />
                    <CardDestaques
                        imovel='Apartamento novo na Cobertura'
                        cidade='São Lourenço Sul de Minas Gerais'
                        quartos='2 quartos'
                        metros='82m²'
                        preco='R$ 5.000.000.00'
                    />
                    <CardDestaques
                        imovel='Apartamento novo na Cobertura'
                        cidade='São Lourenço Sul de Minas Gerais'
                        quartos='2 quartos'
                        metros='82m²'
                        preco='R$ 5.000.000.00'
                    />
                    <CardDestaques
                        imovel='Apartamento novo na Cobertura'
                        cidade='São Lourenço Sul de Minas Gerais'
                        quartos='2 quartos'
                        metros='82m²'
                        preco='R$ 5.000.000.00'
                    />
                     <CardDestaques
                        imovel='Apartamento novo na Cobertura'
                        cidade='São Lourenço Sul de Minas Gerais'
                        quartos='2 quartos'
                        metros='82m²'
                        preco='R$ 5.000.000.00'
                    />
                     <CardDestaques
                        imovel='Apartamento novo na Cobertura'
                        cidade='São Lourenço Sul de Minas Gerais'
                        quartos='2 quartos'
                        metros='82m²'
                        preco='R$ 5.000.000.00'
                    />
                     <CardDestaques
                        imovel='Apartamento novo na Cobertura'
                        cidade='São Lourenço Sul de Minas Gerais'
                        quartos='2 quartos'
                        metros='82m²'
                        preco='R$ 5.000.000.00'
                    />
                </div>
                <button className="border border-solid border-blue-700 rounded-md  py-4 px-16 text-md text-blue-700 over:bg-blue-700">
                    Ver mais opções
                    </button>
            </div>
        </div>
    )
}