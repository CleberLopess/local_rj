import Image from "next/image";
import defaultImage from "@/public/default-placeholder.png";

const Banner = () => {
  return (
    <header className="flex justify-center items-center">
      <section className="h-[70svh] w-full ">
        <Image
          className="w-full h-full object-cover"
          src={defaultImage}
          alt="placeholder"
        />
      </section>
    </header>
  );
};

export default Banner;
