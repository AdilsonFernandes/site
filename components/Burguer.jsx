import Link from "next/link";
import { useState } from "react"; // import state

export default function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

    return (
        <div className="flex items-center justify-between mx-8 py-8 ">

            <nav className="transition">
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
                        <ul className="MENU-LINK-MOBILE-OPEN  bg-blue-700 bg-no-repeat space-y-2 ron text-white font-bold flex flex-col fixed items-center justify-center min-h-[1200px] w-full h-full ">
                            <li className="border w-96 text-center p-6 border-white rounded-md suppercase  text-2xl">
                                <Link href="/about"className="font-bold">Início</Link>
                            </li>
                            <li className="border w-96 text-center p-6 border-white rounded-md uppercase text-xl">
                                <Link href="/about"className="font-bold">Sobre nós</Link>
                            </li>
                            <li className="border w-96 text-center p-6 border-white rounded-md uppercase text-xl">
                                <Link href="/about"className="font-bold">São Lourenço</Link>
                            </li>
                            <li className="border w-96 text-center p-6 border-white rounded-md uppercase text-xl">
                                <Link href="/about"className="font-bold">Imóveis</Link>
                            </li>
                            <li className="border w-96 text-center p-6 border-white rounded-md  uppercase text-xl">
                                <Link href="/about " className="font-bold">Contato</Link>
                            </li>
                        </ul>
                    </div>
                </section>

                <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
                    <li >
                        <Link href="/about"className="hover:text-blue-700 transition">Início</Link>
                    </li>
                    <li >
                        <Link href="/about"className="hover:text-blue-700 transition">Sobre nós</Link>
                    </li>
                    <li >
                        <Link href="/about"className="hover:text-blue-700 transition">São Lourenço</Link>
                    </li>
                    <li >
                        <Link href="/about"className="hover:text-blue-700 transition">Imóveis</Link>
                    </li>
                    <li y>
                        <Link href="/about"className="hover:text-blue-700 transition">Contato</Link>
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
    `}</style>
        </div>
    );
}