import ImageGallery from "react-image-gallery";
import { ItemsBannerGallery } from "./banner-gallery.models";
import { useEffect, useState } from "react";

const BannerGallery = ({ item }: ItemsBannerGallery) => {
  const [showThumbnails, setShowThumbnails] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth >= 768;
      setShowThumbnails(screenWidth);
    };

    // Adiciona um event listener para o evento de redimensionamento da janela
    window.addEventListener("resize", handleResize);

    // Chama a função de redimensionamento quando o componente monta para definir o estado inicial
    handleResize();

    // Remove o event listener quando o componente é desmontado para evitar vazamentos de memória
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="h-[70svh] mt-24">
      <ImageGallery
        autoPlay
        infinite
        disableSwipe
        lazyLoad
        items={item}
        thumbnailPosition="left"
        showThumbnails={showThumbnails}
      />
    </header>
  );
};

export default BannerGallery;
