import styled from "styled-components";

export const LoginContainer = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const LoginTitle = styled.h2`
  display: flex;
  color: #000;
  font-family: Inter;
  font-size: 2.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  align-items: center;
  justify-content: center;
`;

export const RememberBox = styled.div`
  display: flex;
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const RememberText = styled.div`
  margin-left: 5px;
  color: #000;
  font-family: Pretendard;
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const ForgotPasswordText = styled.span`
  color: #9a9a9a;
  font-family: Pretendard;
  font-size: 0.8125rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 10px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SignupContainer = styled.div`
  margin-left: 50px;
  margin-top: 40px;
`;

export const SignupText = styled.span`
  color: #9a9a9a;
  font-family: Pretendard;
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-right: 90px;
`;
