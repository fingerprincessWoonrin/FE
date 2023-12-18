import React from "react";
import Calendar from "react-calendar";

const CalendarComponent = ({
  date,
  setDate,
}: {
  date: Date;
  setDate: React.Dispatch<React.SetStateAction<Date>>;
}) => {
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
        }}
        locale="ko"
        formatDay={(_locale, date) =>
          date.toLocaleString("en", { day: "numeric" })
        }
        calendarType="US"
      />
    </div>
  );
};

export default CalendarComponent;
