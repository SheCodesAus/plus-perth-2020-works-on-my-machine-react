import React from "react";
import { Link } from "react-router-dom";
import "./MentorProfileCard.css";

function MentorProfileCard(props) {
  //variables
  const { mentorData } = props;
  console.log(mentorData);

  // template
  return (
    <div className="project-card">
      <Link to={`/mentorprofile/${mentorData.id}`}>
        <h3 className="card-title">{mentorData.mentor_name}</h3>
        <div className="card-details">
          <p>Email {mentorData.mentor_email}</p>
          <p>Phone {mentorData.phone_number}</p>
        </div>
      </Link>
    </div>
  );
}

export default MentorProfileCard;
