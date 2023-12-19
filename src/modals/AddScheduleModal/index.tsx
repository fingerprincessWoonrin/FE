import React from "react";
import { useRecoilValue } from "recoil";
import { SchedulePage } from "../../atoms";
import AddScheduleModalPage1 from "./page1";
import AddScheduleModalPage2 from "./page2";

const AddScheduleModal = () => {
  const schedulePage = useRecoilValue(SchedulePage);
  console.log(schedulePage);
  return (
    <>
      {schedulePage === 1 && <AddScheduleModalPage1 />}
      {schedulePage === 2 && <AddScheduleModalPage2 />}
    </>
  );
};

export default AddScheduleModal;
