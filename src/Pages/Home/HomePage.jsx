import React from "react";
import { mentorList, eventsList } from "../../data";
import MentorToDo from "../../Components/MentorToDo/MentorToDo";
import EventsList from "../Events/EventsPage";
import EventsCard from "../../Components/EventsCard/EventsCard";

function HomePage() {
  return (
    <div>
      <div>
        <h1 className="header-list"> Upcoming Events </h1>
        {eventsList.map((events, key) => {
          return <EventsList id={key} eventsData={events} />;
        })}
      </div>
      <div className="all-mentor">
        <h1 className="header-list"> Mentor list </h1>
        {mentorList.map((mentor, key) => {
          return <MentorToDo id={key} mentorData={mentor} />;
        })}
      </div>
    </div>
  );
}
export default HomePage;
