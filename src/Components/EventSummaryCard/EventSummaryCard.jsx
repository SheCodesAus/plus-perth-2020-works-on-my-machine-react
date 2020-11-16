import React from "react";
import { convertDateTime } from "../../Helpers/ConvertDateTime";
import EventTypeTag from "../EventTypeTag/EventTypeTag";
import "./EventSummaryCard.css";

function EventSummaryCard({ event, mentorId }) {
  const start = convertDateTime(event.event_start);
  const end = convertDateTime(event.event_end);
  let mentorStatus = undefined;

  event.attendance_set.map((mentor, key) => {
    if (mentor.mentor.id.toString() === mentorId.toString()) {
      if (mentor.status === "accepted") {
        return (mentorStatus = "Accepted");
      } else if (mentor.status === "declined") {
        return (mentorStatus = "Declined");
      } else {
        return (mentorStatus = "Not Responded");
      }
    }
  });

  return (
    <div className="event-summary-card">
      <div className="tags">
        <EventTypeTag eventType={event.event_type} />
        <p className="city-tag">{event.event_city}</p>
      </div>
      <h3 className="card-subheader">{event.event_name}</h3>
      <div className="card-details">
        <p>{start}</p>
        <p>to</p>
        <p>{end}</p>
      </div>
      <p className="status-tag">{mentorStatus}</p>
    </div>
  );
}

export default EventSummaryCard;
