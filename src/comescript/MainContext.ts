import { createContext } from "react";

interface IStore {
  step_1: { chk: boolean; key: string; url: string };
  step_2: { chk2: boolean; key2: string; url2: string };
  step_3: { chk3: boolean; key3: string; url3: string };
  modal: { chk4: boolean; key4: string; url4: string };
}

export const Store: IStore = {
  step_1: {
    chk: true,
    key: "",
    url: "",
  },
  step_2: {
    chk2: true,
    key2: "k--",
    url2: "u--",
  },
  step_3: {
    chk3: true,
    key3: "k--",
    url3: "u--",
  },
  modal: {
    chk4: true,
    key4: "k--",
    url4: "u--",
  },
};

export const MainContext = createContext(Store);
export const Step_1_Context = createContext(Store.step_1);
export const Step_2_Context = createContext(Store.step_2);
export const Step_3_Context = createContext(Store.step_3);
export const Modal_Context = createContext(Store.modal);
