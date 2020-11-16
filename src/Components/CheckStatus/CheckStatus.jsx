import React from "react";
import { convertDate } from "../../Helpers/ConvertDateTime";
import CompleteButton from "../CompleteButton/CompleteButton";

function CheckStatus({ step, stepKey, stepName, date, markComplete }) {
  const dateCompleted = convertDate(date);
  return (
    <>
      {step ? (
        <li className="li-complete">
          <p className="complete">{dateCompleted}</p>
          <span className="step-name step-complete">{stepName}</span>
        </li>
      ) : (
        <li className="li-incomplete">
          <p className="incomplete">
            <CompleteButton markComplete={markComplete} stepKey={stepKey} />
          </p>
          <span className="step-name">{stepName}</span>
        </li>
      )}
    </>
  );
}

export default CheckStatus;
