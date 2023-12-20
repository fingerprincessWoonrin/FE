import React, { useState } from "react";
import * as S from "./style";
import * as I from "../../assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState("USER");

  const handleInputChange = (e: any) => {
    setName(e.target.value);
  };

  const handleEnterKeyPress = (e: any) => {
    if (e.key === "Enter") {
      setEditMode(false);
    }
  };
  const router = useNavigate();

  return (
    <S.ProfilePageContainer>
      <S.ProfileContainer>
        <S.EditButtonWrapper onClick={() => setEditMode(true)}>
          <I.editButton />
        </S.EditButtonWrapper>
        <S.ProfileWrapper>
          <I.profile width="100" height="100" />
          {editMode ? (
            <S.NameInput
              type="text"
              value={name}
              onChange={handleInputChange}
              onKeyPress={handleEnterKeyPress}
            />
          ) : (
            <S.Name>{name}</S.Name>
          )}
          <S.Email>s2206@gsm.hs.kr</S.Email>
        </S.ProfileWrapper>
        <S.AccountOption>
          <S.Logout
            onClick={() => {
              toast.success("로그아웃 성공");
              router("/login");
            }}
          >
            로그아웃
          </S.Logout>
          <S.DeleteAccount>계정삭제</S.DeleteAccount>
        </S.AccountOption>
      </S.ProfileContainer>
    </S.ProfilePageContainer>
  );
};

export default Profile;
