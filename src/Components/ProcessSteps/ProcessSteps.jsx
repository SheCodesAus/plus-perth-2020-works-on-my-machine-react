import React from "react";
import "./ProcessSteps.css";

function Steps(props) {
  const { todo, index, completeTodo } = props;
  return (
    <div className={`todo ${todo.isCompleted ? "complete" : ""}`}>
      {todo.text}
      <div>
        <button className="button" onClick={() => completeTodo(index)}>
          Complete
        </button>
      </div>
    </div>
  );
}

export default Steps;
