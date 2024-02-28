import { CardRealtyType } from "@/components/card-realty/card-realty.models";
import { SectionsAcnor } from "../sections-ancor";

export type CarouselSectionType = {
  items: CardRealtyType[] | [];
  titleSection: string;
  pushRoute?: string;
  ancor: SectionsAcnor;
};
