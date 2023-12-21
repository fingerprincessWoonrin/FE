import React from "react";
import * as I from "../../assets";
import * as S from "./style";

interface StudyListProps {
  name: string;
  onDelete?: () => void;
}

const StudyList: React.FC<StudyListProps> = ({ name, onDelete }) => {
  return (
    <S.StudyListContainer>
      <S.Profile>
        <I.profile width="50" height="50" />
        <S.Name>{name}</S.Name>
      </S.Profile>
      <S.DeleteWrapper
        onClick={() => {
          if (onDelete) {
            onDelete();
          }
        }}
      >
        <I.deletes />
      </S.DeleteWrapper>
    </S.StudyListContainer>
  );
};

export default StudyList;
