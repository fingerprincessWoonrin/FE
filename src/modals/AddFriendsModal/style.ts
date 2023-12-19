import styled from "styled-components";
import * as C from "../../components";

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 29px;
  width: 24rem;
  height: 28rem;
  flex-shrink: 0;
  background-color: #fff;
  border-radius: 0.5625rem;
  background: #fff;
`;

export const Title = styled.h2`
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
  padding: 0.25rem;
  padding-left: 1.25rem;
  outline: none;
  font-size: 1.3rem;
  font-weight: 500;

  &::placeholder {
    font-size: 1rem;
    font-weight: 500;
  }
`;

export const Error = styled.div`
  color: #ff3120;
  font-size: 0.8rem;
  font-weight: 400;
  margin-top: 1rem;
  margin-left: 0.5rem;
`;

export const AddFriendsButton = styled(C.Button)`
  margin-top: auto; /* Button을 아래로 밀어내려가게 하기 위해 margin-top을 auto로 설정 */
`;
