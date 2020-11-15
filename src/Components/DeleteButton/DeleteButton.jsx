import React, { useState } from "react";
import Modal from "react-modal";
import "./DeleteButton.css";
import DeleteIcon from "../Images/delete.svg";
import ConfirmDelete from "../ConfirmDelete/ConfirmDelete";

function DeleteButton({ handleDelete }) {
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
      <button className="delete-btn" onClick={openModal}>
        <img src={DeleteIcon} alt="Delete Icon" />
      </button>
      <Modal
        className="confirm-delete-modal"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Confirm Delete"
        shouldFocusAfterRender="true"
      >
        <ConfirmDelete closeModal={closeModal} handleDelete={handleDelete} />
      </Modal>
    </div>
  );
}

export default DeleteButton;
