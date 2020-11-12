import React, { useState } from "react";
import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";
import MentorTextInput from "../MentorTextInput/TextInput";
import { DateTimeInput } from "../../Helpers/ConvertDateTime";
import "./CreateEvent.css";

function CreateEvent({ eventDateTime }) {
  const token = window.localStorage.getItem("token");
  const start = DateTimeInput(eventDateTime.start);
  const end = DateTimeInput(eventDateTime.end);
  const [newEvent, setNewEvent] = useState({
    event_start: start,
    event_end: end,
    event_name: "",
    event_location: "",
    mentor_list: "",
  });
  const [errorMessages, setErrors] = useState({
    event_name: "",
    event_location: "",
  });

  const validEventName = RegExp("She Codes (Plus|Flash|Workshop)");

  const validEventLocation = RegExp("6\\d{3}|4\\d{3}");

  const validateInput = () => {
    let errors = { ...errorMessages };

    errors.event_name = validEventName.test(newEvent.event_name)
      ? ""
      : 'Event name needs to include "She Codes" and an event type, e.g "She Codes Plus"';

    errors.event_location = validEventLocation.test(newEvent.event_location)
      ? ""
      : "Event Location must include a postcode from WA or QLD";

    return errors;
  };

  // Find an if an instance of an error message exists, and return either true or false
  const validateForm = () => {
    const errors = validateInput();
    const firstValidationError = Object.values(errors).find(
      (error) => error.length > 0
    );
    setErrors(errors);
    return firstValidationError === undefined;
  };

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

  const mentorList = () => {
    let list = newEvent.mentor_list.replaceAll(" ", "").split(",");

    newEvent.mentor_list = list;
    console.log(list);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    mentorList();
    if (validateForm(errorMessages)) {
      postData().then((response) => {
        console.log(response);
        window.location.reload();
      });
    } else {
      console.log("invalid form");
    }
  };

  const handleKeyPress = (e) => {
    // triggers if enter key is pressed
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  return (
    <div className="overflow-container">
      <h2 className="form-title">Create New Event</h2>
      <TextInput
        id="event_name"
        label="Event Name"
        type="text"
        placeholder="Event Name"
        error={errorMessages.event_name}
        onChange={handleChange}
      />
      <TextInput
        id="event_start"
        label="Event Start"
        type="datetime-local"
        placeholder="Event Start"
        onChange={handleChange}
      />
      <TextInput
        id="event_end"
        label="Event End"
        type="datetime-local"
        placeholder="Event End"
        onChange={handleChange}
      />
      <MentorTextInput
        id="mentor_list"
        label="Mentor List"
        type="text"
        placeholder="Mentors"
        onChange={handleChange}
      />
      <TextInput
        id="event_location"
        label="Event Location"
        type="text"
        placeholder="Event Location"
        error={errorMessages.event_location}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      <Button value="Submit" onClick={handleSubmit} type="submit" />
    </div>
  );
}

export default CreateEvent;
