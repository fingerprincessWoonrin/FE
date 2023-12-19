import styled from "styled-components";
import { Checkbox } from "../SignUp/style";

export const ScheduleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 4rem 4rem 4rem 10rem;
`;

export const ScheduleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 2.5rem;
`;

export const ScheduleFilterBox = styled.div`
  width: 100%;
  height: 9rem;
  border-radius: 0.1875rem;
  border: none;
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(204, 204, 204, 0.25);
  padding: 0 2rem;
`;

export const SubjectGroupBox = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #b5b5b5;
  width: 100%;
  height: 3.5rem;
  font-size: 0.9375rem;
  font-weight: 500;
  gap: 3rem;
`;

export const SubjectBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  div {
    width: 0.5625rem;
    height: 0.5625rem;
    border-radius: 50%;
  }
`;

export const FilterBox = styled.div`
  margin-top: 1.2rem;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const Filter = styled.div`
  width: 10.625rem;
  height: 3.125rem;
  border: 1px solid #d4d4d4;
  border-radius: 0.125rem;
  display: flex;
  align-items: center;
  font-size: 1.125rem;
  font-weight: 600;
  padding-left: 1.4rem;
  gap: 3rem;

  svg {
    cursor: pointer;
  }
`;

export const ScheduleListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.5rem;
`;

export const AddScheduleBox = styled.div`
  width: 20rem;
  height: 21.875rem;
  border-radius: 0.1875rem;
  background-color: #ffffff;
  box-shadow: 0px 2px 4px rgba(204, 204, 204, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  svg {
    cursor: pointer;
  }
`;

export const AddTextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 400;
`;

export const ScheduleBox = styled.div`
  width: 20rem;
  height: 21.875rem;
  border-radius: 0.1875rem;
  background-color: #ffffff;
  box-shadow: 0px 2px 4px rgba(204, 204, 204, 0.25);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
`;

export const ScheduleInfoBox = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
  margin-left: 1rem;
`;

export const ScheduleCheckbox = styled(Checkbox)`
  width: 1.875rem;
  height: 1.875rem;
`;

export const ScheduleDateBox = styled.div`
  margin-top: 1.8rem;
  color: #2260ff;
  font-size: 1rem;
  font-weight: 400;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-left: 1rem;

  svg {
    width: 1.5rem;
    height: 1.5rem;
    cursor: pointer;
  }
`;

export const ScheduleTimeText = styled.span`
  color: #9a9a9a;
  font-size: 0.875rem;
  font-weight: 400;
  margin-top: 1.8rem;
  margin-left: 1rem;
`;

export const ScheduleTitleListBox = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #000000;
  font-size: 1.125rem;
  font-weight: 400;
  list-style: none;
  margin-top: 0.8rem;
  margin-left: 1rem;
`;

export const ScheduleCommentBox = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 0;
  font-size: 0.9375rem;
  font-weight: 400;
  gap: 1rem;
  border-top: 1px solid #dedede;
  padding-left: 1rem;
`;

export const ScheduleOptionBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;
  font-size: 0.8rem;
  font-weight: 400;
  height: 100%;
  color: #b8b8b8;
  border-right: 1px solid #dedede;
  padding-right: 0.5rem;
  cursor: pointer;

  &:last-of-type {
    border: none;
    padding-right: 1rem;
  }
`;
