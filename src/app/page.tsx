"use client";

import Header from "@/components/sections/header/header";
import CarouselSection from "@/components/sections/carousel-section/carousel-section";
import { SectonsAcnor } from "@/components/sections/sections-ancor";
import { mockSections } from "@/mock/sections";

export default function Home() {
  return (
    <>
      <Header ancor={SectonsAcnor.HEADER} />
      <CarouselSection
        titleSection="Lançamentos"
        ancor={SectonsAcnor.RELEASE}
        items={mockSections}
        pushRoute="lancamentos"
      />
      <CarouselSection
        titleSection="Promos para morar"
        ancor={SectonsAcnor.PROMOTIONS}
        items={mockSections}
        pushRoute="promocoes"
      />
    </>
  );
}
