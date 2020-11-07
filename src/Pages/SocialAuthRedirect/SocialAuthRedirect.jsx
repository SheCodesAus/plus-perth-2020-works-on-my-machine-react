import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import FullPageLoader from "../../Components/FullPageLoader/FullPageLoader";

function SocialAuthRedirect() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const history = useHistory();

  const url = new URL(
    `${process.env.REACT_APP_API_URL}users/social-auth-success`
  );
  url.search = location.search + "&access_type=offline";

  const socialAuth = async () => {
    const response = await fetch(url.toString(), {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((results) => {
        console.log(results);
        return results.json();
      })
      .then((data) => {
        window.localStorage.setItem("token", data.token);
        setLoading(false);
        console.log("push to home");
        history.push("/home");
      });
    return response;
  };

  useEffect(() => {
    socialAuth();
  }, []);

  if (loading) return <FullPageLoader />;

  return null;
}

export default SocialAuthRedirect;
