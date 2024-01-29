"use client";

import Header from "@/components/sections/header/header";
import CarouselSection from "@/components/sections/CarouselSection/CarouselSection";
import { SectonsAcnor } from "@/components/sections/sections-ancor";
import { mockSections } from "@/mock/sections";
import Whatsapp from "@/components/whatsapp/whatsapp";

export default function Home() {
  return (
    <>
      <Header />
      <CarouselSection
        titleSection="Lançamentos"
        ancor={SectonsAcnor.RELEASE}
        items={mockSections}
      />
      <CarouselSection
        titleSection="Promos para morar"
        ancor={SectonsAcnor.PROMOTIONS}
        items={mockSections}
      />
      <Whatsapp />
    </>
  );
}
