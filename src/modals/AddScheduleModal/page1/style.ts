import styled from "styled-components";
import addSubjectColor from "../../../assets/addSubjectColor.png";

export const AddScheduleModalPage1Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  gap: 3rem;
  width: 22rem;
  height: 15rem;
  border-radius: 0.5rem;
`;

export const AddScheduleTitle = styled.span`
  font-size: 1.25rem;
  font-weight: 400;
  color: #000000;
  margin-top: 1.4rem;
  margin-left: -12rem;
`;

export const XIcon = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  cursor: pointer;
`;

export const AddSubjectBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.25rem;
  font-weight: 400;
  color: #000000;

  input {
    border: 1px solid #bcbcbc;
    border-radius: 0.1875rem;
    outline: none;
    height: 25px;
    width: 8.4375rem;
    background: none;
    padding-left: 0.5rem;
  }
`;

export const ColorBox = styled.div<{ color: string }>`
  width: 1.875rem;
  height: 2rem;
  border-radius: 50%;
  cursor: pointer;
  background-color: ${({ color }) => color};
`;

export const AddScheduleModalPage1ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1.2rem;

  div {
    width: 3.6rem;
    height: 1.5rem;
    border-radius: 0.25rem;
    font-size: 0.625rem;
    font-weight: 400;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
`;

export const SkipButton = styled.div`
  background: none;
  border: 1px solid #bcbcbc;
  color: #bcbcbc;
`;

export const NextButton = styled.div`
  background-color: #2260ff;
  border: 2px solid #2260ff;
  color: #ffffff;
`;
