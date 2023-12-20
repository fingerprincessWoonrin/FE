import React, { useState, useEffect } from "react";
import * as S from "./style";
import * as I from "../../assets";
import * as C from "../../components";
import useModal from "../../hooks/useModal";
import AddStudyModal from "../../modals/AddStudyModal";

interface Study {
  name: string;
}

const Group = () => {
  const { openModal } = useModal();
  const [studies, setStudies] = useState<Study[]>([]);

  useEffect(() => {
    const storedStudies = JSON.parse(localStorage.getItem("studies") ?? "[]");
    setStudies(storedStudies);
  }, [localStorage.getItem("studies")]);

  const handleDeleteStudy = (index: number) => {
    const updatedStudies = [...studies];
    updatedStudies.splice(index, 1);
    setStudies(updatedStudies);
    localStorage.setItem("studies", JSON.stringify(updatedStudies));
  };

  return (
    <S.GroupContainer>
      <S.GroupListContainer>
        <S.ListHead>
          <S.Text>스터디 목록</S.Text>
          <S.AddWrapper onClick={() => openModal(<AddStudyModal />)}>
            <I.add />
          </S.AddWrapper>
        </S.ListHead>
        {studies.length === 0 ? (
          <S.AddFriendsText>새로운 스터디를 추가해 보세요</S.AddFriendsText>
        ) : (
          studies.map((study, index) => (
            <C.StudyList
              key={index}
              name={study.name}
              onDelete={() => handleDeleteStudy(index)}
            />
          ))
        )}
      </S.GroupListContainer>
    </S.GroupContainer>
  );
};

export default Group;
