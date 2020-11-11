import React, { useState, useEffect } from "react";
import Steps from "../ProcessSteps/ProcessSteps";
import { useHistory, useParams } from "react-router-dom";

import LoadingSpinner from "../../Components/FullPageLoader/FullPageLoader";
import "./ProcessStatus.css";

function ProcessStatus() {
  // variables
  const [mentorProcess, setMentorProcess] = useState([]);
  const [todos, setTodos] = useState([
    { text: "Interview", isCompleted: false },
    { text: "Contract", isCompleted: false },
    { text: "Info Sent", isCompleted: false },
  ]);

  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const token = window.localStorage.getItem("token");

  useEffect(() => {
    if (token != null) {
      fetch(`${process.env.REACT_APP_API_URL}mentors/process/${id}`)
        .then((results) => {
          return results.json();
        })
        .then((data) => {
          setMentorProcess(data);
          setLoading(false);
          console.log(data);
        });
    }
  }, [token]);

  if (loading) return <LoadingSpinner />;

  // methods
  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setTodos((newTodos) => ({
      ...newTodos[id],
      value,
    }));
  };

  // template
  return (
    <div>
      <div className="mentor-card">
        <h4 className="top_card">Mentor - Status </h4>
        {todos.map((todo, index) => (
          <Steps
            todo={todo}
            key={index}
            index={index}
            completeTodo={completeTodo}
          />
        ))}
      </div>
    </div>
  );
}

export default ProcessStatus;
