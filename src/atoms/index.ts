import { ReactNode } from "react";
import { atom } from "recoil";

export const IsModal = atom<ReactNode>({
  key: "IsModal",
  default: null,
});

export const SchedulePage = atom<number>({
  key: "SchedulePage",
  default: 1,
});
