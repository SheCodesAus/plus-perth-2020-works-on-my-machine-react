import React from "react";
import { Link } from "react-router-dom";
import "./MentorProfileCard.css";



function MentorProfileCard(props) {
  //variables
  const { mentorData } = props;
  console.log(mentorData)
  const skills = mentorData.skills.replaceAll(" ", "").split(",");


  // template
  return (
    <div className="mentor-card">
      <div className="card-details">
        <div className="card-top">
          <Link to={`/mentorprofile/${mentorData.id}`}>
            <h3 className="card-title">{mentorData.mentor_name}</h3>
            <p>Email {mentorData.mentor_email}</p>
            <p>Phone {mentorData.phone_number}</p>
          </Link>
          <div>
            <p className="IndustryStyling">{mentorData.mentor_type} </p>
          </div>
        </div>
      </div>
      <br></br>
      <div className="skills">
        {skills.map((skill, key) => {
          return <p className="SkillButton">{skill}</p>;
        })}
      </div>
    </div>
  );
}

export default MentorProfileCard;
