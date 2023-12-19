import * as I from "../../assets";
import * as S from "./style";

const StudyList = () => {
  return (
    <S.StudyListContainer>
      <S.Profile>
        <I.profile width="50" height="50" />
        <S.Name>확통</S.Name>
      </S.Profile>
      <S.DeleteWrapper>
        <I.deletes />
      </S.DeleteWrapper>
    </S.StudyListContainer>
  );
};

export default StudyList;
