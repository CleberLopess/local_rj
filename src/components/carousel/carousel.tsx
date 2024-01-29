import Carousel from "react-multi-carousel";
import { CarouselType } from "./carousel.models";
import { responsive } from "./carousel.confg";

const CarouselComponent = ({ children }: CarouselType) => {
  return (
    <Carousel responsive={responsive} infinite showDots>
      {children}
    </Carousel>
  );
};

export default CarouselComponent;
