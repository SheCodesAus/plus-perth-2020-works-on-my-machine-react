import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import LoadingSpinner from "../../Components/FullPageLoader/FullPageLoader";

function PrivateRoute({ path, ...props }) {
  const [loading, setLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);

  const history = useHistory();

  const isAuthenticated = () => {
    const token = window.localStorage.getItem("token");
    if (token != null) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    if (isAuthenticated()) {
      setLoading(false);
      setLoggedIn(true);
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (loggedIn) {
    return props.children;
  } else {
    history.push("/");
    return null;
  }
}

export default PrivateRoute;
