import { useState } from "react";
import * as I from "../../assets";
import * as S from "./style";
import * as C from "../../components";
import "react-calendar/dist/Calendar.css";
import useModal from "../../hooks/useModal";
import AddScheduleModal from "../../modals/AddScheduleModal";

const Schedule = () => {
  const [date, setDate] = useState(new Date());
  const [isCalendar, setIsCalendar] = useState(false);
  const { openModal } = useModal();
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
          <S.ScheduleBox>
            <S.ScheduleInfoBox>
              <S.ScheduleCheckbox type="checkbox" />
              <S.SubjectBox>
                <div style={{ background: "#B97661" }} />
                <span>History</span>
              </S.SubjectBox>
            </S.ScheduleInfoBox>
            <S.ScheduleDateBox>
              <span>
                {`${date.getFullYear()}-${(date.getMonth() + 1)
                  .toString()
                  .padStart(2, "0")}-${date
                  .getDate()
                  .toString()
                  .padStart(2, "0")}`}
              </span>
              <div onClick={() => setIsCalendar((prev) => !prev)}>
                <I.menuCalendar />
              </div>
            </S.ScheduleDateBox>
            {isCalendar && (
              <C.CalendarComponent date={date} setDate={setDate} />
            )}
            <S.ScheduleTimeText>13:00 ~ 16:00</S.ScheduleTimeText>
            <S.ScheduleTitleListBox>
              <li>한국사 시험준비 하기</li>
              <li>범위는 임진왜란부터 병자호란까지</li>
              <li>문제풀기</li>
            </S.ScheduleTitleListBox>
            <S.ScheduleCommentBox>
              <S.ScheduleOptionBox>
                <I.commentIcon />
                <span>COMMENTS</span>
              </S.ScheduleOptionBox>
              <S.ScheduleOptionBox>
                <I.settingIcon />
                <span>SETTING</span>
              </S.ScheduleOptionBox>
              <S.ScheduleOptionBox>
                <I.addIcon />
                <span>ADD</span>
              </S.ScheduleOptionBox>
            </S.ScheduleCommentBox>
          </S.ScheduleBox>
        </S.ScheduleListContainer>
      </S.ScheduleContainer>
    </S.ScheduleWrapper>
  );
};

export default Schedule;
