import { useSetRecoilState, useRecoilValue } from "recoil";
import { ScheduleObject, SchedulePage } from "../../atoms";
import AddScheduleModalPage1 from "./page1";
import AddScheduleModalPage2 from "./page2";

const AddScheduleModal = () => {
  const schedulePage = useRecoilValue(SchedulePage);
  const setScheduleObject = useSetRecoilState(ScheduleObject);
  return (
    <>
      {schedulePage === 1 && (
        <AddScheduleModalPage1 setSchedule={setScheduleObject} />
      )}
      {schedulePage === 2 && (
        <AddScheduleModalPage2 setSchedule={setScheduleObject} />
      )}
    </>
  );
};

export default AddScheduleModal;
