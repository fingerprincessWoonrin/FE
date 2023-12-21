import styled from "styled-components";

export const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 4rem 4rem 4rem 10rem;

  .e-control {
    border: 1px solid #ffffff;
    box-shadow: 0px 2px 4px rgba(204, 204, 204, 0.25);
  }

  .e-schedule .e-schedule-toolbar .e-tbar-btn .e-tbar-btn-text {
    color: #8eadff;
  }

  .e-schedule .e-month-view .e-appointment .e-appointment-details .e-subject {
    background-color: #8eadff;
  }

  .e-schedule .e-month-view .e-current-date .e-date-header,
  .e-schedule .e-month-agenda-view .e-current-date .e-date-header {
    background: none;
    border: 3px solid #8eadff;
    color: #000;
  }

  .e-schedule
    .e-schedule-toolbar
    .e-toolbar-items
    .e-toolbar-item.e-date-range
    .e-tbar-btn
    .e-tbar-btn-text {
    color: #8eadff;
  }

  .e-schedule .e-month-view .e-date-header-wrap table td {
    color: #8eadff;
  }

  .e-schedule .e-month-view .e-work-cells:hover,
  .e-schedule .e-month-agenda-view .e-work-cells:hover {
    cursor: pointer;
  }

  .e-schedule .e-month-view .e-date-header {
    font-size: 1.125rem;
  }
`;
