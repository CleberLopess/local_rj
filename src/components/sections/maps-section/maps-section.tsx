import Maps from "@/components/maps/maps";

export const MapsSecton = () => {
  return (
    <div className="container m-auto flex flex-col justify-center items-center">
      <h3 className="text-2xl font-bold">Gostou? Agende sua visita</h3>
      <span className="text-xl mt-4 w-full text-center">Rua X - Cidade</span>
      <div className="flex mt-8 w-full h-[40svw] min-h-[300px] max-h-[500px]">
        <Maps
          iframe={`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1837.9095034404936!2d-43.30541641112995!3d-22.883143473697643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997d1e113c5f03%3A0xe109a4481f5a6319!2sR.%20Figueiredo%20P%C3%ADmentel%20-%20Aboli%C3%A7%C3%A3o%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2020751-200!5e0!3m2!1spt-BR!2sbr!4v1706983723660!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`}
        />
      </div>
    </div>
  );
};
