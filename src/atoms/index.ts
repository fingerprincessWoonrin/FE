import { ReactNode } from "react";
import { atom } from "recoil";

export const IsModal = atom<ReactNode>({
  key: "IsModal",
  default: null,
});
