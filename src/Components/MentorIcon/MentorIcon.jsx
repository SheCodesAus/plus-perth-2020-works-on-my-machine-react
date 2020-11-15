import React from "react";
import "./MentorIcon.css";

function MentorIcon({ mentor, removeMentor }) {
  return (
    <div className="mentor-icon">
      <div className="mentor-icon-name">{mentor}</div>
      <button className="mentor-icon-btn" onClick={() => removeMentor(mentor)}>
        x
      </button>
    </div>
  );
}

export default MentorIcon;
