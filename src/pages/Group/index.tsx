import React from "react";
import * as C from "../../components";
import * as S from "./style";
import * as I from "../../assets";
import useModal from "../../hooks/useModal";
import AddStudyModal from "../../modals/AddStudyModal";

const Group = () => {
  const { openModal } = useModal();

  return (
    <S.GroupContainer>
      <S.GroupListContainer>
        <S.ListHead>
          <S.Text>스터디 목록</S.Text>
          <S.AddWrapper onClick={() => openModal(<AddStudyModal />)}>
            <I.add />
          </S.AddWrapper>
        </S.ListHead>
        <S.AddFriendsText>새로운 스터디를 추가해 보세요</S.AddFriendsText>
        <C.StudyList />
      </S.GroupListContainer>
    </S.GroupContainer>
  );
};

export default Group;
