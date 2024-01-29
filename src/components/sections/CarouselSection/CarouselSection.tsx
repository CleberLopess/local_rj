import CardRealty from "@/components/card-realty/card-realty";
import Carousel from "@/components/carousel/carousel";
import { CarouselSectionType } from "./carouselSectio.models";

const CarouselSection = ({
  ancor,
  titleSection,
  items,
}: CarouselSectionType) => {
  return (
    <section
      id={ancor}
      className="container flex flex-col gap-12 m-auto pt-12 pb-12"
    >
      <h2 className="text-2xl font-bold">{titleSection}</h2>
      <Carousel>
        {items.map((el, index) => (
          <CardRealty key={index} {...el} />
        ))}
      </Carousel>
    </section>
  );
};

export default CarouselSection;
