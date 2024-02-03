"use client";
import Banner from "@/components/sections/banner/banner";
import FullRealty from "@/components/sections/full-realty/full-realty";
import { mockSections } from "@/mock/sections";

export const Release = ({ params }: { params: { release: string } }) => {
  return (
    <>
      <Banner />
      <FullRealty titleSection={params.release} items={mockSections} />
    </>
  );
};

export default Release;
