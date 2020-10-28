import React from "react";
import Button from "../../Components/Button/Button";
import { mentorList } from "../../data";
import { Link } from "react-router-dom";
import MentorProfile from "../MentorProfile/MentorProfile";
import "./MentorsList.css";
import MentorProfileDetails from "../MentorProfile/MentorProfile";
import MentorProfileCard from "../../Components/MentorProfileCard/MentorProfileCard";

function MentorList() {
  console.log(mentorList);
  return (
    <div>
      <Button
        url="/addmentor"
        value="&#123; Add a mentor &#125;"
        type="Submit"
      />
      <h1> Mentor list </h1>
      {mentorList.map((mentorData, key) => {
        return (
          <Link to="/mentorprofile/1">
            <MentorProfileCard key={key} mentorData={mentorData} />
          </Link>
        );
      })}
    </div>
  );
}
export default MentorList;
