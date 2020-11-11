import React from "react";
import { convertDate } from "../../Helpers/ConvertDateTime";
import CompleteButton from "../CompleteButton/CompleteButton";
import "./CheckStatus.css";

function CheckStatus({ step, stepKey, stepName, date, markComplete }) {
  const dateCompleted = convertDate(date);
  return (
    <>
      {step ? (
        <li className="completed">
          <div className="step-detail">
            <p>{stepName}:</p>
            <p>{dateCompleted}</p>
          </div>
        </li>
      ) : (
        <li className="incomplete">
          <div className="step-detail">
            <p>{stepName}:</p>
            <CompleteButton markComplete={markComplete} stepKey={stepKey} />
          </div>
        </li>
      )}
    </>
  );
}

export default CheckStatus;
