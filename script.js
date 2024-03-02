let timer;
let isTimerRunning = false;
let minutes = 25;
let seconds = 0;

const timerDisplay = document.getElementById('timer-display');
const startButton = document.getElementById('start-button');
const resetButton = document.getElementById('reset-button');

function updateDisplay() {
    timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function startTimer() {
    if (!isTimerRunning) {
        timer = setInterval(function() {
            if (minutes === 0 && seconds === 0) {
                clearInterval(timer);
                isTimerRunning = false;
            } else if (seconds === 0) {
                minutes--;
                seconds = 59;
            } else {
                seconds--;
            }
            updateDisplay();
        }, 1000);
        isTimerRunning = true;
    }
}

function resetTimer() {
    clearInterval(timer);
    isTimerRunning = false;
    minutes = 25;
    seconds = 0;
    updateDisplay();
}

startButton.addEventListener('click', startTimer);
resetButton.addEventListener('click', resetTimer);
