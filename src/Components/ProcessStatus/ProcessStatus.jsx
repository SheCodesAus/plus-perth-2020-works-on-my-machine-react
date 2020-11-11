import React, { useState, useEffect } from "react";
import Steps from "../ProcessSteps/ProcessSteps";
import { useHistory, useParams } from "react-router-dom";

import LoadingSpinner from "../../Components/FullPageLoader/FullPageLoader";
import "./ProcessStatus.css";
import CheckStatus from "../CheckStatus/CheckStatus";

function ProcessStatus() {
  // variables
  const [mentorProcess, setMentorProcess] = useState([]);
  // const [mentorProcess, setMentorProcess] = useState([
  //   {step: "Interview", isCompleted: false, dateCompleted: null},
  //   {step: "Offered Position", isCompleted: false, dateCompleted: null},
  //   {step: "Send Contract", isCompleted: false, dateCompleted: null},
  //   {step: "Contract Signed and returned", isCompleted: false, dateCompleted: null},
  //   {step: "Calendar Invite Sent", isCompleted: false, dateCompleted: null},
  //   {step: "Onboarding Complete", isCompleted: false, dateCompleted: null},
  //   {step: "Feedback Requested", isCompleted: false, dateCompleted: null},
  //   {step: "Offboarding Complete", isCompleted: false, dateCompleted: null},
  // ]);

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

  const markComplete = (step, date) => {
    for (let i = 0; i < mentorProcess.length; i++) {
      if (mentorProcess.step === step) {
        return i;
      }
    }
    console.log(step, date);
    console.log("complete");
  };

  // template
  return (
    <div>
      <div className="mentor-process">
        <h4 className="top_card">Mentor - Status </h4>
        <div className="container">
          <ul className="progressbar">
            <CheckStatus
              step={mentorProcess.interview}
              stepName="Interview"
              date={mentorProcess.interview_completed}
            />
            <CheckStatus
              step={mentorProcess.offer_position}
              stepName="Offered Position"
              date={mentorProcess.offer_position_completed}
            />
            <CheckStatus
              step={mentorProcess.send_contract}
              stepName="Contract Sent"
              date={mentorProcess.send_contract_completed}
            />
            <CheckStatus
              step={mentorProcess.signed_contract}
              stepName="Signed Contract Returned"
              date={mentorProcess.signed_contract_completed}
              markComplete={markComplete}
            />
            <CheckStatus
              step={mentorProcess.calendar_invites}
              stepName="Calendar Invite Sent"
              date={mentorProcess.calendar_invites_completed}
            />
            <CheckStatus
              step={mentorProcess.onboarding}
              stepName="Onboarding Complete"
              date={mentorProcess.onboarding_completed}
            />
            <CheckStatus
              step={mentorProcess.feedback}
              stepName="Feedback Requested"
              date={mentorProcess.feedback}
            />
            <CheckStatus
              step={mentorProcess.offboarding}
              stepName="Offboarding Complete"
              date={mentorProcess.offboarding}
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProcessStatus;
