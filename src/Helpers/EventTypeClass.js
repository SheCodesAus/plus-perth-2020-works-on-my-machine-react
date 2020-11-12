export const GetEventType = (eventType) => {
  let type = undefined;
  if (eventType === "Plus") {
    type = "plus";
  }
  if (eventType === "Flash") {
    type = "flash";
  }
  if (eventType === "One Day Workshop") {
    type = "workshop";
  }
  return type;
};
