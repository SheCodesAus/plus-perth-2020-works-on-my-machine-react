import React, { useState, useEffect } from "react";
import LoadingSpinner from "../../Components/FullPageLoader/FullPageLoader";
import { useParams } from "react-router-dom";
import EventDetail from "../../Components/EventDetail/EventDetail";
import "./HomePage.css";

function HomePage() {
  const token = window.localStorage.getItem("token");
  const [eventsData, setEventsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams()

  // Return true if event is in the past. Won't render event
  const oldEvent = (eventEnd) => {
    const today = new Date();
    const eventDate = new Date(eventEnd);
    const timeDiff = today - eventDate;
    if (timeDiff > 0) {
      return true;
    }
    return false;
  };

  const getEvents = async () => {
    if (token != null) {
      const response = await fetch(`${process.env.REACT_APP_API_URL}events/`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
      })
        .then((results) => {
          return results.json();
        })
        .then((data) => {
          setEventsData(data);
          setLoading(false);
        });
      return response;
    }
  };
  useEffect(() => {
    getEvents();
  }, []);

  if (loading) return <LoadingSpinner />;

  return (
    <div>
      <h1 className="header-list"> Upcoming Events </h1>
      <div className="EventsHomepage">
        {eventsData.length > 0 ? (
          eventsData.map((event, key) => {
            return oldEvent(event.event_end) ? (
              <></>
            ) : (
              <div className="EventsHomepageLayout">
                <EventDetail key={key} event={event} />
              </div>
            );
          })
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
export default HomePage;
