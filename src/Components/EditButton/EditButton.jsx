import React, { useState } from "react";
import Modal from "react-modal";
import "./EditButton.css";
import EditIcon from "../Images/edit.svg";
import EditEvent from "../EditEvent/EditEvent";

function EditButton({ event }) {
  const [modalIsOpen, setIsOpen] = useState(false);
  // Set to app root
  Modal.setAppElement("#root");
  // Modal methods
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <button className="edit-btn">
        <img src={EditIcon} alt="Edit Icon" onClick={openModal} />
      </button>
      <Modal
        className="edit-event-modal"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Confirm Delete"
        shouldFocusAfterRender="true"
      >
        <EditEvent event={event} />
      </Modal>
    </div>
  );
}

export default EditButton;
