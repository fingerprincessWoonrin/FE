import styled from "styled-components";

export const ProfilePageContainer = styled.div`
  width: 100vw;
  padding-top: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProfileContainer = styled.div`
  width: 25rem;
  height: 30rem;
  border-radius: 0.75rem;
  background: #fff;
`;

export const EditButtonWrapper = styled.div`
  display: flex;
  justify-content: right;
  cursor: pointer;
  margin-top: 1rem;
  margin-right: 1rem;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`;

export const Name = styled.div`
  color: #000;
  font-size: 1.875rem;
  font-weight: 500;
  margin-top: 1rem;
`;

export const NameInput = styled.input`
  color: #000;
  font-size: 1.875rem;
  font-weight: 500;
  margin-top: 1rem;
  border: none;
  outline: none;
  text-align: center;
`;

export const Email = styled.div`
  color: #6e6d6d;
  font-size: 1.25rem;
  font-weight: 400;
  text-decoration-line: underline;
  cursor: pointer;
`;

export const AccountOption = styled.div`
  display: flex;
  margin-top: 5rem;
  justify-content: center;
`;

export const Logout = styled.div`
  color: #000;
  font-size: 1.25rem;
  font-weight: 400;
  text-decoration-line: underline;
  margin-right: 2rem;
  cursor: pointer;
`;

export const DeleteAccount = styled.div`
  color: #ff3434;
  font-size: 1.25rem;
  font-weight: 400;
  text-decoration-line: underline;
  cursor: pointer;
`;
