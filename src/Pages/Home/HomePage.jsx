import React from "react";
import { mentorList } from "../../data";
import MentorToDo from "../../Components/MentorToDo/MentorToDo";

function HomePage() {
  return (
    <div>
      <h1 className="header-list"> Upcoming Events </h1>

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
