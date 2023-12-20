import Portal from "../../portal";
import * as S from "./style";
import useModal from "../../hooks/useModal";
import { useState } from "react";

const AddFriendsModal = () => {
  const { closeModal } = useModal();
  const [friend, setFriend] = useState("");
  const handleCreateFriend = () => {
    if (friend.trim() !== "") {
      const existingStudies =
        JSON.parse(localStorage.getItem("friend") ?? "[]") || [];
      const newFriend = { name: friend };
      const updatedStudies = [...existingStudies, newFriend];
      localStorage.setItem("friend", JSON.stringify(updatedStudies));
      closeModal();
    }
  };

  return (
    <Portal onClose={closeModal}>
      <S.ModalContainer>
        <S.Title>친구추가하기</S.Title>
        <S.SearchBar
          placeholder="추가할 친구 이름을 적으세요"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFriend(e.target.value)
          }
        />
        <S.AddFriendsButton
          width="100%"
          height="3.5rem"
          background="#2260FF"
          color="#fff"
          radius="0.5625rem"
          fontSize="1.1rem"
          fontWeight="500"
          border="none"
          onClick={handleCreateFriend}
        >
          친구추가하기
        </S.AddFriendsButton>
      </S.ModalContainer>
    </Portal>
  );
};

export default AddFriendsModal;
