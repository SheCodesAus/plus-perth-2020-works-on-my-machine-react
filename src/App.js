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
import EventsPage from "./Pages/EventsPage/EventsPage";
import LandingPage from "./Pages/LandingPage/LandingPage";
import SocialAuthRedirect from "./Pages/SocialAuthRedirect/SocialAuthRedirect";
import Error404 from "../src/Components/Error404/Error404"

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
          <EventsPage />
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
        <Route>
          <Route path="*" exact={true} component={Error404} />
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
