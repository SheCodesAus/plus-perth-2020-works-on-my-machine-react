import React from "react";
import "./Calendar.css";
import MyCalendar from "../../Components/Calendar/Calendar";

function Calendar() {
  //template
  return (
    <div className="calendar-page">
      <h1> Calendar </h1>
      <MyCalendar />
    </div>
  );
}
export default Calendar;
