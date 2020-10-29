import React from "react";
<<<<<<< HEAD
import "./App.css";

function App() {
  return <div className="App"></div>;
=======
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
>>>>>>> bac826af08c6e1c0d72625f6bdd21fc7747c607f
}

export default App;
