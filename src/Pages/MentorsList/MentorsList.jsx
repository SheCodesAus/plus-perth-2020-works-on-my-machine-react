import React, { useState, useEffect } from "react";
import Button from "../../Components/Button/Button";
import { mentorList } from "../../data";
import { Link } from "react-router-dom";
import MentorProfile from "../MentorProfile/MentorProfile";
import "./MentorsList.css";
import MentorProfileCard from "../../Components/MentorProfileCard/MentorProfileCard";
import ImportCsv from "../../Components/ImportCSV/ImportCSV";

function MentorList() {
  return (
    <div>
      <div className="AddMentorButton">
        <Button
          url="/addmentor"
          value="&#123; Add a mentor &#125;"
          type="Submit"
        />
      </div>
      <div>
        <ImportCsv />
      </div>
      <div className="all-mentor">
        <h1 className="header-list"> Mentor list </h1>
        {mentorList.map((mentor, key) => {
          return <MentorProfileCard key={key} mentorData={mentor} />;
        })}
      </div>
    </div>
  );
}
export default MentorList;
