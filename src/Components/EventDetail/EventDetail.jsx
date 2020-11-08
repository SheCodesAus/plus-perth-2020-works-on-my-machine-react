import React from "react";
import { convertDateTime } from "../../Helpers/ConvertDateTime";
import "./EventDetail.css";

function EventDetail(eventDetail) {
  const event = eventDetail.event;
  const start = convertDateTime(event.event_start);
  const end = convertDateTime(event.event_end);
  const attending = [];
  const no_response = [];
  const declined = [];

  event.attendance_set.map((mentor, key) => {
    if (mentor.status === "accepted") {
      attending.push(mentor.mentor.mentor_name);
    } else if (mentor.status === "declined") {
      declined.push(mentor.mentor.mentor_name);
    } else {
      no_response.push(mentor.mentor.mentor_name);
    }
  });

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
      <div className="status">
        {attending.length > 0 ? (
          <div className="attending">
            <h3>Attending</h3>
            {attending.map((mentor, key) => (
              <p>{mentor}</p>
            ))}
          </div>
        ) : (
          <></>
        )}
        {no_response.length > 0 ? (
          <div className="no-response">
            <h3>Not Responded</h3>
            {no_response.map((mentor, key) => (
              <p>{mentor}</p>
            ))}
          </div>
        ) : (
          <></>
        )}
        {declined.length > 0 ? (
          <div className="declined">
            <h3>Declined</h3>
            {declined.map((mentor, key) => (
              <p>{mentor}</p>
            ))}
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default EventDetail;
