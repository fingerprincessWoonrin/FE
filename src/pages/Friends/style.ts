import styled from "styled-components";

export const FriendsContainer = styled.div`
  width: 100vw;
  height: 80vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FriendListContainer = styled.div`
  width: 40rem;
  height: 38rem;

  border-radius: 0.9375rem;
  background: #fff;
  overflow: scroll;
`;

export const ListHead = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;
`;

export const Text = styled.div`
  font-family: Pretendard;
  font-size: 1.6871rem;
  font-style: normal;
  font-weight: 600;

  margin-left: 2rem;
`;

export const AddWrapper = styled.span`
  margin-top: 1rem;
  margin-right: 2rem;
`;

export const Nofriends = styled.div`
  color: #000;
  font-family: Inter;
  font-size: 1.1rem;
  font-weight: 400;

  margin-top: 2.5rem;
  margin-left: 1.5rem;
`;
