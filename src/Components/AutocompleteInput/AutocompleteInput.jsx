import React from "react";
import { useState, useCallback } from "react";

import "./AutocompleteInput.css";
import TextInput from "../TextInput/TextInput";
import { useEffect } from "react";

function AutocompleteInput({ addMentor, clearSuggestions }) {
  const token = window.localStorage.getItem("token");
  const [mentorList, setMentorList] = useState([]);
  const [namesDisplayed, setDisplayed] = useState([]);

  useEffect(() => {
    if (token != null) {
      fetch(`${process.env.REACT_APP_API_URL}mentors/mentor_profile`)
        .then((results) => {
          return results.json();
        })
        .then((data) => {
          setMentorList(data);
          //   setLoading(false);
        });
    }
  }, [token]);

  const checkMatches = (e) => {
    let input = e.target.value.toLowerCase();
    const mentors = mentorList.filter(({ mentor_name }) =>
      mentor_name.toLowerCase().startsWith(input)
    );
    // const newNamesDisplayed = [...namesDisplayed, mentor.name];
    setDisplayed(mentors);
  };

  useEffect(() => {
    if (clearSuggestions) {
      setDisplayed([]);
    }
  }, [clearSuggestions]);

  const handleKeyPress = (e) => {
    // triggers if enter or tab key is pressed
    if (e.key === "Tab") {
      e.preventDefault();
      addMentor(namesDisplayed[0].mentor_name);
    } else if (e.key === "Enter") {
      e.preventDefault();
      addMentor(namesDisplayed[0].mentor_name);
    }
  };

  return (
    <div className="autocomplete">
      <form>
        <div className="form-item">
          {/* Add Mentor */}
          <input
            id="mentor-input"
            className="form-input"
            type="text"
            name="Add Mentor"
            placeholder="Add Mentor"
            onChange={checkMatches}
            onKeyDown={handleKeyPress}
          />
        </div>
      </form>
      <div className="form-item">
        <div className="auto-list">
          {namesDisplayed.map(({ mentor_name }) => (
            <div onClick={() => addMentor(mentor_name)}>{mentor_name}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AutocompleteInput;
