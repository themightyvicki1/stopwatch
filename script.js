let startTime;
let intervalId;

//function starts the timer
function startTimer() {
  startTime = Date.now();
  //to update, go to this function
  intervalId = setInterval(updateTime, 1000);
}

function stopTimer() {
  clearInterval(intervalId);
}

function resetTimer() {
  stopTimer();
  document.getElementById("hour").textContent = "00";
  document.getElementById("minute").textContent = "00";
  document.getElementById("second").textContent = "00";
  //document.getElementById("count").textContent = "00";
}

function updateTime() {
  const currentTime = Date.now() - startTime;
  const hours = Math.round(currentTime / 3600000);
  const minutes = Math.round(currentTime % 3600000) / 60000;
  const seconds = Math.round(currentTime % 60000) / 1000;
  //const milliseconds = Math.floor(currentTime % 1000) / 10;
  document.querySelector("#hour").textContent = hours
    .toString()
    .padStart(2, "0")
    .slice(0, 2);

  if (minutes === 52) {
    alert("take a break!");
  }
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
//select based on that id, add event listener - listening for a click, go to startTimer function
document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("stop").addEventListener("click", stopTimer);
document.getElementById("reset").addEventListener("click", resetTimer);
