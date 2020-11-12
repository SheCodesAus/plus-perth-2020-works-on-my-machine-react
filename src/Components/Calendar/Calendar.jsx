import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { GetEventType } from "../../Helpers/EventTypeClass.js";
import "./Calendar.css";

function MyCalendar({ events, createEvent, viewEvent }) {
  // Set up the localizer for date formatting
  const localizer = momentLocalizer(moment);

  const eventStyleGetter = (event, start, end, isSelected) => {
    const className = GetEventType(event.event_type);
    return { className: className };
  };

  const parseStartDate = (event, start, end) => {
    return new Date(event.event_start);
  };

  const parseEndDate = (event, start, end) => {
    return new Date(event.event_end);
  };

  console.log(typeof events[0].event_start);

  return (
    <div className="calendar-component" style={{ height: "500pt" }}>
      <Calendar
        events={events}
        titleAccessor="event_name"
        startAccessor={parseStartDate}
        endAccessor={parseEndDate}
        defaultDate={moment().toDate()}
        localizer={localizer}
        defaultView="week"
        views={["month", "week", "day"]}
        selectable={true}
        onSelectSlot={createEvent}
        onSelectEvent={viewEvent}
        eventPropGetter={eventStyleGetter}
      />
    </div>
  );
}

export default MyCalendar;
