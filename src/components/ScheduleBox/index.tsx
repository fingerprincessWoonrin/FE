import { useState } from "react";
import * as I from "../../assets";
import { ScheduleObjectTypes } from "../../atoms";
import * as C from "../../components";
import * as S from "./style";

const ScheduleBox = ({ item }: { item: ScheduleObjectTypes }) => {
  const [date, setDate] = useState<Date>(new Date(item.date));
  const [isCalendar, setIsCalendar] = useState<boolean>(false);

  return (
    <S.ScheduleBox>
      <S.ScheduleInfoBox>
        <S.ScheduleCheckbox type="checkbox" />
        <S.SubjectBox>
          <div style={{ background: item.color }} />
          <span>{item.subject}</span>
        </S.SubjectBox>
      </S.ScheduleInfoBox>
      <S.ScheduleDateBox>
        <span>
          {`${date.getFullYear()}-${(date.getMonth() + 1)
            .toString()
            .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`}
        </span>
        <div
          onClick={() => {
            setIsCalendar((prev) => !prev);
          }}
        >
          <I.menuCalendar />
        </div>
      </S.ScheduleDateBox>
      {isCalendar && <C.CalendarComponent date={date} setDate={setDate} />}
      <S.ScheduleTimeText>
        {item.startTime && item.endTime
          ? `${item.startTime.split("/")[0].padStart(2, "0")}:
    ${item.startTime.split("/")[1].padStart(2, "0")} ~
    ${item.endTime.split("/")[0].padStart(2, "0")}:
    ${item.endTime.split("/")[1].padStart(2, "0")}`
          : " "}
      </S.ScheduleTimeText>
      <S.ScheduleTitleListBox>{item.content}</S.ScheduleTitleListBox>
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
  );
};

export default ScheduleBox;
