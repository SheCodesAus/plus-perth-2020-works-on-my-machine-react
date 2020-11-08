import React from "react";
import { convertDateTime } from "../../Helpers/ConvertDateTime";
import "./EventDetail.css";

function EventDetail(eventDetail) {
  const event = eventDetail.event;
  const start = convertDateTime(event.event_start);
  const end = convertDateTime(event.event_end);

  const attendingStatus = (status) => {
    if (status === "accepted") {
      return "attending";
    } else if (status === "declined") {
      return "declined";
    } else {
      return "no-response";
    }
  };

  return (
    <div className="event-detail">
      <div className="tags">
        <p className="purple-tag">{event.event_type}</p>
        <p className="orange-tag">{event.event_city}</p>
      </div>
      <h2>{event.event_name}</h2>
      <p>
        {start} to {end}
      </p>
      <p>{event.event_location}</p>
      {event.attendance_set.map((mentor, key) => {
        console.log(mentor.mentor);
        return (
          <div>
            <p className={attendingStatus(mentor.status)}>
              {mentor.mentor.mentor_name}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default EventDetail;
