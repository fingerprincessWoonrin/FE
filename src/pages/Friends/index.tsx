import { useEffect, useState } from "react";
import * as I from "../../assets";
import * as C from "../../components";
import useModal from "../../hooks/useModal";
import AddFriendsModal from "../../modals/AddFriendsModal";
import * as S from "./style";

interface Friend {
  name: string;
}

const Friends = () => {
  const { openModal } = useModal();
  const [friends, setFriends] = useState<Friend[]>([]);

  useEffect(() => {
    const storedFriends = JSON.parse(localStorage.getItem("friend") ?? "[]");
    setFriends(storedFriends);
  }, [localStorage.getItem("friend")]);

  const handleDeleteStudy = (index: number) => {
    const updatedStudies = [...friends];
    updatedStudies.splice(index, 1);
    setFriends(updatedStudies);
    localStorage.setItem("friend", JSON.stringify(updatedStudies));
  };
  return (
    <>
      <S.FriendsContainer>
        <S.FriendListContainer>
          <S.ListHead>
            <S.Text>친구 목록</S.Text>
            <S.AddWrapper onClick={() => openModal(<AddFriendsModal />)}>
              <I.add />
            </S.AddWrapper>
          </S.ListHead>
          {friends.length === 0 ? (
            <S.AddFriendsText>새로운 친구를 추가해 보세요</S.AddFriendsText>
          ) : (
            friends.map((item, index) => (
              <C.StudyList
                key={index}
                name={item.name}
                onDelete={() => handleDeleteStudy(index)}
              />
            ))
          )}
        </S.FriendListContainer>
      </S.FriendsContainer>
    </>
  );
};

export default Friends;
