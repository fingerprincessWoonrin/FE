import React from "react";
import * as S from "./style";
import { InputProps } from "../../types/components/common/InputProps";

const Input = ({ width, height, placeholder }: InputProps) => {
  return (
    <>
      <S.Input width={width} height={height} placeholder={placeholder} />
    </>
  );
};

export default Input;
