import React, { useState, useEffect } from "react";
import Steps from "../ProcessSteps/ProcessSteps";
import { useHistory, useParams } from "react-router-dom";
import moment from "moment";

import LoadingSpinner from "../../Components/FullPageLoader/FullPageLoader";
import "./ProcessStatus.css";
import CheckStatus from "../CheckStatus/CheckStatus";

function ProcessStatus() {
  // variables
  let index = undefined;
  const [mentorProcess, setMentorProcess] = useState([]);

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

  const putData = async () => {
    if (token != null) {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}mentors/process/${id}/`,
        {
          method: "put",
          headers: {
            "Content-Type": "application/json",
            // Authorization: `Token ${token}`,
          },
          body: JSON.stringify(mentorProcess),
        }
      );
      return response.json();
    }
  };

  if (loading) return <LoadingSpinner />;

  const markComplete = (stepKey) => {
    const completedStep = `${stepKey}_completed`;
    const date = moment().toDate();
    mentorProcess[stepKey.toString()] = true;
    mentorProcess[completedStep.toString()] = date.toISOString();
    putData().then((response) => {
      console.log(response);
      window.location.reload();
    });
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
              stepKey="interview"
              stepName="Interview"
              date={mentorProcess.interview_completed}
              markComplete={markComplete}
            />
            <CheckStatus
              step={mentorProcess.offer_position}
              stepKey="offer_position"
              stepName="Offered Position"
              date={mentorProcess.offer_position_completed}
              markComplete={markComplete}
            />
            <CheckStatus
              step={mentorProcess.send_contract}
              stepKey="send_contract"
              stepName="Contract Sent"
              date={mentorProcess.send_contract_completed}
              markComplete={markComplete}
            />
            <CheckStatus
              step={mentorProcess.signed_contract}
              stepKey="signed_contract"
              stepName="Signed Contract Returned"
              date={mentorProcess.signed_contract_completed}
              markComplete={markComplete}
            />
            <CheckStatus
              step={mentorProcess.calendar_invites}
              stepKey="calendar_invites"
              stepName="Calendar Invite Sent"
              date={mentorProcess.calendar_invites_completed}
              markComplete={markComplete}
            />
            <CheckStatus
              step={mentorProcess.onboarding}
              stepKey="onboarding"
              stepName="Onboarding Complete"
              date={mentorProcess.onboarding_completed}
              markComplete={markComplete}
            />
            <CheckStatus
              step={mentorProcess.feedback}
              stepKey="feedback"
              stepName="Feedback Requested"
              date={mentorProcess.feedback}
              markComplete={markComplete}
            />
            <CheckStatus
              step={mentorProcess.offboarding}
              stepKey="offboarding"
              stepName="Offboarding Complete"
              date={mentorProcess.offboarding}
              markComplete={markComplete}
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProcessStatus;
