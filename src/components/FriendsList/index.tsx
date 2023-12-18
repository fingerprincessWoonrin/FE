import * as C from "../../components";
import * as S from "./style";
import * as I from "../../assets";
import React from "react";

const FriendsList = () => {
  return (
    <>
      <S.MemberListContainer>
        <S.Profile>
          <I.profile />
          <S.Name>김철중</S.Name>
        </S.Profile>
        <S.DeleteWrapper>
          <I.deletes />
        </S.DeleteWrapper>
      </S.MemberListContainer>
    </>
  );
};

export default FriendsList;
