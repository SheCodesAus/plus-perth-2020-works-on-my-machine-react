export const GetEventType = (eventType) => {
  let type = undefined;
  if (eventType === "Plus") {
    type = "plus";
  }
  if (eventType === "Flash") {
    type = "flash";
  }
  if (eventType === "Workshop") {
    type = "workshop";
  }
  return type;
};

export const ShortEvent = (start, end) => {
  start = new Date(start)
  end = new Date(end)
  console.log(start)
  console.log(end)
  const length = Math.abs(end - start) / 36e5
  console.log(length)
  if (length < 3){
    return "short-event"
  }
  return "long-event"
}