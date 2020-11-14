import React from "react";
import "./EditButton.css";
import EditIcon from "../Images/edit.svg";

function EditButton() {
  return (
    <button className="edit-btn">
      <img src={EditIcon} alt="Edit Icon" />
    </button>
  );
}

export default EditButton;
