import { onValue, ref } from "firebase/database";
import { database } from "./firebase";
import { routesEnum } from "./models";

export const getImoveis = (): Promise<any> => {
  const data = ref(database, routesEnum.IMOVEIS);

  return new Promise((resolve, reject) => {
    onValue(
      data,
      (snapshot) => {
        const dados = snapshot.val();
        resolve(dados);
      },
      (error) => {
        reject(error);
      }
    );
  });
};

export const getHome = (): Promise<any> => {
  const data = ref(database, routesEnum.IMAGESHOME);

  return new Promise((resolve, reject) => {
    onValue(
      data,
      (snapshot) => {
        const dados = snapshot.val();
        resolve(dados);
      },
      (error) => {
        reject(error);
      }
    );
  });
};
