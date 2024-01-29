import { MarqueeType } from "./marquee.models";
import Marquee from "react-simple-marquee";

const MarqueeComponent = ({
  children,
  className,
  speed = 2,
  direction = "right-left",
}: MarqueeType) => {
  return (
    <Marquee className={className} direction={direction} speed={speed}>
      {children}
    </Marquee>
  );
};

export default MarqueeComponent;
