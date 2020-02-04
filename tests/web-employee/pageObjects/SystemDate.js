var today = new Date();
var arr = [
  'Jan',
  'Feb',
  'March',
  'April',
  'May',
  'June',
  'July',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
];
var date =
  today.getDate() + ' ' + arr[today.getMonth()] + ' ' + today.getFullYear();

export const cardDate = {
  Date: date
};
