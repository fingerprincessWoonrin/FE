// AddFriendsModal.tsx 파일

import React from "react";
import * as S from "./style";
import { createPortal } from "react-dom";

interface AddFriendsModalProps {
  closeModal: () => void;
}

const AddFriendsModal: React.FC<AddFriendsModalProps> = ({ closeModal }) => {
  const handleOverlayClick = () => {
    closeModal();
  };

  const handleContainerClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return createPortal(
    <S.Main onClick={handleOverlayClick}>
      <S.ModalContainer onClick={handleContainerClick}>
        <S.Title>친구추가하기</S.Title>
        <S.SearchBar placeholder="추가할 친구 이름을 적으세요" />

        <S.Error>존재하지 않는 계정입니다.</S.Error> 
        <S.AddFriendsButton
          width="100%"
          height="10%"
          background="#2260FF"
          color="#fff"
          borderradius="0.5625rem"
        >
          친구추가하기
        </S.AddFriendsButton>
      </S.ModalContainer>
    </S.Main>,
    document.body
  );
};

export default AddFriendsModal;
