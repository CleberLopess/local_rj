"use client";

import { useCallback, useContext, useEffect, useMemo } from "react";
import FullRealty from "@/components/sections/full-realty/full-realty";
import { getImoveis } from "@/api/functions";
import { CardRealtyType } from "@/components/card-realty/card-realty.models";
import { ImoveisContext } from "@/context/imoveis/imoveis";

export const Release = () => {
  const { imoveis, setImoveis } = useContext(ImoveisContext);

  const fetchDataImoveis = useCallback(async () => {
    if (imoveis.length) return;

    const imoveisData = await getImoveis();

    if (Array.isArray(imoveisData)) {
      setImoveis([...imoveisData]);
    } else {
      console.error("Os dados de imóveis não são do tipo esperado.");
    }
  }, [imoveis.length, setImoveis]);

  useEffect(() => {
    fetchDataImoveis();
  }, [fetchDataImoveis]);

  const dataLancamentos: CardRealtyType[] = useMemo(() => {
    if (!imoveis.length) return [];

    const data = imoveis?.filter((imovel) => imovel.lancamento === true);

    if (!data.length) return [];

    return data.map((imovel) => {
      return {
        id: imovel.nomeImovel,
        imagem: imovel.imagens[0],
        nomeImovel: imovel.nomeImovel,
        pequenaDescricao: imovel.descricao.pequenaDescricao,
      };
    });
  }, [imoveis]);

  return (
    <>
      <FullRealty titleSection="Lançamentos" items={dataLancamentos} />
    </>
  );
};

export default Release;
