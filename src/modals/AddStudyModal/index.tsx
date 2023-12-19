import Portal from "../../portal";
import * as S from "./style";
import useModal from "../../hooks/useModal";

const AddFriendsModal = () => {
  const { closeModal } = useModal();
  return (
    <Portal onClose={closeModal}>
      <S.ModalContainer>
        <S.Title>스터디만들기</S.Title>
        <S.SearchBar placeholder="추가할 친구 이름을 적으세요" />
        <S.AddStudyButton
          width="100%"
          height="3.5rem"
          background="#2260FF"
          color="#fff"
          radius="0.5625rem"
          fontSize="1.1rem"
          fontWeight="500"
          border="none"
        >
          새로운 스터디 만들기
        </S.AddStudyButton>
      </S.ModalContainer>
    </Portal>
  );
};

export default AddFriendsModal;
