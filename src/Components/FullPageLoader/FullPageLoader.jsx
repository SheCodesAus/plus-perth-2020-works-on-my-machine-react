import React, { useState } from "react";
import Spinner from "../Images/shecodes-loading.gif";
import "./FullPageLoader.css";

function FullPageLoader() {
  const [cheekyMessages, setMessages] = useState([
    "You look gorgeous today! 😍",
    "Just getting stuff ready...🐌",
    "Thinking about cupcakes... 🧁",
    "Take a moment to relax like Rexy-Roo",
    "You're amazing! 🤩",
    "How do you keep an idiot in suspense?",
    "Getting dizzy yet? 🥴 ",
    "So...do you come here often?",
    "Nice weather we're having today...",
  ]);
  const getRandomMessage = () => {
    const index = Math.floor(Math.random() * Math.floor(8));
    console.log(index);
    console.log(cheekyMessages[index]);
    return cheekyMessages[index];
  };

  return (
    <div className="fp-container">
      <img src={Spinner} className="fp-loader" alt="loading" />
      <p>{getRandomMessage()}</p>
    </div>
  );
}

export default FullPageLoader;
