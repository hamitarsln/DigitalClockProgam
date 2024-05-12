// Stopwatch Program

// A simple stopwatch program that allows users to start, stop, and reset the stopwatch. Designed with HTML, CSS, and JavaScript.

const display = document.getElementById('stopwatch-display');
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function startStopwatch() {
    if (!isRunning) {
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
        isRunning = true;
    }
}

function stopStopwatch() {
    if (isRunning) {
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
}

function resetStopwatch() {
    clearInterval(timer);
    elapsedTime = 0;
    isRunning = false;
    display.textContent = '00:00.00';
}

function update() {
    const elapsed = Date.now() - startTime;
    const minutes = Math.floor(elapsed / 60000);
    const seconds = Math.floor((elapsed % 60000) / 1000);
    const milliseconds = Math.floor((elapsed % 1000) / 10);
    display.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(2, '0')}`;
}