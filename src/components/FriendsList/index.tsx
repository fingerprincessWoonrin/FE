import * as I from "../../assets";
import * as S from "./style";

interface FriendListProps {
  name: string;
  onDelete?: () => void;
}
const FriendsList: React.FC<FriendListProps> = ({ name, onDelete }) => {
  return (
    <>
      <S.MemberListContainer>
        <S.Profile>
          <I.profile width="50" height="50" />
          <S.Name>{name}</S.Name>
        </S.Profile>
        <S.DeleteWrapper onClick={onDelete}>
          <I.deletes />
        </S.DeleteWrapper>
      </S.MemberListContainer>
    </>
  );
};

export default FriendsList;
