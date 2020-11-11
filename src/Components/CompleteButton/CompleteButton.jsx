import React from "react";
import "./CompleteButton.css";

function CompleteButton({ markComplete, stepKey, ...props }) {
  return (
    <form className="complete-btn-container" type="button">
      <input
        className="complete-btn"
        value="✔"
        onClick={() => markComplete(stepKey)}
        {...props}
      />
    </form>
  );
}

export default CompleteButton;
