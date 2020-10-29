import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import "./calendar1.css";

const createEvent = ({ start, end }) => {
  console.log({ start, end });
};

function MyCalendar() {
  // Set up the localizer for date formatting
  const localizer = momentLocalizer(moment);

  // Specify current time
  const now = new Date();

  // Add dummy event data
  const events = [
    {
      id: 0,
      title: "All Day Event very long title",
      allDay: false,
      start: new Date(2020, 9, 10, 9, 30),
      end: new Date(2020, 9, 10, 13, 30),
    },
    {
      id: 1,
      title: "Long Event",
      start: new Date(2020, 9, 7),
      end: new Date(2020, 9, 10),
    },
    {
      id: 2,
      title: "Right now Time Event",
      start: now,
      end: now,
    },
  ];
  console.log(events);
  return (
    <div style={{ height: "500pt" }}>
      <Calendar
        events={events}
        startAccessor="start"
        endAccessor="end"
        defaultDate={moment().toDate()}
        localizer={localizer}
        views={["month", "week", "day"]}
        selectable={true}
        onSelectSlot={createEvent}
      />
    </div>
  );
}

export default MyCalendar;
