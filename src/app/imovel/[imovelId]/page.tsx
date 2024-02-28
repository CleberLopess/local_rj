"use client";
import { getImoveis } from "@/api/functions";
import BannerGallery from "@/components/banner-gallery/banner-gallery";
import { BannerGalleryType } from "@/components/banner-gallery/banner-gallery.models";
import DescriptionImmobile from "@/components/sections/description-immobile/description-immobile";
import { MapsSecton } from "@/components/sections/maps-section/maps-section";
import { ImoveisContext } from "@/context/imoveis/imoveis";
import { reverterFormatedName } from "@/utils/functions";
import { useCallback, useContext, useEffect, useMemo } from "react";

export const Immobile = ({ params }: { params: { imovelId: string } }) => {
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

  const setUnicImovel = useMemo(() => {
    if (!imoveis.length) return;

    const imovel = imoveis.filter(
      (imovel) =>
        imovel.nomeImovel.toLowerCase() ===
        reverterFormatedName(params.imovelId).toLowerCase()
    );

    return imovel[0];
  }, [imoveis, params.imovelId]);

  const imagensBanner: BannerGalleryType[] = useMemo(() => {
    if (!setUnicImovel?.imagens.length) return [];

    return setUnicImovel.imagens.map((item) => {
      return {
        original: item,
        thumbnail: item,
      };
    });
  }, [setUnicImovel]);

  return (
    <>
      <BannerGallery item={imagensBanner} />
      <DescriptionImmobile
        titleSection={setUnicImovel?.nomeImovel as any}
        descripton={setUnicImovel?.descricao as any}
      />
      <MapsSecton
        cidade={setUnicImovel?.cidade as any}
        endereco={setUnicImovel?.endereco as any}
        linkMaps={setUnicImovel?.linkMaps as any}
      />
    </>
  );
};

export default Immobile;
