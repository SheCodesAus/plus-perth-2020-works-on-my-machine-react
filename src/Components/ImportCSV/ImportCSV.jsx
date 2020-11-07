import React, { Component, useEffect, useState } from "react";
import ReactDom from "react-dom";
import Button from "../Button/Button";
import { CSVReader } from "react-papaparse";

import "./ImportCSV.css";

function ImportCsv() {
  const [mentorData, setMentorData] = useState({});

  const handleOnDrop = (data) => {
    console.log("----->", data);
  };

  const SendMentorData = () => {
    fetch("http://localhost:3000/mentorlist", {
      mode: "no-cors",
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
        Accept: "application/json",
        type: "mentorData",
      },
      body: mentorData,
    });
    console
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        setMentorData(data);
      });
  };

  return (
    <form>
      <CSVReader onDrop={handleOnDrop}>
        <span> Drop CSV file here </span>
      </CSVReader>
      <Button
        onClick={() => SendMentorData()}
        value="&#123; Submit &#125;"
        type="submit"
      />
    </form>
  );
}

export default ImportCsv;
