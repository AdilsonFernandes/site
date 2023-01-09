import Destaques from "../../components/Destaques.jsx"
import Footer from "../../components/Footer.jsx"
import Formulario from "../../components/Formulario.jsx"
import Inicio from "../../components/Inicio.jsx"
import Section from "../../components/Section.jsx"
import Wpp from "../../components/Wpp.jsx"

export default function Home() {
  return (
    <div className="justify-center items-center min-w-[440px] ">
      <Inicio/>
      <Section/>
      <Destaques/>
      <Wpp/>
      <Formulario/>
      <Footer/>
    </div>
  )
}
