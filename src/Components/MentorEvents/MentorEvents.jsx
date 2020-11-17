import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "./MentorEvents.css";
import EventSummaryCard from "../EventSummaryCard/EventSummaryCard";
import LoadingSpinner from "../FullPageLoader/FullPageLoader";

function MentorEvents() {
  const token = window.localStorage.getItem("token");
  const { id } = useParams();
  const [eventsData, setEventsData] = useState([]);
  const [loading, setLoading] = useState(true);

  const oldEvent = (eventEnd) => {
    const today = new Date();
    const eventDate = new Date(eventEnd);
    const timeDiff = today - eventDate;
    if (timeDiff > 0) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    if (token != null) {
      fetch(`${process.env.REACT_APP_API_URL}invitations/${id}`)
        .then((results) => {
          return results.json();
        })
        .then((data) => {
          setEventsData(data);
          setLoading(false);
        });
    }
  }, [token]);

  if (loading) return <LoadingSpinner />;

  return (
    <div>
      <h3 className="top_card"> Event Invitations </h3>
      <div className="mentor-events">
        {eventsData.length > 0 ? (
          eventsData.map((event, key) => {
            return oldEvent(event.event_end) ? (
              <></>
            ) : (
              <EventSummaryCard event={event} mentorId={id} />
            );
          })
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default MentorEvents;
