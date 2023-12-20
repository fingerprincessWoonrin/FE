import { InputProps } from "../../types/components/common/InputProps";
import * as S from "./style";

const Input = ({ width, height, ...rest }: InputProps) => {
  return (
    <>
      <S.Input width={width} height={height} {...rest} />
    </>
  );
};

export default Input;
