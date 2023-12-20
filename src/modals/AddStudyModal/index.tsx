import Portal from "../../portal";
import * as S from "./style";
import useModal from "../../hooks/useModal";
import { useState } from "react";

const AddStudyModal = () => {
  const { closeModal } = useModal();
  const [studyName, setStudyName] = useState("");

  const handleCreateStudy = () => {
    if (studyName.trim() !== "") {
      const existingStudies =
        JSON.parse(localStorage.getItem("studies") ?? "[]") || [];

      const newStudy = { name: studyName };
      const updatedStudies = [...existingStudies, newStudy];

      localStorage.setItem("studies", JSON.stringify(updatedStudies));

      closeModal();
    }
  };

  return (
    <Portal onClose={closeModal}>
      <S.ModalContainer>
        <S.Title>스터디만들기</S.Title>
        <S.SearchBar
          placeholder="스터디의 이름을 적으세요"
          value={studyName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setStudyName(e.target.value)
          }
        />
        <S.AddStudyButton
          width="100%"
          height="3.5rem"
          background="#2260FF"
          color="#fff"
          radius="0.5625rem"
          fontSize="1.1rem"
          fontWeight="500"
          border="none"
          onClick={handleCreateStudy} // 단계 2
        >
          새로운 스터디 만들기
        </S.AddStudyButton>
      </S.ModalContainer>
    </Portal>
  );
};

export default AddStudyModal;
