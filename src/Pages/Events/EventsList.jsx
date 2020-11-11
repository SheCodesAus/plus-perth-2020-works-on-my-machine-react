import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./EventsList.css";
import EventsCard from "../../Components/EventsCard/EventsCard";

function EventsList() {
  const [eventsData, setEventsData] = useState({});

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}events/`)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        setEventsData(data);
      });
  }, []);

  return (
    <div>
      <div>
        <h1> Events list </h1>
        {eventsData &&
          eventsData.map((events, key) => {
            return <EventsCard key={key} eventsData={events} />;
          })}
      </div>
    </div>
  );
}
export default EventsList;
