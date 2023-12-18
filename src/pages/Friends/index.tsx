// Friends.tsx 파일

import * as C from "../../components";
import * as S from "./style";
import * as I from "../../assets";
import React, { useState } from "react";
import useModal from "../../hooks/useModal";
import AddFriendsModal from "../../modals/AddFriendsModal";

const Friends = () => {
  const { openModal } = useModal();
  return (
    <>
      <S.FriendsContainer>
        <S.FriendListContainer>
          <S.ListHead>
            <S.Text>친구 목록</S.Text>
            <S.AddWrapper onClick={() => openModal(<AddFriendsModal />)}>
              <I.add />
            </S.AddWrapper>
          </S.ListHead>
          <S.Nofriends>새로운 친구를 추가해 보세요</S.Nofriends>
          <C.FriendsList />
          <C.FriendsList />
        </S.FriendListContainer>
      </S.FriendsContainer>
    </>
  );
};

export default Friends;
