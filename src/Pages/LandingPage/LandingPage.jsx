import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import GoogleSignIn from "../../Components/Images/googlesignin.png";
import LoadingSpinner from "../../Components/FullPageLoader/FullPageLoader";
import "./LandingPage.css";

function LandingPage() {
  const googleLogIn = async () => {
    window.location = `${process.env.REACT_APP_API_URL}users/social-auth`;
  };

  return (
    <div>
      <div className="img-container">
        <img
          className="landing-img"
          src={require("../../Logo/SheCodes-Logo.png")}
          alt="placeholder"
        />
      </div>
      <div className="signin-ctn">
        <img
          className="gsignin"
          src={require("../../Components/Images/googlesignin.png")}
          alt="GoogleSignIn"
          onClick={googleLogIn}
        />
      </div>
    </div>
  );
}

export default LandingPage;
