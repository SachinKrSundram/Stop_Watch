import "./styles.css";
// select elements from the DOM
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const milliseconds = document.getElementById("milliseconds");
const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");
const resetBtn = document.getElementById("reset-btn");

let intervalId; // variable to hold setInterval id
let startTime; // variable to hold start time
let elapsedTime = 0; // variable to hold elapsed time

function padZero(num) {
  return num < 10 ? `0${num}` : num; // add leading zero if number is less than 10
}

function updateTime() {
  const endTime = new Date(); // get current time
  elapsedTime = endTime - startTime; // calculate elapsed time in milliseconds
  const totalSeconds = Math.floor(elapsedTime / 1000); // convert to seconds
  const totalMinutes = Math.floor(totalSeconds / 60); // convert to minutes
  const totalHours = Math.floor(totalMinutes / 60); // convert to hours
  const millisecondsValue = elapsedTime % 1000; // extract milliseconds from elapsed time
  const secondsValue = totalSeconds % 60; // extract seconds from total seconds
  const minutesValue = totalMinutes % 60; // extract minutes from total minutes
  const hoursValue = totalHours; // hours are already in total hours
  // update DOM elements with new values
  hours.textContent = padZero(hoursValue);
  minutes.textContent = padZero(minutesValue);
  seconds.textContent = padZero(secondsValue);
  milliseconds.textContent = padZero(Math.floor(millisecondsValue / 10)); // show only two digits for milliseconds
}

function startTimer() {
  startTime = new Date(); // get current time
  intervalId = setInterval(updateTime, 10); // update time every 10 milliseconds
}

function stopTimer() {
  clearInterval(intervalId); // stop updating time
}

function resetTimer() {
  clearInterval(intervalId); // stop updating time
  elapsedTime = 0; // reset elapsed time
  // update DOM elements with new values
  hours.textContent = "00";
  minutes.textContent = "00";
  seconds.textContent = "00";
  milliseconds.textContent = "00";
}

// attach event listeners to buttons
startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);
