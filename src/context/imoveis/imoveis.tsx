"use client";

import { createContext, useState } from "react";
import {
  ImovelType,
  ImoveisContextType,
  imoveisDefaultValues,
} from "./imoveis.models";

export const ImoveisContext = createContext<ImoveisContextType>({
  imoveis: imoveisDefaultValues,
  setImoveis: () => {},
});

export const ImoveisProvider = ({ children }: any) => {
  const [imoveis, setImoveis] = useState<ImovelType[]>(imoveisDefaultValues);

  return (
    <ImoveisContext.Provider value={{ imoveis, setImoveis }}>
      {children}
    </ImoveisContext.Provider>
  );
};
