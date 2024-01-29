import { ResponsiveType } from "react-multi-carousel";

export const responsive: ResponsiveType = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5.5,
  },
  LargeDesktop: {
    breakpoint: { max: 2999, min: 1536 },
    items: 4.5,
  },
  desktop: {
    breakpoint: { max: 1535, min: 1280 },
    items: 3.5,
  },
  LargeTablet: {
    breakpoint: { max: 1279, min: 1025 },
    items: 2.5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 500 },
    items: 1.5,
  },
  mobile: {
    breakpoint: { max: 499, min: 0 },
    items: 1,
  },
};
