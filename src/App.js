import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { createBrowserHistory } from "history";
import "./App.css";
import Nav from "./Components/Nav/Nav";
import HomePage from "./Pages/Home/HomePage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import MentorList from "./Pages/MentorsList/MentorsList";
import MentorForm from "./Components/MentorForm/MentorForm";
import MentorProfile from "./Pages/MentorProfile/MentorProfile";
import Calendar from "./Pages/Calendar/Calendar";
import LandingPage from "./Pages/LandingPage/LandingPage";
import SocialAuthRedirect from "./Pages/SocialAuthRedirect/SocialAuthRedirect";

function App() {
  return (
    <Router>
      <Nav image={require("./Logo/SheCodes-Logo.png")} />
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/mentorprofile/:id">
          <MentorProfile />
        </Route>
        <Route path="/mentorlist">
          <MentorList />
        </Route>
        <Route path="/addmentor">
          <MentorForm />
        </Route>
        <Route path="/calendar">
          <Calendar />
        </Route>
        <Route path="/social-auth-success">
          <SocialAuthRedirect />
        </Route>
        <Route path="/home">
          <HomePage />
        </Route>
        <Route exact path="/">
          <LandingPage />
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
