import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import ReactDom from "react-dom";
import Button from "../Button/Button";
import { CSVReader } from "react-papaparse";

import "./ImportCSV.css";
import LoadingSpinner from "../FullPageLoader/FullPageLoader";

function ImportCsv() {
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const token = window.localStorage.getItem("token");
  var mentorData = [];

  const csvConfig = {
    header: true,
  };

  const handleOnDrop = (data) => {
    console.log("HandleDrop");
    data.forEach((mentor) => {
      mentorData.push(mentor.data);
    });
    console.log("Csv data", mentorData);
  };

  const postData = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}mentors/mentor_file_upload/`,
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          // Authorization: `Token ${token}`,
        },
        body: JSON.stringify(mentorData),
      }
    );
    return response;
  };

  const SendMentorData = (e) => {
    e.preventDefault();
    setLoading(true);
    if (mentorData.length > 0) {
      postData().then((response) => {
        console.log(response);
        setLoading(false);
        window.location.reload();
      });
    }
  };

  if (loading) return <LoadingSpinner />;

  return (
    <div>
      <form>
        <div className="csv">
          <CSVReader onDrop={handleOnDrop} config={csvConfig}>
            <span className="csv-text"> Drop CSV file here </span>
          </CSVReader>
        </div>
        <div className="SubmitButton">
          <Button type="submit" onClick={SendMentorData} value="Submit" />
        </div>
      </form>
    </div>
  );
}

export default ImportCsv;
