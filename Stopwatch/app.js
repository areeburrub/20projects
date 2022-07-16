const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')

const start = document.getElementById('start')
const stop = document.getElementById('stop')
const reset= document.getElementById('reset')

var time = 0;
var timer;
var isRunning = false;

const startTimer = () => {
    if(!isRunning) {
        isRunning = true;
      timer = setInterval(() => {
          time++;
          updateTime();
      }, 1000);
    }
}

const updateTime = () => {
    const sec = time % 60;
    const min = Math.floor(time / 60);
    const hr = Math.floor(min / 60);

    seconds.innerHTML = sec;
    minutes.innerHTML = min;
    hours.innerHTML = hr;
}

const stopTimer = () => {
    isRunning = false;
    clearInterval(timer);
}

const resetTimer = () => {
    clearInterval(timer);
    time = 0;
    isRunning = false;
    updateTime();
}

start.addEventListener("click", startTimer);
stop.addEventListener("click", stopTimer);
reset.addEventListener("click", resetTimer);
