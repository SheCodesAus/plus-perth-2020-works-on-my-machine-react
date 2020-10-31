import React from "react";
import "./MentorProfile.css";
import { mentorDetail as mentorData } from "../../data";
import ProcessStatus from "../../Components/ProcessStatus/ProcessStatus";
import Button from "../../Components/Button/Button";

const MentorProfileDetails = () => {
  // return <MentorProfileCard mentorData={mentorDetail} />;

  return (
    <div>
      <div className="project-card">
        <h4 className="top_card"> Mentor Profile </h4>
        <div className="card-header">
          <h3 className="card-title">{mentorData.mentor_name}</h3>
          <p className="IndustryStyling">{mentorData.mentor_type} </p>
        </div>
        <div className="card-details">
          <p className="MentorDetailStyle">Email: {mentorData.mentor_email}</p>
          <p className="MentorDetailStyle">Phone: {mentorData.phone_number}</p>
          <p className="bio">Bio: {mentorData.Bio}</p>
          <p className="MentorDetailStyle">Location: {mentorData.location}</p>
          <p className="MentorDetailStyle">
            One day workshop: {mentorData.one_day_workshop}
          </p>
          <p className="card-title">Skills</p>
          <div className="SkillStyle">
            {mentorData.skills.map((skill, index) => (
              <p className="SkillButton">{skill}</p>
            ))}
          </div>
        </div>
      </div>
      <ProcessStatus />
    </div>
  );
};

export default MentorProfileDetails;
