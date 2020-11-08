export const convertDateTime = (isoDateTime) => {
  const date = new Date(isoDateTime);
  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  const hour = date.getHours();
  const minutes = date.getMinutes();

  if (day < 10) {
    day = "0" + day;
  }
  if (month < 10) {
    month = "0" + month;
  }
  const formattedDate = `${day}-${month}-${year} at ${hour}:${minutes}`;
  return formattedDate;
};
