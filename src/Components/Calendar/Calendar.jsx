import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import {
  GetEventType,
  ShortEvent,
} from "../../Helpers/CalendarStyleHelpers.js";
import "./Calendar.css";

function MyCalendar({ events, createEvent, viewEvent }) {
  // Set up the localizer for date formatting
  const localizer = momentLocalizer(moment);

  const eventStyleGetter = (event, start, end, isSelected) => {
    const eventClass = GetEventType(event.event_type);
    const lengthClass = ShortEvent(event.event_start, event.event_end);
    return { className: `${eventClass} ${lengthClass}` };
  };

  const parseStartDate = (event, start, end) => {
    return new Date(event.event_start);
  };

  const parseEndDate = (event, start, end) => {
    return new Date(event.event_end);
  };

  return (
    <div className="calendar-component" style={{ height: "50vw" }}>
      <Calendar
        events={events}
        titleAccessor="event_type"
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
        scrollToTime={moment().set({ h: 9, m: 0 }).toDate()}
        // tooltipAccessor="event_name"
      />
    </div>
  );
}

export default MyCalendar;
