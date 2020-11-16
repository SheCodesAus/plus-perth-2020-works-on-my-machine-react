import React, { useState } from "react";

import "./EditEvent.css";
import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";
import { DateTimeInput } from "../../Helpers/ConvertDateTime";
import AutocompleteInput from "../AutocompleteInput/AutocompleteInput";
import FullPageLoader from "../FullPageLoader/FullPageLoader";
import MentorIcon from "../MentorIcon/MentorIcon";

function EditEvent({ event }) {
  const token = window.localStorage.getItem("token");
  const start = DateTimeInput(event.event_start);
  const end = DateTimeInput(event.event_end);
  const [loading, setLoading] = useState(false);
  const [clearSuggestions, setClear] = useState(0);
  const [editedEvent, setEvent] = useState({
    mentor_list: event.mentor_list,
  });
  const [errorMessages, setErrors] = useState({
    event_name: "",
    event_location: "",
  });

  const validEventName = RegExp("She Codes (Plus|Flash|Workshop)");

  const validEventLocation = RegExp("6\\d{3}|4\\d{3}");

  const validateInput = () => {
    let errors = { ...errorMessages };

    if (editedEvent.event_name) {
      errors.event_name = validEventName.test(editedEvent.event_name)
        ? ""
        : 'Event name needs to include "She Codes" and an event type, e.g "She Codes Plus"';
    }
    if (editedEvent.event_location) {
      errors.event_location = validEventLocation.test(
        editedEvent.event_location
      )
        ? ""
        : "Event Location must include a postcode from WA or QLD";
    }

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

  const addMentor = (mentor) => {
    setEvent({
      ...editedEvent,
      mentor_list: [...editedEvent.mentor_list, mentor],
    });
    document.getElementById("mentor-input").value = "";
    setClear((clearCount) => clearCount + 1);
  };

  const removeMentor = (mentor) => {
    setEvent({
      ...editedEvent,
      mentor_list: editedEvent.mentor_list.filter(
        (removedMentor) => removedMentor !== mentor
      ),
    });
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setEvent((eventDetails) => ({
      ...eventDetails,
      [id]: value,
    }));
  };

  const putData = async () => {
    setLoading(true);
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}events/${event.id}/`,
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
        body: JSON.stringify(editedEvent),
      }
    );
    return response.json();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm(errorMessages)) {
      putData().then((response) => {
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
      //   handleSubmit(e);
    }
  };

  if (loading) return <FullPageLoader />;

  return (
    <div className="overflow-container">
      <h2 className="form-title">Edit Event</h2>
      <TextInput
        id="event_name"
        label="Event Name"
        type="text"
        placeholder="Event Name"
        error={errorMessages.event_name}
        onChange={handleChange}
        value={event.event_name}
      />
      <TextInput
        id="event_start"
        label="Event Start"
        type="datetime-local"
        placeholder="Event Start"
        onChange={handleChange}
        value={start}
      />
      <TextInput
        id="event_end"
        label="Event End"
        type="datetime-local"
        placeholder="Event End"
        onChange={handleChange}
        value={end}
      />
      <TextInput
        id="event_location"
        label="Event Location"
        type="text"
        placeholder="Event Location"
        error={errorMessages.event_location}
        onChange={handleChange}
        value={event.event_location}
      />

      <label className="form-item">Add Mentors</label>
      <div className="mentor-added">
        {editedEvent.mentor_list ? (
          editedEvent.mentor_list.map((mentor, key) => {
            return <MentorIcon mentor={mentor} removeMentor={removeMentor} />;
          })
        ) : (
          <></>
        )}
      </div>
      <AutocompleteInput
        addMentor={addMentor}
        clearSuggestions={clearSuggestions}
      />

      <Button value="Submit" onClick={handleSubmit} type="submit" />
    </div>
  );
}

export default EditEvent;
