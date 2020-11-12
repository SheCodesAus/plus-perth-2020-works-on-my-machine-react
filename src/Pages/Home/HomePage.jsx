import React, { useState, useEffect } from "react";
import LoadingSpinner from "../../Components/FullPageLoader/FullPageLoader";

import EventDetail from "../../Components/EventDetail/EventDetail";
import "./HomePage.css";

function HomePage() {
  const token = window.localStorage.getItem("token");
  const [eventsData, setEventsData] = useState([]);
  const [loading, setLoading] = useState(true);

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
          console.log(data);
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
        {eventsData.map((events, key) => {
          return (
            <div className="EventsHomepageLayout">
              <EventDetail key={key} event={events} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default HomePage;
