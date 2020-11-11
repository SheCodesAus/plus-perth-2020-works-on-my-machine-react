import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./Calendar.css";

function MyCalendar({ events, createEvent, viewEvent }) {
  // Set up the localizer for date formatting
  const localizer = momentLocalizer(moment);

  return (
    <div className="calendar-component" style={{ height: "500pt" }}>
      <Calendar
        events={events}
        titleAccessor="event_name"
        startAccessor="event_start"
        endAccessor="event_end"
        defaultDate={moment().toDate()}
        localizer={localizer}
        views={["month", "week", "day"]}
        selectable={true}
        onSelectSlot={createEvent}
        onSelectEvent={viewEvent}
      />
    </div>
  );
}

export default MyCalendar;
