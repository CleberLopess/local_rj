import Image from "next/image";
import defaultImage from "@/public/default-placeholder.png";
import { CardRealtyType } from "./card-realty.models";

const CardRealty = ({ title, description, id }: CardRealtyType) => {
  return (
    <div className="w-72 m-auto flex flex-col gap-4 rounded-md shadow-md  md:w-80 lg:m-0">
      <Image className="w-full" src={defaultImage} alt="Realty" />
      <div className="flex flex-col gap-3 pl-2 pr-2 pb-2">
        <h3 className="text-lg font-bold">{title}</h3>
        <p>{description}</p>
        <a
          className="p-2 bg-slate-800 rounded-md text-white hover:bg-slate-600 cursor-pointer text-center"
          href={"/imovel/" + id}
        >
          Saiba mais
        </a>
      </div>
    </div>
  );
};

export default CardRealty;
