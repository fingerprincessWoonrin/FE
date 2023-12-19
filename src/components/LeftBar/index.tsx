import * as S from "./style";
import * as I from "../../assets";
import { Link } from "react-router-dom";

const LeftBar = () => {
  return (
    <S.LeftBarWrapper>
      <S.LeftBarContainer>
        <Link to="/">
          <I.menuSchedule />
        </Link>
        <Link to="/friend">
          <I.menuFriend />
        </Link>
        <Link to="/grounp">
          <I.menuGroup />
        </Link>
      </S.LeftBarContainer>
    </S.LeftBarWrapper>
  );
};

export default LeftBar;
