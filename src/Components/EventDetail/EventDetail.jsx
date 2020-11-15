import React, { useState } from "react";
import { Link } from "react-router-dom";
import { convertDateTime } from "../../Helpers/ConvertDateTime";
import DeleteButton from "../DeleteButton/DeleteButton";
import EditButton from "../EditButton/EditButton";
import EventTypeTag from "../EventTypeTag/EventTypeTag";
import FullPageLoader from "../FullPageLoader/FullPageLoader";
import "./EventDetail.css";

function EventDetail(eventDetail) {
  const token = window.localStorage.getItem("token");
  const event = eventDetail.event;
  const start = convertDateTime(event.event_start);
  const end = convertDateTime(event.event_end);
  const [loading, setLoading] = useState(false);
  const attending = [];
  const no_response = [];
  const declined = [];

  event.attendance_set.map((mentor, key) => {
    if (mentor.status === "accepted") {
      return attending.push(mentor.mentor);
    } else if (mentor.status === "declined") {
      return declined.push(mentor.mentor);
    } else {
      return no_response.push(mentor.mentor);
    }
  });

  const handleDeleteClick = () => {
    setLoading(true);
    fetch(`${process.env.REACT_APP_API_URL}events/${event.id}/`, {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
    })
      .then((results) => {
        return results.text();
      })
      .then((data) => {
        console.log(data);
        window.location.reload();
      });
  };

  if (loading) return <FullPageLoader />;

  return (
    <div className="event-detail">
      <div className="event-detail-top">
        <div className="tags">
          <EventTypeTag eventType={event.event_type} />
          <p className="city-tag">{event.event_city}</p>
        </div>
        <div className="edit-del-btns">
          <EditButton event={event} />
          <DeleteButton handleDelete={handleDeleteClick} />
        </div>
      </div>
      <h2 className="event-title">{event.event_name}</h2>
      <p>
        {start} to {end}
      </p>
      <p>{event.event_location}</p>
      <div className="status">
        {attending.length > 0 ? (
          <div className="attending">
            <h3>Attending</h3>
            {attending.map((mentor, key) => (
              <Link className="profile-link" to={`/mentorprofile/${mentor.id}`}>
                {mentor.mentor_name}
              </Link>
            ))}
          </div>
        ) : (
          <></>
        )}
        {no_response.length > 0 ? (
          <div className="no-response">
            <h3>Not Responded</h3>
            {no_response.map((mentor, key) => (
              <Link className="profile-link" to={`/mentorprofile/${mentor.id}`}>
                {mentor.mentor_name}
              </Link>
            ))}
          </div>
        ) : (
          <></>
        )}
        {declined.length > 0 ? (
          <div className="declined">
            <h3>Declined</h3>
            {declined.map((mentor, key) => (
              <Link className="profile-link" to={`/mentorprofile/${mentor.id}`}>
                {mentor.mentor_name}
              </Link>
            ))}
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default EventDetail;
