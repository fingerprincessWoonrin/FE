import { AddScheduleTitle, NextButton, XIcon } from "../page1/style";
import * as S from "./style";
import * as I from "../../../assets";
import Portal from "../../../portal";
import useModal from "../../../hooks/useModal";
import { ChangeEvent, useState } from "react";
import { CalendarComponent } from "../../../components";
import { useSetRecoilState } from "recoil";
import { SchedulePage } from "../../../atoms";

const AddScheduleModalPage2 = () => {
  const { closeModal } = useModal();
  const setSchedulePage = useSetRecoilState(SchedulePage);
  const [date, setDate] = useState<Date>(new Date());
  const [startHour, setStartHour] = useState<number>(new Date().getHours());
  const [startMinutes, setStartMinutes] = useState<number>(
    new Date().getMinutes()
  );
  const [endHour, setEndHour] = useState<number>(new Date().getHours());
  const [endMinutes, setEndMinutes] = useState<number>(new Date().getMinutes());
  const [isCalendar, setIsCalendar] = useState<boolean>(false);
  const [content, setContent] = useState<string>("");
  return (
    <Portal
      onClose={() => {
        setSchedulePage(1);
        closeModal();
      }}
    >
      <S.AddScheduleModalPage2Container>
        <AddScheduleTitle>일정 추가하기+</AddScheduleTitle>
        <XIcon
          onClick={() => {
            setSchedulePage(1);
            closeModal();
          }}
        >
          <I.x />
        </XIcon>
        <S.ScheduleDetailContainer>
          <S.ScheduleDetailBox>
            <span>날짜</span>
            <S.SelectBox onClick={() => setIsCalendar((prev) => !prev)}>
              <span>{`${date.getFullYear()}.${
                date.getMonth() + 1
              }.${date.getDate()}`}</span>
              <I.selectArrow />
            </S.SelectBox>
            {isCalendar && <CalendarComponent date={date} setDate={setDate} />}
          </S.ScheduleDetailBox>
          <S.ScheduleDetailBox>
            <span>시간</span>
            <S.SelectBox style={{ width: "4.3rem", paddingLeft: "0.7rem" }}>
              <input
                value={startHour}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setStartHour(+e.target.value)
                }
                maxLength={2}
              />
              <span
                style={{
                  margin: 0,
                  marginRight: "0.4rem",
                  marginLeft: "0.3rem",
                }}
              >
                :
              </span>
              <input
                value={startMinutes}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setStartMinutes(+e.target.value)
                }
                maxLength={2}
              />
            </S.SelectBox>
            <S.SelectBox style={{ width: "4.3rem", paddingLeft: "0.7rem" }}>
              <input
                value={endHour}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setEndHour(+e.target.value)
                }
                maxLength={2}
              />
              <span
                style={{
                  margin: 0,
                  marginRight: "0.4rem",
                  marginLeft: "0.3rem",
                }}
              >
                :
              </span>
              <input
                value={endMinutes}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setEndMinutes(+e.target.value)
                }
                maxLength={2}
              />
            </S.SelectBox>
          </S.ScheduleDetailBox>
          <S.ScheduleDetailBox style={{ alignItems: "flex-start" }}>
            <span>내용</span>
            <S.ScheduleContent
              value={content}
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                setContent(e.target.value)
              }
              maxLength={45}
            />
          </S.ScheduleDetailBox>
        </S.ScheduleDetailContainer>
        <S.AddButton
          onClick={() => {
            setSchedulePage(1);
            closeModal();
          }}
        >
          추가하기
        </S.AddButton>
      </S.AddScheduleModalPage2Container>
    </Portal>
  );
};

export default AddScheduleModalPage2;