import React, { useState } from "react";
import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";

import { DateTimeInput } from "../../Helpers/ConvertDateTime";
import "./CreateEvent.css";

function CreateEvent({ eventDateTime }) {
  const token = window.localStorage.getItem("token");
  const start = DateTimeInput(eventDateTime.start);
  const end = DateTimeInput(eventDateTime.end);
  // const start = eventDateTime.start;
  // const end = eventDateTime.end;
  console.log(start);
  const [newEvent, setNewEvent] = useState({
    event_start: start,
    event_end: end,
    event_name: "",
    event_location: "",
    mentor_list: [],
  });

  const postData = async () => {
    if (token != null) {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}create-event/`,
        {
          method: "post",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
          },
          body: JSON.stringify(newEvent),
        }
      );
      return response.json();
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setNewEvent((eventDetails) => ({
      ...eventDetails,
      [id]: value,
    }));
  };

  const addMentor = (e) => {
    const { value } = e.target;
    setNewEvent((newEvent) => ({
      ...newEvent,
      mentor_list: [...newEvent.mentor_list, value],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postData().then((response) => {
      console.log(response);
      window.location.reload();
    });
  };

  const handleKeyPress = (e) => {
    // triggers if enter key is pressed
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  return (
    <div>
      <h2 className="form-title">Create New Event</h2>
      <TextInput
        id="event_name"
        label="Event Name"
        type="text"
        placeholder="Event Name"
        // value={newEvent.event_name}
        onChange={handleChange}
      />
      <TextInput
        id="event_start"
        label="Event Start"
        type="datetime-local"
        placeholder="Event Start"
        value={newEvent.event_start}
        onChange={handleChange}
      />
      <TextInput
        id="event_end"
        label="Event End"
        type="datetime-local"
        placeholder="Event End"
        value={newEvent.event_end}
        onChange={handleChange}
      />
      <TextInput
        id="mentor_list"
        label="Mentor List"
        type="text"
        placeholder="Mentors"
        // value={newEvent.mentor_list}
        initState={[]}
        onChange={addMentor}
      />
      <TextInput
        id="event_location"
        label="Event Location"
        type="text"
        placeholder="Event Location"
        // value={newEvent.event_location}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      <Button value="Submit" onClick={handleSubmit} type="submit" />
    </div>
  );
}

export default CreateEvent;
