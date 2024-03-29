"use client";
import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import favicon from "../../../public/local-logo.png";
import { removeScroll } from "../../../utils/functions";
import { ImoveisContext } from "@/context/imoveis/imoveis";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const { imoveis } = useContext(ImoveisContext);

  const isLancamentos =
    imoveis.length > 0 && imoveis.find((imovel) => imovel.lancamento);
  const isPromocoes =
    imoveis.length > 0 && imoveis?.find((imovel) => imovel.promosPraMorar);

  useEffect(() => {
    removeScroll(isOpen);
  }, [isOpen]);

  const toggleNavbar = (href?: string) => {
    setIsOpen(!isOpen);
    if (href) router.push(href);
  };

  const navMobile = () => {
    return (
      <div className="flex flex-col items-end ml-auto w-full md:hidden">
        <a className="w-1/4 max-w-36 mr-auto" href="/">
          <Image className="w-full" src={favicon} alt="lobster" />
        </a>

        <button
          className="flex w-8 h-6 absolute top-7"
          onClick={() => toggleNavbar()}
        >
          <IoMdClose
            className={`absolute w-full h-full    ${
              isOpen ? `opacity-100` : `opacity-0`
            }`}
          />

          <RxHamburgerMenu
            className={` absolute w-full h-full    ${
              isOpen ? `opacity-0` : `opacity-100`
            }`}
          />
        </button>

        <div
          className={`flex flex-col lg:flex overflow-hidden w-full lg:items-center  ${
            isOpen ? "h-svh" : "h-0"
          }`}
        >
          <ul className="flex flex-col justify-center items-center gap-8 w-full text-xl border-b-4 pb-8 lg:flex-row lg:gap-4 mt-8 lg:mt-0 ">
            <li className="hover:scale-110">
              <a onClick={() => toggleNavbar("/")}>Inicio</a>
            </li>

            {isLancamentos && (
              <li className="hover:scale-110 ">
                <a onClick={() => toggleNavbar("/lancamentos")}>Lançamentos</a>
              </li>
            )}
            {isPromocoes && (
              <li className="hover:scale-110">
                <a onClick={() => toggleNavbar("/promocoes")}>Promoções</a>
              </li>
            )}

            <li className="hover:scale-110">
              <a onClick={() => toggleNavbar("/todos-os-imoveis")}>
                Todos os imóveis
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  };

  const navDesktop = () => {
    return (
      <div className="hidden md:flex container w-full relative font-Poppins items-center">
        <a className="w-36 mr-auto" onClick={() => router.push("/")}>
          <Image className="w-full" src={favicon} alt="lobster" />
        </a>
        <ul className="flex gap-8">
          <li className="hover:scale-110">
            <a onClick={() => toggleNavbar("/")}>Inicio</a>
          </li>

          {isLancamentos && (
            <li className="hover:scale-110">
              <a onClick={() => toggleNavbar("/lancamentos")}>Lançamentos</a>
            </li>
          )}

          {isPromocoes && (
            <li className="hover:scale-110">
              <a onClick={() => toggleNavbar("/promocoes")}>Promoções</a>
            </li>
          )}

          <li className="hover:scale-110">
            <a onClick={() => toggleNavbar("/todos-os-imoveis")}>
              Todos os imóveis
            </a>
          </li>
        </ul>
      </div>
    );
  };

  return (
    <nav
      className={`flex justify-center items-center w-full min-h-[72px] fixed z-10 p-4 top-0 left-0 z-2 shadow-md bg-white ${
        isOpen && "z-20"
      }`}
    >
      {navMobile()}
      {navDesktop()}
    </nav>
  );
};

export default Navbar;
