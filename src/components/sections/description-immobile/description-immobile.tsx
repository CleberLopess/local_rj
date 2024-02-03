import { DescriptionImmobileType } from "./description-immobile.models";

const DescriptionImmobile = ({
  descripton,
  titleSection,
}: DescriptionImmobileType) => {
  return (
    <section>
      <div className="container m-auto flex flex-col justify-center mt-12">
        <h3 className="text-2xl font-bold capitalize">{titleSection}</h3>
        <p className="text-xl mt-4 w-full">{descripton}</p>
      </div>
    </section>
  );
};

export default DescriptionImmobile;
