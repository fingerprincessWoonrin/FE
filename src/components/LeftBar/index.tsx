import { Link, useLocation } from "react-router-dom";
import * as I from "../../assets";
import * as S from "./style";

const LeftBar = () => {
  const { pathname } = useLocation();

  return (
    <S.LeftBarWrapper pathname={pathname}>
      <S.LeftBarContainer>
        <Link to="/">
          <I.menuSchedule />
        </Link>
        <Link to="/friend">
          <I.menuFriend />
        </Link>
        <Link to="/group">
          <I.menuGroup />
        </Link>
      </S.LeftBarContainer>
    </S.LeftBarWrapper>
  );
};

export default LeftBar;
