import React from "react";
import { Link } from "react-router-dom";
import "./MentorToDo.css";

function MentorToDo(props) {
  const { mentorData, id } = props;

  // template
  return (
    <div>
      <Link>
        <h3 className="card-title">
          {mentorData.mentor_name} {id}
        </h3>
      </Link>
    </div>
  );
}

export default MentorToDo;
