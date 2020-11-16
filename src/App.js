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
import EventsList from "./Pages/Events/EventsList";
import SocialAuthRedirect from "./Pages/SocialAuthRedirect/SocialAuthRedirect";
import Error404 from "../src/Components/Error404/Error404";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import PublicRoute from "./Components/PublicRoute/PublicRoute";
import Test from "./Components/Test/Test";

function App() {
  return (
    <Router>
      <Nav image={require("./Logo/SheCodes-Logo.png")} />
      <Switch>
        <Route path="/mentorprofile/:id">
          <MentorProfile />
        </Route>
        <PrivateRoute path="/mentorlist">
          <MentorList />
        </PrivateRoute>
        <PrivateRoute path="/addmentor">
          <MentorForm />
        </PrivateRoute>
        <PrivateRoute path="/calendar">
          <EventsPage />
        </PrivateRoute>
        <PrivateRoute path="/events">
          <EventsList />
        </PrivateRoute>
        <PrivateRoute path="/home">
          <HomePage />
        </PrivateRoute>
        <PublicRoute exact path="/">
          <LandingPage />
        </PublicRoute>
        <Route path="/social-auth-success">
          <SocialAuthRedirect />
        </Route>
        <Route path="/test">
          <Test />
        </Route>
        <Route>
          <Route path="*" exact={true} component={Error404} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
