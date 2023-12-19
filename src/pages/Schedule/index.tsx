import { useState } from "react";
import * as I from "../../assets";
import * as S from "./style";
import * as C from "../../components";
import "react-calendar/dist/Calendar.css";
import useModal from "../../hooks/useModal";
import AddScheduleModal from "../../modals/AddScheduleModal";
import { ScheduleObjectTypes } from "../../atoms";

const Schedule = () => {
  const { openModal } = useModal();
  const storedArr = localStorage.getItem("schedules");
  const parseArr: ScheduleObjectTypes[] = storedArr
    ? JSON.parse(storedArr)
    : [];
  return (
    <S.ScheduleWrapper>
      <S.ScheduleContainer>
        <S.ScheduleFilterBox>
          <S.SubjectGroupBox>
            <span>All Subject (23)</span>
            <S.SubjectBox>
              <div style={{ background: "orange" }} />
              <span>Math (23)</span>
            </S.SubjectBox>
            <S.SubjectBox>
              <div style={{ background: "#90CD42" }} />
              <span>English (23)</span>
            </S.SubjectBox>
            <S.SubjectBox>
              <div style={{ background: "#4F92F8" }} />
              <span>Science (23)</span>
            </S.SubjectBox>
            <S.SubjectBox>
              <div style={{ background: "#B97661" }} />
              <span>History (23)</span>
            </S.SubjectBox>
          </S.SubjectGroupBox>
          <S.FilterBox>
            <S.Filter>
              <span>FILTERS</span>
              <I.filterArrow />
            </S.Filter>
          </S.FilterBox>
        </S.ScheduleFilterBox>
        <S.ScheduleListContainer>
          <S.AddScheduleBox>
            <div onClick={() => openModal(<AddScheduleModal />)}>
              <I.addScheduleIcon />
            </div>
            <S.AddTextBox>
              <span>Add</span>
              <span>Schedule</span>
            </S.AddTextBox>
          </S.AddScheduleBox>
          {parseArr.map((item, idx) => (
            <C.ScheduleBox item={item} key={idx} />
          ))}
        </S.ScheduleListContainer>
      </S.ScheduleContainer>
    </S.ScheduleWrapper>
  );
};

export default Schedule;
