"use client";

import { useCallback, useContext, useEffect, useMemo } from "react";
import Header from "@/components/sections/header/header";
import CarouselSection from "@/components/sections/carousel-section/carousel-section";
import { SectionsAcnor } from "@/components/sections/sections-ancor";
import { getHome, getImoveis } from "@/api/functions";
import { ImoveisContext } from "../context/imoveis/imoveis";
import { ImagensHomeContex } from "../context/imagensHome/imagensHome";
import { CardRealtyType } from "@/components/card-realty/card-realty.models";

export default function Home() {
  const { imagensHome, setImagensHome } = useContext(ImagensHomeContex);
  const { imoveis, setImoveis } = useContext(ImoveisContext);

  const fetchDataHome = useCallback(async () => {
    if (imagensHome.length) return;

    const imagesHome = await getHome();

    if (Array.isArray(imagesHome)) {
      setImagensHome([...imagesHome]);
    } else {
      console.error("Os dados de imagens não são do tipo esperado.");
    }
  }, [imagensHome.length, setImagensHome]);

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
    fetchDataHome();
  }, [fetchDataHome]);

  useEffect(() => {
    fetchDataImoveis();
  }, [fetchDataImoveis]);

  const dataLancamentos: CardRealtyType[] = useMemo(() => {
    if (!imoveis.length) return [];

    const data = imoveis?.filter((imovel) => imovel.lancamento);

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

  const dataPromosPraMorar: CardRealtyType[] = useMemo(() => {
    if (!imoveis.length) return [];

    const data = imoveis?.filter((imovel) => imovel.promosPraMorar);

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

  const dataTodosImoveis: CardRealtyType[] = useMemo(() => {
    if (!imoveis.length) return [];

    return imoveis?.map((imovel) => {
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
      <Header ancor={SectionsAcnor.HEADER} images={imagensHome} />
      <CarouselSection
        titleSection="Lançamentos"
        ancor={SectionsAcnor.RELEASE}
        items={dataLancamentos}
        pushRoute="lancamentos"
      />
      <CarouselSection
        titleSection="Promos para morar"
        ancor={SectionsAcnor.PROMOTIONS}
        items={dataPromosPraMorar}
        pushRoute="promocoes"
      />
      <CarouselSection
        titleSection="Todos os imóveis"
        ancor={SectionsAcnor.ALL}
        items={dataTodosImoveis}
        pushRoute="todos-os-imoveis"
      />
    </>
  );
}
