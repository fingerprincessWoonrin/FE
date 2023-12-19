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
  padding: 4px;
  padding-left: 20px;
  outline: none;
  font-size: 1.3rem;
  font-weight: 500;

  &::placeholder {
    font-size: 1rem;
    font-weight: 500;
  }
`;

export const AddStudyButton = styled(C.Button)`
  margin-top: auto; 
`;
