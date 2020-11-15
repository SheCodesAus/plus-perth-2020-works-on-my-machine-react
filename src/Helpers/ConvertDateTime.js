export const convertDateTime = (isoDateTime) => {
  const date = new Date(isoDateTime);
  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  const hour = date.getHours();
  let minutes = date.getMinutes();

  if (day < 10) {
    day = "0" + day;
  }
  if (month < 10) {
    month = "0" + month;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  const formattedDate = `${day}-${month}-${year} at ${hour}:${minutes}`;
  return formattedDate;
};

export const convertDate = (isoDateTime) => {
  const date = new Date(isoDateTime);
  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  if (day < 10) {
    day = "0" + day;
  }
  if (month < 10) {
    month = "0" + month;
  }
  const formattedDate = `${day}-${month}-${year}`;
  return formattedDate;
};

export const DateTimeInput = (isoDateTime) => {
  const date = new Date(isoDateTime);
  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let hour = date.getHours();
  let minutes = date.getMinutes();

  if (day < 10) {
    day = "0" + day;
  }
  if (month < 10) {
    month = "0" + month;
  }
  if (hour < 10) {
    hour = "0" + hour;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  const formattedDate = `${year}-${month}-${day}T${hour}:${minutes}`;
  return formattedDate;
};

