import Banner from "@/components/sections/banner/banner";
import FullRealty from "@/components/sections/full-realty/full-realty";
import { mockSections } from "@/mock/sections";

export const Release = ({ params }: { params: { promotion: string } }) => {
  console.log("route", params.promotion);

  return (
    <>
      <Banner />
      <FullRealty titleSection={params.promotion} items={mockSections} />
    </>
  );
};

export default Release;
