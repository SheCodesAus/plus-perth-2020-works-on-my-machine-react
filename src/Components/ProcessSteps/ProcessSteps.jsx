import React from "react";
import "./ProcessSteps.css";

function Steps(props) {
  const { todo, index, completeTodo, removeTodo } = props;
  return (
    <div className={`todo ${todo.isCompleted ? "complete" : ""}`}>
      {todo.text}
      <div>
        <button className="button" onClick={() => completeTodo(index)}>
          Complete
        </button>
        <button className="button" onClick={() => removeTodo(index)}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default Steps;
