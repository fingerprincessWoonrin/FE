import styled from "styled-components";
import { InputProps } from "../../types/components/common/InputProps";

export const Input = styled.input<InputProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 0.1875rem;
  background: #fff;
  border: none;

  font-family: Pretendard;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 20px;

  margin-bottom: 10px;
`;
