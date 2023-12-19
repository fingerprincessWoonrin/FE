import { ReactNode } from "react";
import { atom } from "recoil";

export interface ScheduleObjectTypes {
  subject: string;
  color: string;
  date: string;
  startTime: string;
  endTime: string;
  content: string;
}

export const IsModal = atom<ReactNode>({
  key: "IsModal",
  default: null,
});

export const SchedulePage = atom<number>({
  key: "SchedulePage",
  default: 1,
});

export const ScheduleObject = atom<ScheduleObjectTypes>({
  key: "ScheduleObject",
  default: {
    subject: "",
    color: "",
    date: "",
    startTime: "",
    endTime: "",
    content: "",
  },
});
