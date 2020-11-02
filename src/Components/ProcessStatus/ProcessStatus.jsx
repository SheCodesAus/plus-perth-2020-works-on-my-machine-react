import React, { useState, useEffect } from "react";
import Steps from "../ProcessSteps/ProcessSteps";
import { useHistory } from "react-router-dom";

import "./ProcessStatus.css";

function ProcessStatus() {
  // variables
  const [todos, setTodos] = useState([
    { text: "Interview", isCompleted: false },
    { text: "Contract", isCompleted: false },
    { text: "Info Sent", isCompleted: false },
  ]);

  const history = useHistory();

  // methods
  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
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
            removeTodo={removeTodo}
          />
        ))}
      </div>
    </div>
  );
}

export default ProcessStatus;
