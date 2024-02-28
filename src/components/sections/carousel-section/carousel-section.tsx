import CardRealty from "@/components/card-realty/card-realty";
import Carousel from "@/components/carousel/carousel";
import { CarouselSectionType } from "./carousel-sectio.models";
import { MdArrowRightAlt } from "react-icons/md";

const CarouselSection = ({
  ancor,
  titleSection,
  pushRoute,
  items,
}: CarouselSectionType) => {
  if (!items.length) return;

  return (
    <section
      id={ancor}
      className="container flex flex-col gap-12 m-auto pt-12 pb-12"
    >
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold">{titleSection}</h2>
        {pushRoute && (
          <a
            className="flex items-center gap-2 text-base border-black hover:scale-110"
            href={`/${pushRoute.toLowerCase()}`}
          >
            Veja todos <MdArrowRightAlt />
          </a>
        )}
      </div>
      <Carousel>
        {items.map((el, index) => (
          <CardRealty key={index} {...el} />
        ))}
      </Carousel>
    </section>
  );
};

export default CarouselSection;
