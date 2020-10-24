import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav(props) {
  //template

  const { image } = props;

  return (
    <div>
      <div>
        <img className="Logo" src={image} alt="Logo" />
      </div>
      <div className="Menu">
        <Link to="/">Home</Link>
      </div>
      <div className="Menu">
        <Link to="/"> Calendar</Link>
      </div>
      <div className="Menu">
        <Link to="/">Mentors</Link>
      </div>
      <button className="Button">
        <Link to="/login">Login</Link>
      </button>
    </div>
  );
}
export default Nav;
