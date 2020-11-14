import React from "react";
import "./MentorIcon.css";

function MentorIcon({ mentor, removeMentor }) {
  return (
    <div className="mentor-icon">
      <div className="mentor-icon-name">{mentor.mentor_name}</div>
      <button className="mentor-icon-btn" onClick={() => removeMentor(mentor)}>
        x
      </button>
    </div>
  );
}

export default MentorIcon;
