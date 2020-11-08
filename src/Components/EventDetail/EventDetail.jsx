import React from "react";
import { convertDateTime } from "../../Helpers/ConvertDateTime";

function EventDetail(eventDetail) {
  const event = eventDetail.event;
  console.log(event);
  console.log(event.attendance_set);
  const start = convertDateTime(event.event_start);
  const end = convertDateTime(event.event_end);
  return (
    <div>
      <h2>{event.event_name}</h2>
      <p>{event.event_city}</p>
      <p>{event.event_type}</p>
      <p>
        {start} to {end}
      </p>
      <p>{event.event_location}</p>
      {event.attendance_set.map((mentor, key) => {
        console.log(mentor.mentor);
        return (
          <div>
            <p>
              {mentor.mentor.mentor_name}, status: {mentor.status}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default EventDetail;
