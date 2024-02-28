"use client";

import { createContext, useState } from "react";
import { ImagensHomeContextType, imagensHomeType } from "./imagensHome.models";

export const ImagensHomeContex = createContext<ImagensHomeContextType>({
  imagensHome: [],
  setImagensHome: () => {},
});

export const ImagensHomeProvider = ({ children }: any) => {
  const [imagensHome, setImagensHome] = useState<imagensHomeType>([]);

  return (
    <ImagensHomeContex.Provider value={{ imagensHome, setImagensHome }}>
      {children}
    </ImagensHomeContex.Provider>
  );
};
