import React, { ChangeEvent, useState } from "react";
import { HexColorPicker } from "react-colorful";
import { useResetRecoilState, useSetRecoilState } from "recoil";
import * as I from "../../../assets";
import {
  ScheduleObject,
  ScheduleObjectTypes,
  SchedulePage,
} from "../../../atoms";
import useModal from "../../../hooks/useModal";
import Portal from "../../../portal";
import * as S from "./style";

const AddScheduleModalPage1 = ({
  setSchedule,
}: {
  setSchedule: React.Dispatch<React.SetStateAction<ScheduleObjectTypes>>;
}) => {
  const setSchedulePage = useSetRecoilState(SchedulePage);
  const { closeModal } = useModal();
  const [color, setColor] = useState("#000000");
  const [isColor, setIsColor] = useState<boolean>(false);
  const [subject, setSubject] = useState<string>("");
  const resetSchedule = useResetRecoilState(ScheduleObject);

  return (
    <Portal
      onClose={() => {
        setSchedulePage(1);
        closeModal();
        resetSchedule();
      }}
    >
      <S.AddScheduleModalPage1Container>
        {isColor && (
          <HexColorPicker
            style={{
              position: "absolute",
              top: "-50%",
              left: "50%",
              zIndex: "99999",
            }}
            color={color}
            onChange={setColor}
          />
        )}
        <S.AddScheduleTitle>과목 추가하기</S.AddScheduleTitle>
        <S.XIcon
          onClick={() => {
            setSchedulePage(1);
            closeModal();
            resetSchedule();
          }}
        >
          <I.x />
        </S.XIcon>
        <S.AddSubjectBox>
          <span>과목</span>
          <input
            value={subject}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setSubject(e.target.value)
            }
            maxLength={10}
          />
          <S.ColorBox
            color={color}
            onClick={() => setIsColor((prev) => !prev)}
          />
        </S.AddSubjectBox>
        <S.AddScheduleModalPage1ButtonContainer>
          <S.SkipButton onClick={() => setSchedulePage(2)}>
            건너뛰기
          </S.SkipButton>
          <S.NextButton
            onClick={() => {
              setSchedule((prev) => ({
                ...prev,
                color,
                subject,
              }));
              setSchedulePage(2);
            }}
          >
            추가하기
          </S.NextButton>
        </S.AddScheduleModalPage1ButtonContainer>
      </S.AddScheduleModalPage1Container>
    </Portal>
  );
};

export default AddScheduleModalPage1;
