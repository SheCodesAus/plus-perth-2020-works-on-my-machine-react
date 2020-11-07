import React, { Component, useEffect, useState } from "react";
import ReactDom from "react-dom";
import Button from "../Button/Button";
import { CSVReader } from "react-papaparse";

import "./ImportCSV.css";

function ImportCsv() {
  const [mentorData, setMentorData] = useState({});

  const handleOnDrop = (data) => {
    setMentorData(data);
  };

  useEffect(() => {
    return () => console.log("--------->", mentorData);
  });
  const SendMentorData = (e) => {
    e.preventDefault();
    console.log(mentorData);

    // fetch(`${process.env.REACT_APP_API_URL}mentors/mentor_file_upload/`, {
    //   mode: "no-cors",
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //     Accept: "application/json",
    //     type: "mentorData",
    //   },
    //   body: mentorData,
    // })
    //   .then((results) => {
    //     return results.json();
    //   })
    //   .then((data) => {
    //     setMentorData(data);
    //   });
  };

  return (
    <div>
      {/* {mentorData != null &&
        mentorData.map((mentor, key) => {
          return <p key={key}>{mentor}</p>;
        })}
      } */}
      <form>
        <CSVReader onDrop={handleOnDrop}>
          <span> Drop CSV file here </span>
        </CSVReader>
        <button type="submit" onClick={SendMentorData}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default ImportCsv;
