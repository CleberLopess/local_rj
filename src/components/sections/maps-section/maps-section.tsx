import Maps from "@/components/maps/maps";
import { MapsSectioinTypes } from "./maps-section.models";

export const MapsSecton = ({
  cidade,
  endereco,
  linkMaps,
}: MapsSectioinTypes) => {
  return (
    <div className="container m-auto flex flex-col justify-center items-center">
      <h3 className="text-2xl font-bold mt-10">Gostou? Agende sua visita</h3>
      <span>Entre em contato com a gente por esse numero (21)97271-1501</span>
      <span>
        ou pelo link do{" "}
        <a
          className="text-blue-500 cursor-pointer hover:underline"
          href={`https://api.whatsapp.com/send/?phone=$${process.env.NUMBER_WPP}&text&type=phone_number&app_absent=0`}
          target="__blanck"
        >
          whatsapp
        </a>
      </span>
      <span className="text-xl mt-20 w-full text-center font-bold">
        {endereco} - {cidade}
      </span>
      <div className="flex mt-8 w-full h-[40svw] min-h-[300px] max-h-[500px]">
        <Maps iframe={linkMaps} />
      </div>
    </div>
  );
};
