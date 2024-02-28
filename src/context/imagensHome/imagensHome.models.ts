export type imagensHomeType = string[];

export type ImagensHomeContextType = {
  imagensHome: imagensHomeType;
  setImagensHome: (imagensHome: imagensHomeType) => void;
};

export const imagensHomeDefaultValues: imagensHomeType = [];
