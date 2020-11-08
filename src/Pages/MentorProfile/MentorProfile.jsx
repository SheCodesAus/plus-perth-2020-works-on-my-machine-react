import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import { mentorDetail as mentorData } from "../../data";
import ProcessStatus from "../../Components/ProcessStatus/ProcessStatus";
import LoadingSpinner from "../../Components/FullPageLoader/FullPageLoader";
import "./MentorProfile.css";

const MentorProfileDetails = () => {
  const token = window.localStorage.getItem("token");
  const [mentorData, setMentorData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    if (token != null) {
      fetch(`${process.env.REACT_APP_API_URL}mentors/mentor_profile/${id}`)
        .then((results) => {
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
      <div className="mentor-card">
        <h4 className="top_card"> Mentor Profile </h4>
        <div className="card-header">
          <h3 className="card-title">{mentorData.mentor_name}</h3>
          <p className="IndustryStyling">{mentorData.mentor_type} </p>
        </div>
        <div className="card-details">
          <p className="MentorDetailStyle">Email: {mentorData.mentor_email}</p>
          <p className="MentorDetailStyle">Phone: {mentorData.phone_number}</p>
          {/* <p className="bio">Bio: {mentorData.Bio}</p> */}
          <p className="MentorDetailStyle">Location: {mentorData.location}</p>
          <p className="MentorDetailStyle">
            One day workshop: {mentorData.one_day_workshop}
          </p>
          <p className="card-title">Skills</p>
          <div className="SkillStyle">
            {/* {mentorData.skills.map((skill) => ( */}
            <p className="SkillButton">{mentorData.skills}</p>
            {/* ))} */}
          </div>
        </div>
      </div>
      <ProcessStatus />
    </div>
  );
};

export default MentorProfileDetails;
