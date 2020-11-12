import React from "react";
import { Link } from "react-router-dom";
import "./EventsCard.css";

function EventsCard(props) {
  //variables
  const { eventsData } = props;

  // template
  return (
    <div>
      <Link to={`/events/${eventsData.id}`}>
        <h3 className="card-title">{eventsData.events_name}</h3>
        <div className="card-details">
          <p>City {eventsData.city}</p>
          <p>Start Time {eventsData.event_start}</p>
        </div>
      </Link>
    </div>
  );
}

export default EventsCard;
