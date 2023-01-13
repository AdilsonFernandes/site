import Link from "next/link";
import { useState } from "react"; // import state
import { useRouter } from "next/router";
export default function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false
    
    const router = useRouter();
    const currentRoute = router.pathname;

    return (
        <div className="flex items-center justify-between mx-8 py-8">

            <nav>
                <section className="MOBILE-MENU flex lg:hidden ">
                    <div
                        className="HAMBURGER-ICON space-y-2 "
                        onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
                    >
                        <span className="block h-0.5 w-8 animate-pulse bg-blue-700"></span>
                        <span className="block h-0.5 w-8 animate-pulse bg-blue-700"></span>
                        <span className="block h-0.5 w-8 animate-pulse bg-blue-700"></span>
                    </div>

                    <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"} >
                        <div
                            className="CROSS-ICON fixed z-10 top-0 right-0 px-8 py-8"
                            onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
                        >
                            <svg
                                className="h-8 w-8 text-white"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </div>
                        <ul className="MENU-LINK-MOBILE-OPEN  bg-blue-700 bg-no-repeat space-y-2  text-white font-bold flex flex-col fixed items-center justify-center min-h-[1200px] w-full h-full ">
                            <li className="border w-96 text-center  border-white rounded-md   text-xl">
                                <Link href="/" className="font-bold block p-6">Início</Link>
                            </li>
                            <li className="border w-96 text-center border-white rounded-md  text-xl">
                                <Link href="/sobre" className="font-bold block p-6">Sobre nós</Link>
                            </li>
                            <li className="border w-96 text-center  border-white rounded-md  text-xl">
                                <Link href="/cidade" className="font-bold block p-6">São Lourenço</Link>
                            </li>
                            <li className="border w-96 text-center border-white rounded-md  text-xl">
                                <Link href="/imoveis" className="font-bold block p-6">Imóveis</Link>
                            </li>
                            <li className="border w-96 text-center border-white rounded-md   text-xl">
                                <Link href="/contato " className="font-bold block p-6">Contato</Link>
                            </li>
                        </ul>
                    </div>
                </section>

                <ul className="DESKTOP-MENU hidden  lg:flex">
                    <li className="w-28 flex justify-center items-center text-center" >
                        <Link href="/" className={currentRoute === '/' ? "active" : ""}>
                        <p className="hover:text-blue-700 hover:font-bold hover:transition">Início</p></Link>
                    </li>
                    <li className="w-28 flex justify-center items-center text-center">
                        <Link href="/sobre " className={currentRoute === '/sobre' ? "active" : ""}
                        >
                            <p className="hover:text-blue-700 hover:font-bold  hover:transition">
                            Sobre nós
                            </p>
                        </Link>
                    </li>
                    <li className="w-28 flex justify-center items-center text-center">
                        <Link href="/cidade"className={currentRoute === '/cidade' ? "active" : ""} >
                        <p className="hover:text-blue-700 hover:font-bold  hover:transition">São Lourenço</p>
                        </Link>
                    </li>
                    <li className="w-28 flex justify-center items-center text-center">
                        <Link href="/imoveis" className={currentRoute === '/imoveis' ? "active" : ""}>
                        <p  className="hover:text-blue-700 hover:font-bold  hover:transition">Imóveis</p>
                        </Link>
                    </li>
                    <li className="w-28 flex justify-center items-center text-center">
                        <Link href="/contato" className={currentRoute === '/contato' ? "active" : ""}>
                        <p className="hover:text-blue-700 hover:font-bold hover:transition">Contato</p>
                        </Link>
                    </li>
                </ul>
            </nav>
            <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
      .nonActive {
        color: white;
      }
      .active {
       color: rgb(29 78 216 );
       font-weight: bold;
      }
    `}</style>
        </div>
    );
}