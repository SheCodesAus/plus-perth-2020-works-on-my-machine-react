import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { createBrowserHistory } from "history";
import "./App.css";
import Nav from "./Components/Nav/Nav";
import HomePage from "./Pages/Home/HomePage";
import LoginPage from "./Pages/Login/LoginPage";

function App() {
  return (
    <Router>
      <Nav image={require("./Logo/SheCodes-Logo.png")} />
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
        {/* <Route path="/SignUpPage">
              <SignUpPage />
            </Route> */}
        {/* <Route path="*">
              <NotFound />
            </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
