import styled from "styled-components";
import { InputProps } from "../../types/components/common/InputProps";

export const Input = styled.input<InputProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 0.1875rem;
  background: #fff;
  border: none;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 20px;
  outline: none;

  &::placeholder {
    color: #c4c3c3;
    font-size: 1.125rem;
    font-weight: 400;
  }
`;
