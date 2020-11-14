import React from "react";
import "./DeleteButton.css";
import DeleteIcon from "../Images/delete.svg";

function DeleteButton() {
  return (
    <button className="delete-btn">
      <img src={DeleteIcon} alt="Delete Icon" />
    </button>
  );
}

export default DeleteButton;
