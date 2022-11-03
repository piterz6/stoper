const modalShow = document.querySelector(".info");
const modal = document.querySelector(".modal-shadow");
const closeModal = document.querySelector(".close");
const startBtn = document.querySelector(".start");
const stopwatch = document.querySelector(".stopwatch");
const pauseBtn = document.querySelector(".pause");
const showPauseTime = document.querySelector(".time");
const stopBtn = document.querySelector(".stop");
const timeList = document.querySelector(".time-list");
const historyBtn = document.querySelector(".history");
const resetBtn = document.querySelector(".reset");

let counter;
let minutes = 0;
let seconds = 0;
let timesArr = [];
const startCount = () => {
  timeList.style.display = "none";
  counter = setInterval(() => {
    seconds++;
    if (seconds <= 9) {
      stopwatch.textContent = `${minutes}:0${seconds}`;
    } else if (seconds > 9 && seconds < 59) {
      stopwatch.textContent = `${minutes}:${seconds}`;
    } else {
      minutes++;
      seconds = 0;
      stopwatch.textContent = `${minutes}:${seconds}`;
    }
  }, 100);
};

const pauseCounter = () => {
  clearInterval(counter);
};
const stopWatchFunction = () => {
  clearInterval(counter);
  if (stopwatch.textContent !== "0:00") {
    showPauseTime.style.visibility = "visible";
    timesArr.push(`Zapis nr ${timesArr.length + 1}: ${stopwatch.textContent}`);
  }
  showPauseTime.textContent = `Ostatni czas: ${stopwatch.textContent}`;
  minutes = 0;
  seconds = 0;
  stopwatch.textContent = "0:00";
};
const historyHandler = () => {
  timeList.style.display = "block";
  timeList.textContent = "";
  timesArr.forEach((time) => {
    const newLi = document.createElement("li");
    newLi.textContent = time;
    timeList.appendChild(newLi);
  });
};
const resetHandler = () => {
  timesArr = [];
  minutes = 0;
  seconds = 0;
  stopwatch.textContent = "0:00";
  clearInterval(counter);
  timeList.textContent = "";
  showPauseTime.textContent = "0:00";
  showPauseTime.style.visibility = "hidden";
};
//showwing help info modal
modalShow.addEventListener("click", () => {
  modal.style.display = "block";
});
//hide help info modal
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

startBtn.addEventListener("click", startCount);
pauseBtn.addEventListener("click", pauseCounter);
stopBtn.addEventListener("click", stopWatchFunction);
historyBtn.addEventListener("click", historyHandler);
resetBtn.addEventListener("click", resetHandler);
modal.addEventListener("click", () => {
  modal.style.display = "none";
});
