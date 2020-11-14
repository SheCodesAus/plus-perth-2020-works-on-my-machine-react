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
    console.log(e.target.value);
    let input = e.target.value.toLowerCase();
    console.log(input);
    const mentors = mentorList.filter(({ mentor_name }) =>
      mentor_name.toLowerCase().startsWith(input)
    );
    // const newNamesDisplayed = [...namesDisplayed, mentor.name];
    console.log({ input, mentors });
    setDisplayed(mentors);
  };

  useEffect(() => {
    console.log(clearSuggestions);
    if (clearSuggestions) {
      setDisplayed([]);
    }
  }, [clearSuggestions]);

  return (
    <div className="autocomplete">
      <form>
        <div className="form-item">
          {/* Add Mentor */}
          <input
            id="mentor-input"
            className="add-mentor form-input"
            type="text"
            name="Add Mentor"
            placeholder="Add Mentor"
            onChange={checkMatches}
          />
        </div>
      </form>
      <div className="auto-list">
        {namesDisplayed.map((mentor) => (
          <div onClick={() => addMentor(mentor)}>{mentor.mentor_name}</div>
        ))}
      </div>
    </div>
  );
}

export default AutocompleteInput;
