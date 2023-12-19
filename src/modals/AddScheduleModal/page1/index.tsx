import * as S from "./style";
import * as I from "../../../assets";
import Portal from "../../../portal";
import useModal from "../../../hooks/useModal";
import { useSetRecoilState } from "recoil";
import { SchedulePage } from "../../../atoms";

const AddScheduleModalPage1 = () => {
  const setSchedulePage = useSetRecoilState(SchedulePage);
  const { closeModal } = useModal();

  return (
    <Portal
      onClose={() => {
        setSchedulePage(1);
        closeModal();
      }}
    >
      <S.AddScheduleModalPage1Container>
        <S.AddScheduleTitle>과목 추가하기</S.AddScheduleTitle>
        <S.XIcon
          onClick={() => {
            setSchedulePage(1);
            closeModal();
          }}
        >
          <I.x />
        </S.XIcon>
        <S.AddSubjectBox>
          <span>과목</span>
          <input />
          <div />
        </S.AddSubjectBox>
        <S.AddScheduleModalPage1ButtonContainer>
          <S.SkipButton onClick={() => setSchedulePage(2)}>
            건너뛰기
          </S.SkipButton>
          <S.NextButton onClick={() => setSchedulePage(2)}>
            추가하기
          </S.NextButton>
        </S.AddScheduleModalPage1ButtonContainer>
      </S.AddScheduleModalPage1Container>
    </Portal>
  );
};

export default AddScheduleModalPage1;
