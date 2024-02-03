import { MapsType } from "./maps.models";

const Maps = ({ iframe }: MapsType) => {
  //
  return (
    <div className="w-full" dangerouslySetInnerHTML={{ __html: iframe }} />
  );
};

export default Maps;
