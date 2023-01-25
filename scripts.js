let tens = 00;
let seconds = 00;
let appendTens = document.querySelector('#appendTens');
let appendSeconds = document.querySelector('#appendSeconds');
let startBtn = document.querySelector('#startBtn');
let stopBtn = document.querySelector('#stopBtn');
let restartBtn = document.querySelector('#restartBtn');
let interval;

function startTimer() {
    tens++;
    if(tens < 9){
      appendTens.innerText = `0${tens}`
    }
    if(tens > 9){
      appendTens.innerText = tens;
    }
    if(tens > 99){
      tens = 00;
      seconds++;
      appendSeconds.innerText = `0${seconds}`;
      appendTens.innerText  = `0${tens}`
    }
    if(seconds > 9){
      appendSeconds.innerText = seconds;
    }
};

startBtn.addEventListener('click', () => {
  interval = setInterval(startTimer)
})

stopBtn.addEventListener('click',() => {
  clearInterval(interval)
})

restartBtn.addEventListener('click',() => {
  clearInterval(interval);
  tens = `00`;
  seconds = `00`;
  appendSeconds.innerText = seconds;
  appendTens.innerText = tens;
})
