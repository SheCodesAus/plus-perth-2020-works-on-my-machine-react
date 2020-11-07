import React, { useState, useEffect } from "react";
import { useLocation, useHistory, Link } from "react-router-dom";
import "./Nav.css";
import Button from "../Button/Button";
import LoadingSpinner from "../FullPageLoader/FullPageLoader";

function Nav(props) {
  //template
  const { image } = props;
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  const location = useLocation();
  const history = useHistory();

  const logOut = () => {
    window.localStorage.clear();
    history.push("/");
  };

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
          <Button onClick={logOut} value="&#123; Logout &#125;" type="submit" />
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
