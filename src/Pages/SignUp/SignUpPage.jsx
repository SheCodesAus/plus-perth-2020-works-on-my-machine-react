import React from "react";

import "./SignUpPage.css";

function SignUpPage() {
  return (
    <div className="LoginForm">
      <form>
        <div>
          <label htmlFor="username"> Username </label>
          <input
            type="text"
            id="username"
            placeholder="Enter username"
            // onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password"> Password </label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
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
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUpPage;
