import React from "react";
import "./TextInput.css";

function MentorTextInput({ label, type, placeholder, value, error, ...props }) {
  return (
    <form>
      <label className="form-item">
        {label}:
        <input
          className="form-input"
          type={type}
          name={label}
          placeholder={placeholder}
          defaultValue={value}
          {...props}
          noValidate
        />
      </label>
      <span className="mentor-message">
        Enter the names of mentors seperated by commas
      </span>
    </form>
  );
}

export default MentorTextInput;
