import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import Button from "../Button/Button";

function Nav(props) {
  //template

  const { image } = props;

  return (
    <div>
      <div>
        <div div className="header">
          <img className="Logo" src={image} alt="Logo" />
          <Button url="/login" value="&#123; Login &#125;" type="submit" />
          {/* <Link to="/login"> Login </Link> */}
        </div>
      </div>
      <div className="nav">
        <div className="Menu1">
          <Link to="/">Home</Link>
        </div>
        <div className="Menu1">
          <Link to="/calendar"> Calendar</Link>
        </div>
        <div>
          <Link to="/mentorlist">Mentors</Link>
        </div>
      </div>
    </div>
  );
}
export default Nav;
