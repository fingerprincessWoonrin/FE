import { ButtonHTMLAttributes } from "react";
import * as S from "./style";
import { ButtonProps } from "./../../types/components/common/ButtonProps";

export default function Button({ children, ...rest }: ButtonProps) {
  return <S.Button {...rest}>{children}</S.Button>;
}
