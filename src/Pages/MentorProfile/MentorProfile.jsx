import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import { mentorDetail as mentorData } from "../../data";
import ProcessStatus from "../../Components/ProcessStatus/ProcessStatus";
import LoadingSpinner from "../../Components/FullPageLoader/FullPageLoader";
import "./MentorProfile.css";
import MentorSkills from "../../Components/MentorSkills/MentorSkills";
import { convertDateTime } from "../../Helpers/ConvertDateTime";


const MentorProfileDetails = () => {
  const token = window.localStorage.getItem("token");
  const [mentorData, setMentorData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const [eventsData, setEventsData] = useState([]);


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
     
      fetch(`${process.env.REACT_APP_API_URL}invitations/${id}`)
        .then((results) => {
          return results.json();
        })
        .then((data) => {
          setEventsData(data);
          setLoading(false);
        });
    }
  }, [token]);


  console.log(id)
  if (loading) return <LoadingSpinner />;

  return (
    <div>
      <div className="mentor-profile-card show-border">
        <h4 className="top_card"> Mentor Profile </h4>
        <div className="contents">
          <div className="card-header">
            <h3 className="card-title">{mentorData.mentor_name}</h3>
            <p className="IndustryStyling">{mentorData.mentor_type} </p>
          </div>
          <div className="card-details">
            <p className="MentorDetailStyle">
              Email: {mentorData.mentor_email}
            </p>
            <p className="MentorDetailStyle">
              Phone: {mentorData.phone_number}
            </p>
            {/* <p className="bio">Bio: {mentorData.Bio}</p> */}
            <p className="MentorDetailStyle">Location: {mentorData.location}</p>
            <p className="MentorDetailStyle">
              One day workshop: {mentorData.one_day_workshop}
            </p>
            <p className="card-title">Skills</p>
            <MentorSkills mentorSkills={mentorData.skills} />
          </div>
        </div>
      </div>
      <ProcessStatus />
      <h4 className="top_card_events"> Event Invitations </h4>
      <div className="invitations_container">
          {eventsData.map((eventData, key) => (
            <div className="Mentor_Events_Card">
              <p className="EventTitleStyle">{eventData.event_type}</p>
              <p className="event-location-style">{eventData.event_city}</p>
              <p className="card-details">{eventData.event_start} to {eventData.event_end}</p>
            </div>
          ))}; 
        </div>
      </div>
  )
}
export default MentorProfileDetails;
