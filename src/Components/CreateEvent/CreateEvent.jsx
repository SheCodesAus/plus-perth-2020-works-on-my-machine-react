import React, { useState } from "react";

import "./CreateEvent.css";
import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";
import { DateTimeInput } from "../../Helpers/ConvertDateTime";
import AutocompleteInput from "../AutocompleteInput/AutocompleteInput";
import FullPageLoader from "../FullPageLoader/FullPageLoader";
import MentorIcon from "../MentorIcon/MentorIcon";

function CreateEvent({ eventDateTime }) {
  const token = window.localStorage.getItem("token");
  const start = DateTimeInput(eventDateTime.start);
  const end = DateTimeInput(eventDateTime.end);
  const [loading, setLoading] = useState(false);
  const [clearSuggestions, setClear] = useState(0);
  const [newEvent, setNewEvent] = useState({
    event_start: start,
    event_end: end,
    event_name: "",
    event_location: "",
    mentor_list: [],
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
    setLoading(true);
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

  const addMentor = (mentor) => {
    setNewEvent({
      ...newEvent,
      mentor_list: [...newEvent.mentor_list, mentor],
    });
    document.getElementById("mentor-input").value = "";
    setClear((clearCount) => clearCount + 1);
  };

  const removeMentor = (mentor) => {
    console.log("remove mentor");
    setNewEvent({
      ...newEvent,
      mentor_list: newEvent.mentor_list.filter(
        (removedMentor) => removedMentor !== mentor
      ),
    });
    console.log(mentor);
    console.log(newEvent.mentor_list);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // mentorList();
    if (validateForm(errorMessages)) {
      postData().then((response) => {
        console.log(response);
        window.location.reload();
      });
    } else {
      console.log("invalid form");
    }
  };

  if (loading) return <FullPageLoader />;

  return (
    <div className="overflow-container create-event">
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
        value={newEvent.event_start}
      />
      <TextInput
        id="event_end"
        label="Event End"
        type="datetime-local"
        placeholder="Event End"
        onChange={handleChange}
        value={newEvent.event_end}
      />
      <TextInput
        id="event_location"
        label="Event Location"
        type="text"
        placeholder="Event Location"
        error={errorMessages.event_location}
        onChange={handleChange}
      />

      <label className="form-item">Add Mentors</label>
      <div className="mentor-added">
        {newEvent.mentor_list.map((mentor, key) => {
          return <MentorIcon mentor={mentor} removeMentor={removeMentor} />;
        })}
      </div>
      <AutocompleteInput
        addMentor={addMentor}
        clearSuggestions={clearSuggestions}
      />

      <Button value="Submit" onClick={handleSubmit} type="submit" />
    </div>
  );
}

export default CreateEvent;
