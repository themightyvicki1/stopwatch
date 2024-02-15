let startTime;
let intervalId;
let elapsedTime = 0;
let currentTime;
let hours;
let minutes;
let seconds;

//function starts the timer
function startTimer() {
  // if just starting, the time will be 0 otherwise a value will be stored in elapsedTime
  startTime = Date.now() - elapsedTime;
  //to update, go to this function
  //intervalId = setInterval(updateTime, 1000);
  intervalId = setInterval(function withElapsed() {
    elapsedTime = Date.now() - startTime;
    updateTime(elapsedTime);
  }, 1000);
}

function stopTimer() {
  clearInterval(intervalId);
  //  have to make sure to also clear the elapsed time value so it can restart at 0 when hitting stop/reset buttons
  elapsedTime = 0;
}

function resetTimer() {
  stopTimer();
  document.querySelector("#hour").textContent = "00";
  document.querySelector("#minute").textContent = "00";
  document.querySelector("#second").textContent = "00";
}

//pause the time, store the time passed and add it to the new start time
function pauseTimer() {
  clearInterval(intervalId);
  updateTime();
}

function updateTime() {
  currentTime = Date.now() - startTime;
  hours = Math.round(currentTime / 3600000);
  minutes = Math.round(currentTime % 3600000) / 60000;
  seconds = Math.round(currentTime % 60000) / 1000;

  if (currentTime === 10) {
    alert("take a break");
  }
  //const milliseconds = Math.floor(currentTime % 1000) / 10;
  document.querySelector("#hour").textContent = hours
    .toString()
    .padStart(2, "0")
    .slice(0, 2);

  if (minutes < 10) {
    document.querySelector("#minute").textContent = `0${Math.trunc(
      minutes.toString().padStart(2, "0").slice(0, 2)
    )}`;
  } else {
    document.querySelector("#minute").textContent = minutes
      .toString()
      .padStart(2, "0")
      .slice(0, 2);
  }

  if (seconds < 10) {
    document.querySelector("#second").textContent = `0${Math.trunc(
      seconds.toString().padStart(2, "0").slice(0, 2)
    )}`;
  } else {
    document.querySelector("#second").textContent = Math.trunc(
      seconds.toString().padStart(2, "0").slice(0, 2)
    );
  }
}

//add event listeners to each button
//select based on the id, add event listener - listening for a click, go to each function
document.querySelector("#start").addEventListener("click", startTimer);
document.querySelector("#pause").addEventListener("click", pauseTimer);
document.querySelector("#stop").addEventListener("click", stopTimer);
document.querySelector("#reset").addEventListener("click", resetTimer);
