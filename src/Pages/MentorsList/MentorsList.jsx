import React, { useState, useEffect } from "react";
import Button from "../../Components/Button/Button";
import { Link, useParams } from "react-router-dom";
import MentorProfile from "../MentorProfile/MentorProfile";
import "./MentorsList.css";
import MentorProfileCard from "../../Components/MentorProfileCard/MentorProfileCard";
import ImportCsv from "../../Components/ImportCSV/ImportCSV";
import LoadingSpinner from "../../Components/FullPageLoader/FullPageLoader";

function MentorList() {
  const token = window.localStorage.getItem("token");
  const [mentorData, setMentorData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    if (token != null) {
      fetch(`${process.env.REACT_APP_API_URL}mentors/mentor_profile`)
        .then((results) => {
          console.log("------AS", results);
          return results.json();
        })
        .then((data) => {
          setMentorData(data);
          setLoading(false);
        });
    }
  }, [token]);

  if (loading) return <LoadingSpinner />;

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
      <h1 className="header-list"> Mentor list </h1>
      <div className="all-mentor">
        {mentorData.map((mentor, key, skills) => {
          return (
            <div className="all_mentor_card">
              <MentorProfileCard key={key} mentorData={mentor} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default MentorList;
