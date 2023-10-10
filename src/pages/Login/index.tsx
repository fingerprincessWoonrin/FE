import React, { useState } from "react";
import * as C from "../../components";
import * as S from "./style";
import * as I from "../../assets";

const Login = () => {
  const [checked, setChecked] = useState<boolean>(false);
  return (
    <>
      <S.LoginContainer>
        <S.LoginWrapper>
          <S.LoginTitle>로그인</S.LoginTitle>
          <C.Input width="22.5rem" height=" 3.125rem" placeholder="이메일" />
          <C.Input width="22.5rem" height=" 3.125rem" placeholder="비밀번호" />
          <S.RememberBox
            onClick={() => {
              setChecked(!checked);
            }}
          >
            {checked ? <I.filledcheck /> : <I.check />}
            <S.RememberText>계정 기억하기</S.RememberText>
          </S.RememberBox>
          <C.Button
            width="22.5rem"
            height="3.125rem"
            borderRadius="0.1875rem"
            background="#2260FF"
            color="#fff"
            fontSize="1.375rem"
            fontWeight="400"
            border="none"
            hoverBackground="#2256d8"
          >
            로그인
          </C.Button>
          <S.ForgotPasswordText>비밀번호를 잃어버렸다면</S.ForgotPasswordText>
          <S.SignupContainer>
            <S.SignupText>계정이 없다면?</S.SignupText>
            <C.Button
              width="4.3125rem"
              height="1.8125rem"
              background="#fff"
              border="1.5px solid #2260FF"
              borderRadius="0.1875rem"
              color="#2260FF"
            >
              회원가입
            </C.Button>
          </S.SignupContainer>
        </S.LoginWrapper>
      </S.LoginContainer>
    </>
  );
};

export default Login;
