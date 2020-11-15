import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProcessStatus from "../../Components/ProcessStatus/ProcessStatus";
import LoadingSpinner from "../../Components/FullPageLoader/FullPageLoader";
import "./MentorProfile.css";
import MentorSkills from "../../Components/MentorSkills/MentorSkills";
import MentorEvents from "../../Components/MentorEvents/MentorEvents";

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

  if (loading) return <LoadingSpinner />;

  return (
    <div>
      <ProcessStatus />
      <div className="profile">
        <div className="mentor-profile-card show-border">
          <h3 className="top_card"> Mentor Profile </h3>
          <div className="contents">
            <div className="card-header">
              <h3 className="card-title">{mentorData.mentor_name}</h3>
              <p className="IndustryStyling">{mentorData.mentor_type} </p>
            </div>
            <div className="card-details">
              <p className="card-subheader">Personal Details</p>
              <p>Email: {mentorData.mentor_email}</p>
              <p>Phone: {mentorData.phone_number}</p>
              <p>Location: {mentorData.location}</p>
              <p className="card-subheader">Skills</p>
              <MentorSkills mentorSkills={mentorData.skills} />
            </div>
          </div>
        </div>
        <div className="mentor-events-container show-border">
          <MentorEvents />
        </div>
      </div>

      {/* <h4 className="top_card_events"> Event Invitations </h4>
      <div className="invitations_container">
        {eventsData.map((eventData, key) => (
          <div className="Mentor_Events_Card">
            <p className="EventTitleStyle">{eventData.event_type}</p>
            <p className="event-location-style">{eventData.event_city}</p>
            <p className="card-details">
              {eventData.event_start} to {eventData.event_end}
            </p>
          </div>
        ))}
        ;
      </div> */}
    </div>
  );
};
export default MentorProfileDetails;
