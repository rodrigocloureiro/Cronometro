// Timer display
const minutesEl = document.querySelector('#minutes');
const secondsEl = document.querySelector('#seconds');
const millisecondsEl = document.querySelector('#milliseconds');

// Buttons
const startBtn = document.querySelector('#start');
const pauseBtn = document.querySelector('#pause');
const resumeBtn = document.querySelector('#resume');
const resetBtn = document.querySelector('#reset');

// Variables
let interval;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let isPaused = false;

// Events
startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resumeBtn.addEventListener('click', resumeTimer);
resetBtn.addEventListener('click', resetTimer);

// Functions
function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

function formatMilliseconds(time) {
    return time < 100 ? String(time).padStart(3, '0') : time;
}

function startTimer() {
    interval = setInterval(() => {
        if(!isPaused) {
            milliseconds += 10;
            if(milliseconds === 1000) {
                seconds++;
                milliseconds = 0;
            }
            if(seconds === 60) {
                minutes++;
                seconds = 0;
            }
            minutesEl.textContent = formatTime(minutes);
            secondsEl.textContent = formatTime(seconds);
            millisecondsEl.textContent = formatMilliseconds(milliseconds);
        }
    }, 10);
    startBtn.className = 'btn hide';
    pauseBtn.className = 'btn show';
}

function pauseTimer() {
    isPaused = true;
    pauseBtn.className = ('btn hide');
    resumeBtn.className = ('btn show');
}

function resumeTimer() {
    isPaused = false;
    pauseBtn.className = ('btn show');
    resumeBtn.className = ('btn hide');
}

function resetTimer() {
    clearInterval(interval);
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    minutesEl.textContent = '00';
    secondsEl.textContent = '00';
    millisecondsEl.textContent = '000';
    startBtn.className = 'btn show';
    pauseBtn.className = 'btn';
    resumeBtn.className = 'btn';
    isPaused = false;
}
