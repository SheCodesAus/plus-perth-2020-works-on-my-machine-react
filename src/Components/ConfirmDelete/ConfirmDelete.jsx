import React from "react";
import "./ConfirmDelete.css";
import Button from "../Button/Button";

function ConfirmDelete() {
  return (
    <div className="confirm-delete-content">
      <h2>Delete?</h2>
      <p>Deleting this event will remove it from Google Calendar</p>
      <div className="modal-btns">
        <Button value="Delete" />
        <Button value="Cancel" />
      </div>
    </div>
  );
}

export default ConfirmDelete;
