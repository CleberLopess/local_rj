"use client";
import BannerGallery from "@/components/banner-gallery/banner-gallery";
import DescriptionImmobile from "@/components/sections/description-immobile/description-immobile";
import { MapsSecton } from "@/components/sections/maps-section/maps-section";
import { mockBanner } from "@/mock/bannerGalery";

export const Immobile = ({ params }: { params: { imovelId: string } }) => {
  return (
    <>
      <BannerGallery item={mockBanner} />
      <DescriptionImmobile
        titleSection={params.imovelId}
        descripton=" Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus voluptate, illum eum est incidunt commodi deserunt
          earum suscipit pariatur explicabo soluta officiis fugit beatae vitae
          repellendus quae odit. Aspernatur, doloribus."
      />
      <MapsSecton />
    </>
  );
};

export default Immobile;
