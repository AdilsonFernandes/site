import Image from "next/image"
import logo from "../../public/logo/logotipo.png"
import Burguer from "../../components/Burguer"
import Footer from "../../components/Footer"
import parque from"../../public/saoLourenco/parque.jpg"
import parque2 from"../../public/saoLourenco/parque2.jpg"
import Wpp from "../../components/Wpp.jsx"
import Link from "next/link"
import Head from "next/head"

export default function Cidade() {
    return (

        <div className="justify-center items-center  min-w-[440px]">
            <Head>
                <title>Adilson Fernades | Corretor</title>
            </Head>
            <Wpp />
            <header className="fixed m-auto -mt-24 flex justify-between items-center shadow-dark bg-white w-full z-20 h-24">
                <Link href="/">
                    <Image src={logo} width={120} />
                </Link>
                <Burguer />

            </header>

            <div className="mt-24 text-white flex flex-col justify-center text-center justify-items-center items-center h-[300px] bg-app  bg-no-repeat bg-cover">
                <div className="bg-black bg-opacity-20 h-full w-full flex flex-col justify-center">
                    <h1 className="text-6xl mb-4 filter drop-shadow-dark font-bold">
                        São Lourenço
                    </h1>

                </div>
            </div>
            <p className="text-center m-20">

                São Lourenço é um município brasileiro do estado de Minas Gerais, uma das mais conhecidas estâncias hidrominerais do Brasil. Faz parte do Circuito das Águas de Minas Gerais, na Serra da Mantiqueira. Sua população em julho de 2020 foi estimada em 46.202 habitantes.

                <h2 className="font-bold p-2">Geografia</h2>

                Localizado na Serra da Mantiqueira, o município se encontra a aproximadamente 950 metros de altitude. O ponto mais baixo, na cota de 947 metros, se localiza na foz do Córrego dos Poços e o ponto mais alto está a 1352 metros de altitude, no Morro dos Lobos. Tem como municípios vizinhos São Sebastião do Rio Verde, Pouso Alto, Soledade de Minas e Carmo de Minas.

                <h2 className="font-bold p-2">Clima</h2>

                Município de clima ameno, tem uma temperatura média de 18°C, com a sensação térmica chegando a 0°C no inverno. Com altitude de 875 metros na sede da prefeitura, tem clima tropical de altitude, com temperatura média no verão de 22°C. Segundo dados do Instituto Nacional de Meteorologia (INMET), referentes ao período de 1931 a 1983 e a partir de 1986, a temperatura mínima absoluta registrada em São Lourenço foi de -3,3°C em 14 de julho de 1945 e a máxima absoluta de 36,6°C em 15 de outubro de 2014. O maior acumulado de precipitação em 24 horas atingiu 171mm em 3 de janeiro de 2000.[11] Desde 1961, janeiro de 2007 foi o mês de maior precipitação, com 633,1mm.[12] e o menor índice de umidade relativa do ar (URA) foi registrado na tarde de 5 de setembro de 1975 e 14 de setembro de 1986, de 13%.

                <h2 className="font-bold p-2">Economia</h2>

                O turismo e o comércio são as principais atividades econômicas do município. São Lourenço se firmou como uma das mais importantes estâncias hidrominerais do Brasil. Cidade polo do Circuito das Águas, está apta a atender os mais exigentes clientes, com o 2° maior parque hoteleiro do estado.

                São Lourenço ocupa a 383ª posição, em 2010, em relação aos 5.565 municípios do Brasil, sendo que 382 (6,86%) municípios estão em situação melhor e 5.183 (93,14%) municípios estão em situação igual ou pior. Em relação aos 853 outros municípios de Minas Gerais, São Lourenço ocupa a 26ª posição, sendo que 25 (2,93%) municípios estão em situação melhor e 828 (97,07%) municípios estão em situação pior ou igual.

                Possui um aeroporto municipal, Aeroporto de São Lourenço, com uma pista de 1300 metros (Alterada para 1030 metros) por 30 metros de largura, possui dois hangares e saguão de passageiros com lanchonete, banheiros além de pátio de estacionamento para aeronaves.

                Possui também uma estação de trens, a Estação Ferroviária de São Lourenço, reinaugurada em 1925 e aberta para embarque de passageiros no turístico Trem das Águas, operado pela ABPF e que liga a cidade ao município vizinho de Soledade de Minas pela Estrada de Ferro Minas e Rio, por meio de locomotivas a vapor (popularmente conhecidas como Maria fumaça). Os passeios de trem ocorrem aos finais de semana e feriados, porém a estação ferroviária permanece aberta diariamente para visitação.


                <h2 className="font-bold p-2">Atrativos turísticos</h2>

                <div>

                    <p>
                        Parque das Águas
                        Aldeia Vila Verde (feira de artesanatos);
                        Basílica Menor de São Lourenço Mártir;
                        Calçadão I e II;
                        Mirante de São Lourenço;
                        Montanha Sagrada;
                        Parque das Águas;
                        Pedra do Vale dos Pinheiros;
                        Quinta do Cedro;
                        Rampa de voo livre da Fazenda Santa Helena;
                        Sítio Lagoa Seca;
                        Teleférico;
                        Templo da Eubiose;
                        Trem das Águas.

                        Turismo de saúde
                        Centro Hidroterápico de São Lourenço (Balneário)

                        São Lourenço, como estância hidromineral, coopera para a cura de diversas patologias com o clima, a mudança de ambiente, a vida ao ar livre, a presença da natureza, tranquilidade, repouso, assistência médica especializada, além dos benefícios das águas minerais.
                    </p>
                    <Image src={parque} alt="foto do parque das águas de São Lourenço" />
                    <Image src={parque2} alt="foto do parque das águas de São Lourenço" />
                </div>
            </p>
            <Footer />
        </div>
    )
}

