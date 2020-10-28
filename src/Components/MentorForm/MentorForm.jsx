import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
import "./MentorForm.css";

function MentorForm() {
  //   // variables
  //   const [credentials, setCredentials] = useState({
  //     username: "",
  //     password: "",
  //   });
  //   const history = useHistory();

  //   // methods
  //   const handleChange = (e) => {
  //     const { id, value } = e.target;
  //     setCredentials((prevCredentials) => ({
  //       ...prevCredentials,
  //       [id]: value,
  //     }));
  //   };
  //   const postData = async () => {
  //     const response = await fetch(
  //       //   ${process.env.REACT_APP_API_URL}api-token-auth/,
  //       {
  //         method: "post",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(credentials),
  //       }
  //     );
  //     return response.json();
  //   };
  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     if (credentials.username && credentials.password) {
  //       postData().then((response) => {
  //         console.log(response.token);
  //         window.localStorage.setItem("token", response.token);
  //         history.push("/");
  //       });
  //     }
  //   };

  //template
  return (
    <div>
      <form className="MentorForm">
        <div>
          <label htmlFor="Name"> Name </label>
          <input
            type="text"
            id="Name"
            placeholder="Name:"
            // onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email"> Email </label>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            // onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="phone"> Phone number </label>
          <input
            type="phone"
            id="phone"
            placeholder="Enter Phone number"
            // onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="MentorType"> Mentor Type </label>
          <input
            type="Dropdown"
            id="MentorType"
            placeholder="Select Mentor Type"
            name="Mentor Type"
            options={["Industry", "Lead", "Junior"]}
            // onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="Bio"> Mentor Bio </label>
          <input
            type="text"
            id="MentorBio"
            placeholder="Mentor Bio"
            // onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="Skills"> Skills </label>
          <input
            type="checkbox"
            id="skills"
            // onChange={handleChange}
          />
        </div>
        <div>
          <button
            className="ButtonLogin"
            type="Submit"
            id="login"
            // onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
export default MentorForm;
