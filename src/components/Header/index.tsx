import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import * as I from "../../assets";
import * as S from "./style";

interface User {
  id: number;
  name: string;
}

interface IProps {
  users: User[];
}

const Header = () => {
  const date = new Date();
  const { pathname } = useLocation();
  const [userData, setUserData] = useState<IProps | undefined>();
  const name = localStorage.getItem("userName");

  return (
    <S.Header pathname={pathname}>
      <S.LogoBox>
        <I.Logo />
      </S.LogoBox>
      <S.HeaderLeft>
        <S.TextBox>
          <S.Title>Focus Flow</S.Title>
          <S.Description>smart manage schedule</S.Description>
        </S.TextBox>
      </S.HeaderLeft>
      <S.HeaderRight>
        <S.InformationBox>
          <Link to="/profile">
            <S.UserName>{name}</S.UserName>
          </Link>
          <S.Date>{`
            ${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}
            `}</S.Date>
        </S.InformationBox>
        <S.CategoryBox>
          <I.Category />
        </S.CategoryBox>
      </S.HeaderRight>
    </S.Header>
  );
};

export default Header;
