let timer; 
let timeLeft = 0;
let isRunning = false;
let currentRound = 0;
let totalRounds = 4;
let session = "work";

let workTime = 25 * 60;
let shortBreakTime = 5 * 60;
let longBreakTime = 15 * 60;

const timerDisplay = document.getElementById("timer");
const sessionType = document.getElementById("sessionType");
const cycleIndicator = document.getElementById("cycle-indicator");

const workInput = document.getElementById("workInput");
const shortBreakInput = document.getElementById("shortBreakInput");
const longBreakInput = document.getElementById("longBreakInput");
const roundsInput = document.getElementById("roundsInput");

document.getElementById("startBtn").addEventListener("click", startTimer);
document.getElementById("pauseBtn").addEventListener("click", pauseTimer);
document.getElementById("resetBtn").addEventListener("click", resetTimer);

function startTimer() {
  if (isRunning) return;

  isRunning = true;

  updateTimesFromInputs();

  if (timeLeft <= 0) {
    setSession(session);
  }

  timer = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      updateDisplay();
    } else {
      clearInterval(timer);
      isRunning = false;

      if (session === "work") {
        currentRound++;
        if (currentRound % totalRounds === 0) {
          setSession("long");
        } else {
          setSession("short");
        }
      } else {
        setSession("work");
      }
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(timer);
  isRunning = false;
}

function resetTimer() {
  clearInterval(timer);
  isRunning = false;
  currentRound = 0;
  setSession("work");
  updateCycleIndicator();
}

function setSession(type) {
  session = type;

  if (type === "work") {
    timeLeft = workTime;
    sessionType.textContent = "Session: Work";
  } else if (type === "short") {
    timeLeft = shortBreakTime;
    sessionType.textContent = "Session: Short Break";
  } else {
    timeLeft = longBreakTime;
    sessionType.textContent = "Session: Long Break";
  }

  updateDisplay();
  updateCycleIndicator();
  startTimer(); 
}

function updateDisplay() {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  if (seconds < 10) seconds = "0" + seconds;
  timerDisplay.textContent = `${minutes}:${seconds}`;
}

function updateTimesFromInputs() {
  workTime = parseInt(workInput.value) * 60;
  shortBreakTime = parseInt(shortBreakInput.value) * 60;
  longBreakTime = parseInt(longBreakInput.value) * 60;
  totalRounds = parseInt(roundsInput.value);
}

function updateCycleIndicator() {
  let dots = "";
  for (let i = 0; i < totalRounds; i++) {
    dots += i < currentRound ? "🔴 " : "⚪ ";
  }
  cycleIndicator.textContent = dots.trim();
}
