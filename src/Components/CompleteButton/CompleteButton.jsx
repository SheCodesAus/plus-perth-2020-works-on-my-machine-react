import React from "react";
import "./CompleteButton.css";

function CompleteButton({ markComplete, step, date, ...props }) {
  return (
    <form className="complete-btn-container" type="button">
      <input
        className="complete-btn"
        value="✔"
        onClick={() => markComplete(step, date)}
        {...props}
      />
    </form>
  );
}

export default CompleteButton;
