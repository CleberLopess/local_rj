import { SectionsAcnor } from "../sections-ancor";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col justify-between items-center gap-8">
        <div className="flex flex-col gap-4 text-center">
          <a className="hover:scale-110" href={`#${SectionsAcnor.HEADER}`}>
            Início
          </a>
          <a
            className="hover:scale-110"
            href="https://www.localrj.com/faleconosco"
            target="_blank"
          >
            Fale conosco
          </a>
        </div>
        <div className="flex flex-col gap-4 text-center border-t-2 pt-8">
          <p>
            Av. Ayrton Senna, 2600 bloco 4 Gr. 407 - Barra da Tijuca - Rio de
            Janeiro RJ
          </p>
          <p>Contato: 21 97271-1501 | 21 4042-1501</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
