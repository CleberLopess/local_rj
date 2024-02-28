type CasaType = {
  area: number;
  banheiro: number;
  cozinha: number;
  quarto: number;
  sala: number;
  servico: number;
};

type CondominioType = {
  academia: boolean;
  animais: boolean;
  areaDeLazer: boolean;
  elevador: boolean;
  piscina: boolean;
  portaria: boolean;
  vagas: number;
};

export type DescricaoType = {
  casa: CasaType;
  condominio: CondominioType;
  pequenaDescricao: string;
  grandeDescricao: string;
};

export type ImovelType = {
  nomeImovel: string;
  descricao: DescricaoType;
  endereco: string;
  cidade: string;
  imagens: string[];
  lancamento: boolean;
  linkMaps: string;
  promosPraMorar: boolean;
};

export type ImoveisContextType = {
  imoveis: ImovelType[];
  setImoveis: (imoveis: ImovelType[]) => void;
};

export const imoveisDefaultValues: ImovelType[] = [];
