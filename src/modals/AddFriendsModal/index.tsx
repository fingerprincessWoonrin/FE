import Portal from "../../portal";
import * as S from "./style";
import useModal from "../../hooks/useModal";

const AddFriendsModal = () => {
  const { closeModal } = useModal();
  return (
    <Portal onClose={closeModal}>
      <S.ModalContainer>
        <S.Title>친구추가하기</S.Title>
        <S.SearchBar placeholder="추가할 친구 이름을 적으세요" />
        <S.Error>존재하지 않는 계정입니다.</S.Error>
        <S.AddFriendsButton
          width="100%"
          height="3.5rem"
          background="#2260FF"
          color="#fff"
          radius="0.5625rem"
          fontSize="1.1rem"
          fontWeight="500"
          border="none"
        >
          친구추가하기
        </S.AddFriendsButton>
      </S.ModalContainer>
    </Portal>
  );
};

export default AddFriendsModal;
