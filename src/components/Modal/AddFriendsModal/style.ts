import styled from "styled-components";
import * as C from "../../../components";

export const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;

  background: rgba(25, 25, 25, 0.3);
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: flex-start; 
  padding: 29px;
  width: 24.875rem;
  height: 35rem;
  flex-shrink: 0;
  background-color: #fff;
  border-radius: 0.9375rem;
  background: #fff;
`;

export const Title = styled.h2`
  font-family: Pretendard;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem; 
`;

export const SearchBar = styled.input`
  width: 100%;
  height: 3rem;
  border: none;
  border-radius: 0.5625rem;
  box-shadow: 0px 0px 4px 0px rgba(112, 144, 176, 0.25);
  background: #fff;

  margin-top: 1rem;
  padding: 4px;
`;

export const Error = styled.div`
  color: #ff3120;
  font-family: Pretendard;
  font-size: 1rem;
  font-weight: 400;

  margin-top: 1rem;
  margin-left: 0.5rem;
`;

export const AddFriendsButton = styled(C.Button)`
  margin-top: auto; /* Button을 아래로 밀어내려가게 하기 위해 margin-top을 auto로 설정 */
`;
