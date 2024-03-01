"use client";

import { useEffect, useMemo, useState } from "react";
import MarqueeComponent from "@/components/marquee/marquee";
import defaultImage from "@/public/default-placeholder.png";
import { IoIosArrowDown } from "react-icons/io";
import { HeaderType } from "./header.models";
import "./header.styles.css";

const Header = ({ ancor, images }: HeaderType) => {
  const [photoArray, setPhotoArray] = useState<any>([]);

  useEffect(() => {
    if (!images.length) return;

    const dataPhotos = images.map((item, index) => (
      <img
        className="w-full h-1/3"
        key={index}
        src={item ?? defaultImage}
        alt="placeholder"
      />
    ));

    setPhotoArray(dataPhotos);
  }, [images]);

  const setMarquee = useMemo(() => {
    return (
      <div className="flex w-full justify-center">
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
    );
  }, [photoArray]);

  return (
    <header
      className="h-svh relative flex justify-center items-center"
      id={ancor}
    >
      <section className="w-full h-full overflow-hidden">{setMarquee}</section>
      <div className="w-full h-full absolute top-0 bg-black/30"></div>
      <div className="w-full absolute bg-black/50 pt-4 pb-4 m-auto text-center">
        <h1 className="container text-white font-bold text-4xl m-auto">
          Estamos aqui para te ajudar a encontrar o seu imóvel novo!
        </h1>
      </div>
      <button className="absolute bottom-0 flex justify-center items-center bg-black/80 p-2 cursor-pointer">
        <IoIosArrowDown
          id="movingButton"
          className="text-white animate-bounce "
        />
      </button>
    </header>
  );
};

export default Header;
