import { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  width: string;
  height: string;
  fontSize?: string;
  color?: string;
  background?: string;
  border?: string;
  radius?: string;
  fontWeight?: string;
  hoverbackground?: string;
  hoverBorder?: string;
  hoverColor?: string;
}
