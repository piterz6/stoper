//getting all needed elements
const modalShow = document.querySelector(".question");
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
//get change color button
const brush = document.querySelector(".brush");
//helper variable
let counter;
let minutes = 0;
let seconds = 0;
//array to showing history
let timesArr = [];
//start count function
const startCount = () => {
  //hiding history after re-run counter prettier function
  timeList.style.display = "none";
  //couting function- set interval to helper variable
  counter = setInterval(() => {
    seconds++;
    if (seconds <= 9) {
      //changing single numbers - simple conditions
      stopwatch.textContent = `${minutes}:0${seconds}`;
    } else if (seconds > 9 && seconds < 59) {
      stopwatch.textContent = `${minutes}:${seconds}`;
    } else {
      minutes++;
      seconds = 0;
      stopwatch.textContent = `${minutes}:${seconds}`;
    }
    //set interval as first argument takes a function , second - time when it is to be executed
  }, 100);
};
//pause function - clear interval -> reason why putted setInterval into variable
const pauseCounter = () => {
  clearInterval(counter);
};
//stop function - clear counter and save last result in time pharagraph.
const stopWatchFunction = () => {
  clearInterval(counter);
  if (stopwatch.textContent !== "0:00") {
    //showing pharagraph with subsequent measurement;
    showPauseTime.style.visibility = "visible";
    //arrange array to store results of subsequent measurements;
    timesArr.push(`Zapis nr ${timesArr.length + 1}: ${stopwatch.textContent}`);
  }
  //putting values to pharagraph with subsequent measurement;
  showPauseTime.textContent = `Ostatni czas: ${stopwatch.textContent}`;
  //reseting counter
  minutes = 0;
  seconds = 0;
  stopwatch.textContent = "0:00";
};
const historyHandler = () => {
  //showing a list of last results;
  timeList.style.display = "block";
  //line to avoid infinite functionality of ARCHIVE button - after printing array of result set defaul UL to empty
  timeList.textContent = "";
  //forEach loop to create LI elements in UL according to timesArr length
  timesArr.forEach((time) => {
    const newLi = document.createElement("li");
    newLi.textContent = time;
    timeList.appendChild(newLi);
  });
};
//reset timer functio - setting all values to 0 or empty and hidding unneded elements.
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
//showing help info modal
modalShow.addEventListener("click", () => {
  modal.style.display = "block";
  modal.classList.add("modal-animation");
});
//hide help info modal
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
  modal.classList.reomve("modal-animation");
});
//all events listeners - all functional buttons
startBtn.addEventListener("click", startCount);
pauseBtn.addEventListener("click", pauseCounter);
stopBtn.addEventListener("click", stopWatchFunction);
historyBtn.addEventListener("click", historyHandler);
resetBtn.addEventListener("click", resetHandler);
modal.addEventListener("click", () => {
  modal.style.display = "none";
});
