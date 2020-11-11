import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MentorToDo from "../../Components/MentorToDo/MentorToDo";
import EventsList from "../Events/EventsList";
import EventsCard from "../../Components/EventsCard/EventsCard";
import LoadingSpinner from "../../Components/FullPageLoader/FullPageLoader";
import MentorProfileCard from "../../Components/MentorProfileCard/MentorProfileCard";

function HomePage() {
  const token = window.localStorage.getItem("token");
  const [mentorData, setMentorData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    if (token != null) {
      fetch(`${process.env.REACT_APP_API_URL}mentors/mentor_profile`)
        .then((results) => {
          console.log("------AS", results);
          return results.json();
        })
        .then((data) => {
          setMentorData(data);
          setLoading(false);
        });
    }
  }, [token]);

  if (loading) return <LoadingSpinner />;

  return (
    <div>
      <div>
        <h1 className="header-list"> Upcoming Events </h1>
        {/* {eventsList.map((events, key) => {
          return <EventsList id={key} eventsData={events} />;
        })} */}
      </div>
      <div className="all-mentor">
        <h1 className="header-list"> Mentor list </h1>
        {mentorData.map((mentor, key) => {
          return <MentorProfileCard key={key} mentorData={mentor} />;
        })}
      </div>
    </div>
  );
}
export default HomePage;
