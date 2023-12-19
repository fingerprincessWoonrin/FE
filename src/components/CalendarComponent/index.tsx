import React from "react";
import Calendar from "react-calendar";
import { useSetRecoilState } from "recoil";
import { ScheduleObject } from "../../atoms";

const CalendarComponent = ({
  date,
  setDate,
}: {
  date: Date;
  setDate: React.Dispatch<React.SetStateAction<Date>>;
}) => {
  const setScheduleObject = useSetRecoilState(ScheduleObject);
  return (
    <div
      style={{
        position: "absolute",
        top: "30%",
        zIndex: "999",
      }}
    >
      <Calendar
        value={date}
        onChange={(value) => {
          if (!(value instanceof Date)) return;
          setDate(value);
          setScheduleObject((prev) => ({
            ...prev,
            date: value.toString(),
          }));
        }}
        locale="ko"
        formatDay={(_locale, date) =>
          date.toLocaleString("en", { day: "numeric" })
        }
        calendarType="gregory"
      />
    </div>
  );
};

export default CalendarComponent;
