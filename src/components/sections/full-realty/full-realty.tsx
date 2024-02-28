"use client";
import CardRealty from "@/components/card-realty/card-realty";
import { fullRealtyType } from "./full-realty.models";

export const FullRealty = ({ items, titleSection }: fullRealtyType) => {
  return (
    <section>
      <div className="container flex flex-col gap-16 m-auto mt-28 ">
        <h1 className="text-6xl text-center font-bold">{titleSection}</h1>

        <div className="flex flex-wrap gap-8 justify-center">
          {items?.map((el, index) => (
            <CardRealty key={index} {...el} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FullRealty;
