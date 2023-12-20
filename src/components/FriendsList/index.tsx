import { useEffect, useState } from "react";
import * as I from "../../assets";
import { FriendObjectTypes } from "../../atoms";
import * as S from "./style";

interface Friend {
  name: string;
}
const FriendsList = () => {
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
      {friends.map((item, idx) => (
        <S.MemberListContainer key={idx}>
          <S.Profile>
            <I.profile width="50" height="50" />
            <S.Name>{item.name}</S.Name>
          </S.Profile>
          <S.DeleteWrapper onClick={() => handleDeleteStudy(idx)}>
            <I.deletes />
          </S.DeleteWrapper>
        </S.MemberListContainer>
      ))}
    </>
  );
};

export default FriendsList;
