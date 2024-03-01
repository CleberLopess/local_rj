"use client";
import { useEffect } from "react";
import Image from "next/image";
import whatsappLogo from "@/public/whatsapp.png";

const Whatsapp = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      const element = document.getElementById("whatsapp-icon");
      if (element) {
        //class css
        element.classList.toggle("animate-swing");
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <a
      className="w-16 h-16 z-8 fixed bottom-28 md:bottom-9 right-9 hover:scale-110 cursor-pointer"
      href={`https://api.whatsapp.com/send?phone=${process.env.NUMBER_WPP}`}
      target="__blanck"
    >
      <Image className="w-full h-full" src={whatsappLogo} alt="whatsapp" />
    </a>
  );
};

export default Whatsapp;
