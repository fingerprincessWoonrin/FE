import { useState } from "react";
import { Link } from "react-router-dom";
import * as C from "../../components";
import * as S from "./style";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handleVerificationCodeChange = (e: any) => {
    setVerificationCode(e.target.value);
  };

  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e: any) => {
    setConfirmPassword(e.target.value);
  };

  const handleSignUp = () => {};

  return (
    <S.SignUpWrapper>
      <S.SignUpContainer>
        <S.SignUpTitle>회원가입</S.SignUpTitle>
        <S.CertificateBox>
          <C.Input
            value={email}
            onChange={handleEmailChange}
            height="3.125rem"
            width="18.3125rem"
            placeholder="이메일"
          />
          <label htmlFor="checkbox">
            <S.Checkbox type="checkbox" id="checkbox" />
          </label>
        </S.CertificateBox>
        <C.Input
          value={password}
          onChange={handlePasswordChange}
          height="3.125rem"
          width="22.5rem"
          placeholder="비밀번호"
        />
        <C.Input
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          height="3.125rem"
          width="22.5rem"
          placeholder="비밀번호 확인"
        />
        <C.Button
          onClick={handleSignUp}
          width="22.5rem"
          height="3.125rem"
          radius="0.1875rem"
          background="#2260FF"
          color="#fff"
          fontSize="1.375rem"
          fontWeight="400"
          border="none"
          hoverbackground="#2256d8"
        >
          회원가입
        </C.Button>
        <S.QuestionBox>
          <S.SignupText>이미 계정이 있다면?</S.SignupText>
          <Link to="/login">
            <C.Button
              width="4.3125rem"
              height="1.8125rem"
              background="#fff"
              border="1.5px solid #2260FF"
              radius="0.1875rem"
              color="#2260FF"
              fontSize="0.875rem"
              fontWeight="600"
            >
              로그인
            </C.Button>
          </Link>
        </S.QuestionBox>
      </S.SignUpContainer>
    </S.SignUpWrapper>
  );
};

export default SignUp;
