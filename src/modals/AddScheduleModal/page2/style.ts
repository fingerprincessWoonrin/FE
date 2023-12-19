import styled from "styled-components";
import { AddScheduleModalPage1Container } from "../page1/style";

export const AddScheduleModalPage2Container = styled(
  AddScheduleModalPage1Container
)`
  width: 370px;
  height: 430px;
`;

export const ScheduleDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
`;

export const ScheduleDetailBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  span {
    font-size: 1rem;
    font-weight: 400;
    color: #000000;
  }
`;

export const SelectBox = styled.div`
  width: 5.8rem;
  height: 1.75rem;
  border-radius: 0.1875rem;
  border: 1px solid #bcbcbc;
  display: flex;
  align-items: center;

  span {
    font-size: 0.75rem;
    font-weight: 400;
    color: #000000;
    margin-right: 0.4rem;
    margin-left: 0.5rem;
  }

  svg {
    cursor: pointer;
  }

  input {
    width: 1rem;
    height: 100%;
    border: none;
    outline: none;
    background: none;
  }
`;

export const ScheduleContent = styled.textarea`
  resize: none;
  width: 9.6rem;
  height: 4.375rem;
  border: 0.0625rem solid #bcbcbc;
  padding: 0.2rem;
  border-radius: 0.1875rem;
  overflow-y: hidden;
  outline: none;
`;

export const AddButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  background-color: #2260ff;
  border: 1px solid #2260ff;
  border-radius: 0.25rem;
  width: 4.5rem;
  height: 1.6rem;
  font-size: 0.75rem;
  font-weight: 200;
  cursor: pointer;
  margin-left: 7rem;
`;
