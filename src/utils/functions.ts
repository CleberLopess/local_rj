export const removeScroll = (action: boolean) => {
  if (action) document.documentElement.style.overflow = "hidden";
  if (!action) document.documentElement.style.overflow = "";
};

export const fomatedName = (name: string): string => {
  return name.replace(/ /g, "-").toLowerCase();
};

export const reverterFormatedName = (name: string): string => {
  return name.replace(/-/g, " ");
};

// Função para comparar, ignorando maiúsculas/minúsculas
export const compararStringsIgnorandoCase = (
  str1: string,
  str2: string
): boolean => {
  return str1.toLowerCase() === str2.toLowerCase();
};
