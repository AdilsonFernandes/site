
import CardDestaques from "./CardDestaques"

export default function Destaques() {
    return (
        <div>
            <div className="flex flex-col justify-centers items-center text-center mt-20">
                <p className="text-4xl mb-5 font-bold text-blue-700">
                    Confira os nossos destaques
                </p>
                <p className="mb-10 text-zinc-500">
                    Abaixo você confere todos os nossos destaques do mês
                </p>
                <div className="flex justify-center items-center flex-wrap gap-4 m-5">
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
                <button className="mt-10 border border-solid border-blue-700 rounded-md  py-4 px-16 text-md font-bold text-blue-700 hover:bg-blue-700 hover:text-white transition">
                    Ver mais opções
                    </button>
            </div>
        </div>
    )
}