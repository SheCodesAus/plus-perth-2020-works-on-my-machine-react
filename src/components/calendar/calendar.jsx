import React from "react";
import BigCalendar from "react-big-calendar";
import moment from "moment";

function calendar() {
  // Set up the localizer for date formatting
  const localizer = BigCalendar.momentLocalizer(moment);

  return (
    <div style={{ height: "500pt" }}>
      <BigCalendar
        startAccessor="start"
        endAccessor="end"
        defaultDate={moment().toDate()}
        localizer={localizer}
      />
    </div>
  );
}

export default calendar;
