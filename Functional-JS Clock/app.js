const pipe = (...fns) => (arg) => fns.reduce((composed, f) => f(composed), arg);

//Functional Approach
const oneSec = () => 1000;
const getLocalDate = () =>  new Date();
const clear = () => console.clear();
const log = (message) => console.log(message);

const serializeClockTime = (date) => ({
  hours: date.getHours(),
  minutes: date.getMinutes(),
  seconds: date.getSeconds(),
  ampm: "AM",
});

const civilianHoursParser = (clockTime) => ({
  ...clockTime,
  hours: clockTime.hours > 12 ? clockTime.hours - 12 : clockTime.hours,
});

const appendAMPM = (clockTime) => ({
  ...clockTime,
  ampm: clockTime.hours >= 12 ? "PM" : "AM",
});

//Unary function receives only the first parameter and waits for the second one
const display = (target) => (time) => target(time);

const formatClock = (format) => (time) =>
  format
    .replace("hh", time.hours)
    .replace("mm", time.minutes)
    .replace("ss", time.seconds)
    .replace("tt", time.ampm);

const convertToCivilianTime = (clockTime) =>
  pipe(appendAMPM, civilianHoursParser)(clockTime);

const startTicking = () => {
  setInterval(
   pipe(
      clear,
      getLocalDate,
      serializeClockTime,
      convertToCivilianTime,
      formatClock("hh:mm:ss tt"),
      display(log)
    )
  , oneSec());
};

startTicking();


// let clockTimeTest = serializeClockTime(getLocalDate());
// let civHoursTest =  convertToCivilianTime(clockTimeTest);
// let formatClockTest= formatClock("hh:mm:ss tt")(civHoursTest);
// display(log)(formatClockTest);

// setInterval(logClockTime, 1000);

// function logClockTime() {
//   let time = getClockTime();
//   console.clear();
//   console.log(time);
// }

// function getClockTime() {
//   let date = new Date();
//   let time = {
//     hours: date.getHours(),
//     minutes: date.getMinutes(),
//     seconds: date.getSeconds(),
//     ampm: null,
//   };

//   if (time.hours > 12) {
//     time.ampm = "PM";
//   } else {
//     time.ampm = "AM";
//   }

//   if (time.hours > 12) {
//     time.hours = time.hours - 12;
//   }

//   if (time.hours < 10) {
//     time.hours = `0${time.hours}`;
//   }
//   if (time.minutes < 10) {
//     time.minutes = `0${time.minutes}`;
//   }
//   if (time.seconds < 10) {
//     time.seconds = `0${time.seconds}`;
//   }

//   return `${time.hours}:${time.minutes}:${time.seconds} ${time.ampm}`;
// }
