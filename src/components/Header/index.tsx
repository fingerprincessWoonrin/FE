import { useLocation } from "react-router-dom";
import * as I from "../../assets";
import * as S from "./style";

const Header = () => {
  const date = new Date();
  const { pathname } = useLocation();
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
          <S.UserName>이운린</S.UserName>
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
