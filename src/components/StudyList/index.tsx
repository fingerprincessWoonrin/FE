import React from "react";
import * as S from "./style";
import * as I from "../../assets";

interface StudyListProps {
  name: string;
  onDelete?: () => void;
}

const StudyList: React.FC<StudyListProps> = ({ name, onDelete }) => {
  const handleDelete = () => {
    if (onDelete) {
      onDelete();
    }
  };

  return (
    <S.StudyListContainer>
      <S.Profile>
        <I.profile width="50" height="50" />
        <S.Name>{name}</S.Name>
      </S.Profile>
      <S.DeleteWrapper onClick={handleDelete}>
        <I.deletes />
      </S.DeleteWrapper>
    </S.StudyListContainer>
  );
};

export default StudyList;
