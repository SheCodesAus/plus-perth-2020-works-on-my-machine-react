import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

import "./Calendar.css";
import LoadingSpinner from "../FullPageLoader/FullPageLoader";
import EventDetail from "../EventDetail/EventDetail";

function MyCalendar() {
  // Set up the localizer for date formatting
  const localizer = momentLocalizer(moment);
  const token = window.localStorage.getItem("token");
  const [eventDetail, setEventDetail] = useState({});
  const [events, setEvents] = useState({});
  const [modalIsOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);

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
          console.log(data);
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
  const customStyles = {
    content: {
      width: "50%",
      top: "100%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(50%, 50%)",
    },
  };

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
    console.log({ start, end });
  };

  const viewEvent = (object) => {
    setEventDetail(object);
    openModal();
  };

  if (loading) return <LoadingSpinner />;

  return (
    <div className="calendar-component" style={{ height: "500pt" }}>
      <Calendar
        events={events}
        titleAccessor="event_name"
        startAccessor="event_start"
        endAccessor="event_end"
        defaultDate={moment().toDate()}
        localizer={localizer}
        views={["month", "day"]}
        selectable={true}
        onSelectSlot={createEvent}
        onSelectEvent={viewEvent}
      />
      <Modal
        className="event-modal"
        style={customStyles}
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Confirm Delete"
      >
        <EventDetail event={eventDetail} />
      </Modal>
    </div>
  );
}

export default MyCalendar;
