import * as I from "../../assets";
import * as S from "./style";

const FriendsList = () => {
  return (
    <S.MemberListContainer>
      <S.Profile>
        <I.profile width="50" height="50" />
        <S.Name>김철중</S.Name>
      </S.Profile>
      <S.DeleteWrapper>
        <I.deletes />
      </S.DeleteWrapper>
    </S.MemberListContainer>
  );
};

export default FriendsList;
