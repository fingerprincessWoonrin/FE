// Friends.tsx 파일

import * as C from "../../components";
import * as S from "./style";
import * as I from "../../assets";
import React, { useState } from "react";

const Friends = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <S.FriendsContainer>
        <S.FriendListContainer>
          <S.ListHead>
            <S.Text>친구 목록</S.Text>
            <S.AddWrapper onClick={openModal}>
              <I.add />
            </S.AddWrapper>
          </S.ListHead>
          {/* <S.Nofriends>새로운 친구를 추가해 보세요</S.Nofriends> */}
          <C.FriendsList />
          {/* <C.FriendsList /> */}
        </S.FriendListContainer>
      </S.FriendsContainer>

      {isModalOpen && <C.AddFriendsModal closeModal={closeModal} />}
    </>
  );
};

export default Friends;
