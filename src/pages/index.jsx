import Head from "next/head.js"
import Destaques from "../../components/Destaques.jsx"
import Footer from "../../components/Footer.jsx"
import Formulario from "../../components/Formulario.jsx"
import Inicio from "../../components/Inicio.jsx"
import Section from "../../components/Section.jsx"
import Wpp from "../../components/Wpp.jsx"


export default function Home() {
  <Head>
    <title>Adilson Fernades | Corretor</title>
  </Head>
  return (
    <div className="justify-center items-center  min-w-[440px]">
 <Head>
    <title>Adilson Fernades | Corretor</title>
  </Head>
      <Inicio />
      <Section localidade='São Lourenço' />
      <Destaques />
      <Wpp />
      <Formulario />
      <Footer />
    </div>
  )
}
