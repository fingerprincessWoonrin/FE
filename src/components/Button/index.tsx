import { ButtonProps } from "./../../types/components/common/ButtonProps";
import * as S from "./style";

export default function Button({ children, ...rest }: ButtonProps) {
  return <S.Button {...rest}>{children}</S.Button>;
}
