import {
  Inject,
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
} from "@syncfusion/ej2-react-schedule";
import * as S from "./style";

const Calendar = () => {
  return (
    <S.CalendarContainer>
      <ScheduleComponent currentView="Month">
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
      </ScheduleComponent>
    </S.CalendarContainer>
  );
};

export default Calendar;
