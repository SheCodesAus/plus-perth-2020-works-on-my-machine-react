import React from "react";
import "./MentorSkills.css";

function MentorSkills({ mentorSkills }) {
  const skills = mentorSkills.replaceAll(" ", "").split(",");
  return (
    <div className="skills">
      {skills.map((skill, key) => {
        return <p className="SkillButton">{skill}</p>;
      })}
    </div>
  );
}

export default MentorSkills;
