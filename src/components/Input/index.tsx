import React from "react";
import * as S from "./style";
import { InputProps } from "../../types/components/common/InputProps";

const Input = ({ width, height, placeholder, value, onChange }: InputProps) => {
  return (
    <>
      <S.Input
        value={value}
        onChange={onChange}
        width={width}
        height={height}
        placeholder={placeholder}
      />
    </>
  );
};

export default Input;
