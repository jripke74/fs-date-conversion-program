const currentDate = new Date();

// 2. You should have a variable named currentDateFormat that holds
// the current date in the format Current Date and Time: <ddd> <MMM>
// <dd> <yyyy> <HH>:<mm>:<ss> <TIMEZONE>.
const currentDateFormat = `Current Date and Time: ${currentDate.toLocaleString(
  "en-US"
)}`;

console.log(currentDateFormat);

// 6. When the date object holds Fri Sep 27 2024 16:16:11 GMT+0500
// (Pakistan Standard Time), the function formatDateMMDDYYYY
// should return Formatted Date (MM/DD/YYYY): 9/27/2024.
function formatDateMMDDYYYY(dateNow) {
  return `Formatted Date (MM/DD/YYYY): ${dateNow.toLocaleDateString()}`;
}

function formatDateLong(dateNow) {
  return `Formatted Date (Month Day, Year): ${dateNow.toLocaleString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })}`;
}
