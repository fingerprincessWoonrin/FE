import styled from "styled-components";

export const SignUpWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

export const SignUpTitle = styled.h2`
  font-size: 2.25rem;
  font-weight: 400;
`;

export const CertificateBox = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const Checkbox = styled.input`
  appearance: none;
  width: 36px;
  height: 36px;
  background: #ffffff;
  border-radius: 0.5rem;
  margin: 0;
  cursor: pointer;
  border: none;
  border: 1px solid #000000;

  &:checked {
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: #2260ff;
    border: none;
  }
`;

export const QuestionBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const SignupText = styled.span`
  color: #9a9a9a;
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-right: 90px;
`;
