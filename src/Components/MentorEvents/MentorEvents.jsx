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
        {eventsData.map((event, key) => {
          return <EventSummaryCard event={event} mentorId={id} />;
        })}
      </div>
    </div>
  );
}

export default MentorEvents;
