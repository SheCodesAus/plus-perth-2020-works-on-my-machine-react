import React from "react";
import "./Error404.css";
import pic1 from "../../Logo/pic1.jpg";

function Error404() {
  return (
    <div className="ErrorPageWrapper">
      <h1 className="event-title">
        Oops! This page does not exist.
      </h1>
      <h2 className="event-title">
        Please return back to the Home page.
      </h2>
      <a href="/Home" className="homeButton">
        Home
      </a>
      <img className="pic1" src={pic1} alt="Cupcakes Photo" />
    </div>
  );
}
export default Error404;
