import * as I from "../../assets";
import { FriendObjectTypes } from "../../atoms";
import * as S from "./style";

const FriendsList = () => {
  const storedArr = localStorage.getItem("friend");
  const parseArr: FriendObjectTypes[] = storedArr ? JSON.parse(storedArr) : [];

  return (
    <>
      {parseArr.map((item, idx) => (
        <S.MemberListContainer key={idx}>
          <S.Profile>
            <I.profile width="50" height="50" />
            <S.Name>{item.name}</S.Name>
          </S.Profile>
          <S.DeleteWrapper>
            <I.deletes />
          </S.DeleteWrapper>
        </S.MemberListContainer>
      ))}
    </>
  );
};

export default FriendsList;
