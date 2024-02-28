import { DescriptionImmobileType } from "./description-immobile.models";
import { IoCheckmark } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";

const DescriptionImmobile = ({
  descripton,
  titleSection,
}: DescriptionImmobileType) => {
  const shortDescription = () => {
    if (!descripton) return;

    return (
      descripton.grandeDescricao && (
        <span className="text-xl text-center mt-9 w-full ">
          {descripton.grandeDescricao}
        </span>
      )
    );
  };

  const setDescriptionCasa = () => {
    if (!descripton) return;

    return (
      <div className="flex flex-col gap-2">
        <h3 className="text-2xl font-bold">O imóvel é compospo por:</h3>
        <ul className="flex flex-col gap-2">
          {descripton.casa.area && <li>Area: {descripton.casa.area}²</li>}
          {descripton.casa.quarto && <li>Quartos: {descripton.casa.quarto}</li>}
          {descripton.casa.banheiro && (
            <li>Banheiro: {descripton.casa.banheiro}</li>
          )}
          {descripton.casa.cozinha && (
            <li>Cozinha: {descripton.casa.cozinha}</li>
          )}
          {descripton.casa.sala && <li>Sala: {descripton.casa.sala}</li>}
          {descripton.casa.servico && (
            <li>Area de Serviço: {descripton.casa.servico}</li>
          )}
        </ul>
      </div>
    );
  };

  const setDescriptionCondominio = () => {
    if (!descripton) return;

    return (
      <div className="flex flex-col gap-2">
        <h3 className="text-2xl font-bold">O condomínio é compospo por:</h3>
        <ul className="flex flex-col gap-2">
          <li className="flex items-center gap-1">
            Academia:{" "}
            {descripton.condominio.academia ? (
              <IoCheckmark className="text-green  w-5 h-5" />
            ) : (
              <IoCloseOutline className="text-red w-5 h-5" />
            )}
          </li>
          <li className="flex items-center gap-1">
            Elevador:{" "}
            {descripton.condominio.elevador ? (
              <IoCheckmark className="text-green w-5 h-5" />
            ) : (
              <IoCloseOutline />
            )}
          </li>
          <li className="flex items-center gap-1">
            Piscina:{" "}
            {descripton.condominio.piscina ? (
              <IoCheckmark className="text-green w-5 h-5" />
            ) : (
              <IoCloseOutline className="text-red w-5 h-5" />
            )}
          </li>
          <li className="flex items-center gap-1">
            Portaria:{" "}
            {descripton.condominio.portaria ? (
              <IoCheckmark className="text-green w-5 h-5" />
            ) : (
              <IoCloseOutline className="text-red w-5 h-5" />
            )}
          </li>
          <li className="flex items-center gap-1">
            Vagas:{" "}
            {descripton.condominio.vagas ? (
              <IoCheckmark className="text-green w-5 h-5" />
            ) : (
              <IoCloseOutline className="text-red w-5 h-5" />
            )}
          </li>
          <li className="flex items-center gap-1">
            Area de Lazer:{" "}
            {descripton.condominio.areaDeLazer ? (
              <IoCheckmark className="text-green w-5 h-5" />
            ) : (
              <IoCloseOutline className="text-red w-5 h-5" />
            )}
          </li>
          <li className="flex items-center gap-1">
            Animais:{" "}
            {descripton.condominio.animais ? (
              <IoCheckmark className="text-green w-5 h-5" />
            ) : (
              <IoCloseOutline className="text-red w-5 h-5" />
            )}
          </li>
        </ul>
      </div>
    );
  };

  return (
    <section>
      <div className="container m-auto flex flex-col justify-center mt-12">
        <h3 className="text-4xl text-center font-bold capitalize">
          {titleSection}
        </h3>

        {shortDescription()}
        <div className="flex flex-wrap justify-center gap-20 items-start mt-16">
          {setDescriptionCasa()}
          {setDescriptionCondominio()}
        </div>
      </div>
    </section>
  );
};

export default DescriptionImmobile;
