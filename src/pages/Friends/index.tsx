import * as I from "../../assets";
import * as C from "../../components";
import useModal from "../../hooks/useModal";
import AddFriendsModal from "../../modals/AddFriendsModal";
import * as S from "./style";

const Friends = () => {
  const { openModal } = useModal();
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
          <S.AddFriendsText>새로운 친구를 추가해 보세요</S.AddFriendsText>
          <C.FriendsList />
        </S.FriendListContainer>
      </S.FriendsContainer>
    </>
  );
};

export default Friends;
