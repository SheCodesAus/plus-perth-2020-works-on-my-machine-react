import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
  Link,
} from "react-router-dom";
import "./Nav.css";
import Button from "../Button/Button";
import LoadingSpinner from "../FullPageLoader/FullPageLoader";

function Nav(props) {
  //template
  const { image } = props;
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  const location = useLocation();

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    token !== null ? setLoggedIn(true) : setLoggedIn(false);
    setLoading(false);
  }, [location]);

  if (loading) return <LoadingSpinner />;

  if (!loggedIn) return null;

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
