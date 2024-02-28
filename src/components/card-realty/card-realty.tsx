import Image from "next/image";
import defaultImage from "@/public/default-placeholder.png";
import { CardRealtyType } from "./card-realty.models";
import { useRouter } from "next/navigation";
import { fomatedName } from "@/utils/functions";

const CardRealty = ({
  nomeImovel,
  id,
  imagem,
  pequenaDescricao,
}: CardRealtyType) => {
  const router = useRouter();

  return (
    <div className="w-72 m-auto flex flex-col gap-4 rounded-md shadow-md  md:w-80 lg:m-0">
      <img className="w-full" src={imagem ?? defaultImage} alt="Realty" />
      <div className="flex flex-col gap-3 pl-2 pr-2 pb-2">
        <h3 className="text-lg font-bold">{nomeImovel}</h3>
        <p>{pequenaDescricao}</p>
        <a
          className="p-2 bg-slate-800 rounded-md text-white hover:bg-slate-600 cursor-pointer text-center"
          onClick={() => router.push("/imovel/" + fomatedName(id))}
        >
          Saiba mais
        </a>
      </div>
    </div>
  );
};

export default CardRealty;
