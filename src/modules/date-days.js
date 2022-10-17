const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const getDate = (date) => {
  const d = new Date(date);
  const day = weekday[d.getUTCDay()];
  return day;
};

export default getDate;
