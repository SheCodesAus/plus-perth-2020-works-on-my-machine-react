import React from "react";
import "./CompleteButton.css";

function CompleteButton({ markComplete, stepKey, ...props }) {
  return (
    <form className="complete-btn-container" type="button">
      {/* <input
        className="complete-btn"
        src={require("../Images/check-mark.svg")}
        onClick={() => markComplete(stepKey)}
        {...props}
      /> */}
      <button
        className="complete-btn"
        onClick={() => markComplete(stepKey)}
        {...props}
      >
        {/* <img src={require("../Images/check-mark.svg")} alt="checkmark" /> */}
        Mark Complete
      </button>
    </form>
  );
}

export default CompleteButton;
