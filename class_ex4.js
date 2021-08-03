// Write a function that takes two arguments, today's date and your birth date, and returns the number of days until your next birthday

function daysToBithday(currentDay, birthDay) {
    const milliSecondsInADay = 86400000;
    currentDayMilliSecs = new Date(currentDay).getTime();
    birthDayMilliSecs = new Date(birthDay).getTime();

    return (birthDayMilliSecs - currentDayMilliSecs)/milliSecondsInADay;
}

const numOfDays = daysToBithday('2021-07-31','2021-08-14');

console.log(`${numOfDays} days to go for your birthday!!`);

