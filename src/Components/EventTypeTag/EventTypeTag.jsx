import React from "react";
import { GetEventType } from "../../Helpers/EventTypeClass.js";
import "./EventTypeTag.css";

function EventTypeTag({ eventType }) {
  const type = GetEventType(eventType);
  return <p className={`${type} event-tag`}>{eventType}</p>;
}

export default EventTypeTag;
