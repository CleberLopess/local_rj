import Banner from "@/components/sections/banner/banner";
import FullRealty from "@/components/sections/full-realty/full-realty";
import { mockSections } from "@/mock/sections";

export const Release = () => {
  return (
    <>
      <Banner />
      <FullRealty titleSection="Lançamentos" items={mockSections} />
    </>
  );
};

export default Release;
