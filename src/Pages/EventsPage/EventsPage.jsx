import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import LoadingSpinner from "../../Components/FullPageLoader/FullPageLoader";
import EventDetail from "../../Components/EventDetail/EventDetail";
import MyCalendar from "../../Components/Calendar/Calendar";
import "./EventsPage.css";
import CreateEvent from "../../Components/CreateEvent/CreateEvent";

function EventsPage() {
  const token = window.localStorage.getItem("token");
  const [eventDetail, setEventDetail] = useState({});
  const [events, setEvents] = useState({});
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState();
  const [loading, setLoading] = useState(true);
  const [newEventTime, setTime] = useState();

  // Fetch events from google calendar
  const getEvents = async () => {
    if (token != null) {
      const response = await fetch(`${process.env.REACT_APP_API_URL}events/`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
      })
        .then((results) => {
          return results.json();
        })
        .then((data) => {
          setEvents(data);
          setLoading(false);
        });
      return response;
    }
  };
  useEffect(() => {
    getEvents();
  }, []);

  // Pop up modal
  // Set the positioning for event pop up modal
  // const customStyles = {
  //   content: {
  //     width: "50%",
  //     top: "100%",
  //     left: "50%",
  //     right: "auto",
  //     bottom: "auto",
  //     marginRight: "-50%",
  //     transform: "translate(50%, 20%)",
  //   },
  // };

  // Set to app root
  Modal.setAppElement("#root");
  // Modal methods
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const createEvent = ({ start, end }) => {
    // console.log({ start, end });
    setTime({ start, end });
    openModal();
    setModalType("create");
  };

  const viewEvent = (object) => {
    setEventDetail(object);
    openModal();
    setModalType("view");
  };

  if (loading) return <LoadingSpinner />;

  //template
  return (
    <div className="calendar-page">
      <MyCalendar
        events={events}
        createEvent={createEvent}
        viewEvent={viewEvent}
      />
      <Modal
        className="event-modal"
        // style={customStyles}
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Confirm Delete"
        shouldFocusAfterRender="true"
      >
        {modalType === "view" ? (
          <EventDetail event={eventDetail} />
        ) : (
          <CreateEvent eventDateTime={newEventTime} />
        )}
      </Modal>
    </div>
  );
}
export default EventsPage;
