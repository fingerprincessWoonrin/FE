import React from "react";
import * as S from "./style";
import { InputProps } from "../../types/components/common/InputProps";

const Input = ({ width, height, ...rest }: InputProps) => {
  return (
    <>
      <S.Input width={width} height={height} {...rest} />
    </>
  );
};

export default Input;
