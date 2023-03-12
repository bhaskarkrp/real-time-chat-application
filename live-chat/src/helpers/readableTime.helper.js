export const convertToIST = (timeFormat) => {
  var dateUTC = new Date(timeFormat);

  return {
    time: dateUTC.toLocaleTimeString(),
    date: dateUTC.toLocaleDateString(),
  };
};

export const format12hours = (time) => {
  const timeArray = time.split(":");
  if (timeArray[0]) {
    if (timeArray[0] > 12) {
      timeArray[0] = timeArray[0] - 12;
      return timeArray.join(":") + " PM";
    } else if (timeArray[0] >= 12 && timeArray[1] > 0) {
      return timeArray.join(":") + "PM";
    } else {
      return timeArray.join(":") + " AM";
    }
  }
};
