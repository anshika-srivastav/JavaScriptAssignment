// Task 2: setInterval, clearInterval - countdown and a repeating task
let seconds = 5;
const countdown = setInterval(() => {
  console.log("Countdown:", seconds);
  seconds--;
  if (seconds === 0) {
    clearInterval(countdown);
    console.log("Time is up!");
    startTicker();
  }
}, 200);

function startTicker() {
  let ticks = 0;
  const id = setInterval(() => {
    ticks++;
    console.log("Tick number", ticks);
    if (ticks === 3) {
      clearInterval(id);
      console.log("Ticker stopped after 3 ticks");
    }
  }, 100);
}