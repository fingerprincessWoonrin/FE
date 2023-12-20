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
  useEffect(() => {
    const json = "src/assets/data/user.json";
    fetch(json)
      .then((response) => response.json())
      .then((data) => {
        setUserData(data);
      })
      .catch((error) => {
        toast.error("유저 정보를 불러오는데 실패했습니다.");
      });
  }, []);
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
            <S.UserName>{userData?.users[0]?.name}</S.UserName>
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
