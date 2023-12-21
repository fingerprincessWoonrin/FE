import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as I from "../../assets";
import userJSON from "../../assets/data/user.json";
import * as C from "../../components";
import * as S from "./style";

const Login = () => {
  const [checked, setChecked] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useNavigate();
  const handleLogin = () => {
    const user = userJSON.users.find((user) => user.email === email);
    if (user && user.password === password) {
      router("/");
      localStorage.setItem("userName", "한준");
    } else {
      toast.warning("이메일 또는 비밀번호가 일치하지 않습니다.");
    }
  };
  return (
    <S.LoginContainer>
      <S.LoginWrapper>
        <S.LoginTitle>로그인</S.LoginTitle>
        <C.Input
          value={email}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
          width="22.5rem"
          height=" 3.125rem"
          placeholder="이메일"
        />
        <C.Input
          value={password}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
          type="password"
          width="22.5rem"
          height=" 3.125rem"
          placeholder="비밀번호"
        />
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
          radius="0.1875rem"
          background="#2260FF"
          color="#fff"
          fontSize="1.375rem"
          fontWeight="400"
          border="none"
          hoverbackground="#2256d8"
          onClick={handleLogin}
        >
          로그인
        </C.Button>
        <S.ForgotPasswordText>비밀번호를 잃어버렸다면</S.ForgotPasswordText>
        <S.SignupContainer>
          <S.SignupText>계정이 없다면?</S.SignupText>
          <Link to="/signup">
            <C.Button
              width="4.3125rem"
              height="1.8125rem"
              background="#fff"
              border="1.5px solid #2260FF"
              radius="0.1875rem"
              color="#2260FF"
            >
              회원가입
            </C.Button>
          </Link>
        </S.SignupContainer>
      </S.LoginWrapper>
    </S.LoginContainer>
  );
};

export default Login;
