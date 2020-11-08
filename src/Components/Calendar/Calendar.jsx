import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";

import LoadingSpinner from "../FullPageLoader/FullPageLoader";
import "./Calendar.css";
import EventDetail from "../EventDetail/EventDetail";

function MyCalendar() {
  const token = window.localStorage.getItem("token");
  const [eventDetail, setEventDetail] = useState({});
  const [events, setEvents] = useState([
    {
      id: "qfrik96utr0vrg8hho08i52f2o",
      creator: 2,
      event_city: "Perth",
      event_name: "Event 3",
      event_type: "Plus",
      event_start: "2020-11-10T11:30:00+08:00",
      event_end: "2020-11-10T12:30:00+08:00",
      event_location: "45 St Georges Terrace, Perth WA 6000, Australia",
      all_day: false,
      mentor_list: [1, 2],
      attendance_set: [
        {
          status: "needsAction",
          mentor: {
            id: 1,
            mentor_name: "Bronwyn",
            mentor_email: "bronwyn.1992@gmail.com",
            phone_number: 123,
            location: "test",
            skills: "test",
            mentor_type: "Volunteer",
            one_day_workshop: false,
          },
        },
        {
          status: "accepted",
          mentor: {
            id: 2,
            mentor_name: "admin",
            mentor_email: "shecodestestuser@gmail.com",
            phone_number: 123,
            location: "test",
            skills: "test",
            mentor_type: "Volunteer",
            one_day_workshop: false,
          },
        },
      ],
    },
  ]);
  const [modalIsOpen, setIsOpen] = useState(false);

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

  Modal.setAppElement("#root");

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

  const [loading, setLoading] = useState(true);

  // const getEvents = async () => {
  //   if (token != null) {
  //     const response = await fetch(`${process.env.REACT_APP_API_URL}events/`, {
  //       method: "post",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Token ${token}`,
  //       },
  //     })
  //       .then((results) => {
  //         return results.json();
  //       })
  //       .then((data) => {
  //         console.log(data);
  //         setEvents(data);
  //         setLoading(false);
  //       });
  //     return response;
  //   }
  // };

  // useEffect(() => {
  //   getEvents();
  // }, []);

  // if (loading) return <LoadingSpinner />;

  // Set up the localizer for date formatting
  const localizer = momentLocalizer(moment);
  // Specify current time
  const now = new Date();
  // Add dummy event data
  // const eventList = [
  //   {
  //     id: 0,
  //     title: "All Day Event very long title",
  //     allDay: false,
  //     start: new Date(2020, 9, 10, 9, 30),
  //     end: new Date(2020, 9, 10, 13, 30),
  //     random: "Blahblah",
  //   },
  //   {
  //     id: 1,
  //     title: "Long Event",
  //     start: new Date(2020, 9, 7),
  //     end: new Date(2020, 9, 10),
  //     random: "Blahblah",
  //   },
  //   {
  //     id: 2,
  //     title: "Right now Time Event",
  //     start: now,
  //     end: now,
  //     random: "Blahblah",
  //   },
  // ];

  return (
    <div className="calendar-component" style={{ height: "500pt" }}>
      <Calendar
        events={events}
        titleAccessor="event_name"
        startAccessor="event_start"
        endAccessor="event_end"
        defaultDate={moment().toDate()}
        localizer={localizer}
        views={["month", "week", "day"]}
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
