import React, { useState, useEffect } from "react";
import Button from "../../Components/Button/Button";
import { mentorList } from "../../data";
import { Link } from "react-router-dom";
import MentorProfile from "../MentorProfile/MentorProfile";
import "./MentorsList.css";
import MentorProfileCard from "../../Components/MentorProfileCard/MentorProfileCard";

function MentorList() {
  // //variables
  // const [mentorList, setMentorList] = useState([]);

  // let query = useQuery();

  // const q = query.get("q");

  // //methods
  // useEffect(() => {
  //   fetch(`${process.env.REACT_APP_API_URL}mentorlist/${q ? `?q=${q}` : ""}`)
  //     .then((results) => {
  //       return results.json();
  //     })
  //     .then((data) => {
  //       setMentorList(data);
  //     });
  // }, [q]);

  console.log(mentorList);
  return (
    <div>
      <div className="AddMentorButton">
        <Button
          url="/addmentor"
          value="&#123; Add a mentor &#125;"
          type="Submit"
        />
      </div>
      <h1> Mentor list </h1>
      {mentorList.map((mentorData, key) => {
        return (
          <Link to="/mentorprofile/">
            <MentorProfileCard key={key} mentorData={mentorData} />
          </Link>
        );
      })}
    </div>
  );
}
export default MentorList;
