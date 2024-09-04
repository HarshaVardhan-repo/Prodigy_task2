let startTime, updatedTime, difference;
let interval;
let running = false;

const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const resetButton = document.getElementById('resetButton');

startButton.addEventListener('click', function() {
    if (!running) {
        running = true;
        startTime = new Date().getTime();
        interval = setInterval(updateTime, 10);
        startButton.disabled = true;
        stopButton.disabled = false;
    }
});

stopButton.addEventListener('click', function() {
    if (running) {
        running = false;
        clearInterval(interval);
        startButton.disabled = false;
        stopButton.disabled = true;
    }
});

resetButton.addEventListener('click', function() {
    clearInterval(interval);
    running = false;
    startTime = 0;
    updatedTime = 0;
    difference = 0;
    document.getElementById('minutes').textContent = '00';
    document.getElementById('seconds').textContent = '00';
    document.getElementById('milliseconds').textContent = '00';
    startButton.disabled = false;
    stopButton.disabled = true;
});

function updateTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;

    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    const milliseconds = Math.floor((difference % 1000) / 10);

    document.getElementById('minutes').textContent = (minutes < 10) ? '0' + minutes : minutes;
    document.getElementById('seconds').textContent = (seconds < 10) ? '0' + seconds : seconds;
    document.getElementById('milliseconds').textContent = (milliseconds < 10) ? '0' + milliseconds : milliseconds;
}
