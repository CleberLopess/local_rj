"use client";

import MarqueeComponent from "@/components/marquee/marquee";
import defaultImage from "@/public/default-placeholder.png";
import { removeStopMarquee } from "@/utils/functions";
import Image from "next/image";
import { useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import "./header.styles.css";
import { SectonsAcnor } from "../sections-ancor";
import { HeaderType } from "./header.models";

const Header = ({ ancor }: HeaderType) => {
  useEffect(() => {
    removeStopMarquee();
  }, []);

  const photoArray = Array.from({ length: 10 }, (_, index) => (
    <Image
      className="w-full h-1/3"
      key={index}
      src={defaultImage}
      alt="placeholder"
    />
  ));

  return (
    <header
      className="h-svh relative flex justify-center items-center"
      id={ancor}
    >
      <section className="w-full h-full overflow-hidden">
        <div className="flex">
          <MarqueeComponent direction={"top-bottom"} speed={2}>
            {photoArray}
          </MarqueeComponent>
          <MarqueeComponent direction={"bottom-top"} speed={2}>
            {photoArray}
          </MarqueeComponent>
          <MarqueeComponent direction={"top-bottom"} speed={2}>
            {photoArray}
          </MarqueeComponent>
        </div>
      </section>
      <div className="w-full h-full absolute top-0 bg-black/30"></div>
      <div className="w-full absolute bg-black/50 pt-4 pb-4 m-auto text-center">
        <h1 className="container text-white font-bold text-4xl m-auto">
          Estamos aqui para te ajudar a encontrar o seu imóvel novo!
        </h1>
      </div>
      <a
        className="absolute bottom-0 flex justify-center items-center bg-black/50 p-2 cursor-pointer"
        href={`#${SectonsAcnor.RELEASE}`}
      >
        <IoIosArrowDown
          id="movingButton"
          className="text-white animate-bounce "
        />
      </a>
    </header>
  );
};

export default Header;
