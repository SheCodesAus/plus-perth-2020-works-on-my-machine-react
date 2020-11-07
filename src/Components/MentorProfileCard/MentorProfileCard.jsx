import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./MentorProfileCard.css";

function MentorProfileCard() {
  //variables

  const [mentorData, setMentorData] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}mentors/mentor_profile`)
      .then((results) => {
        console.log("---->", results);
        return results.json();
      })
      .then((data) => {
        setMentorData(data);
      });
  }, []);

  // template
  return (
    <div className="mentor-card">
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
