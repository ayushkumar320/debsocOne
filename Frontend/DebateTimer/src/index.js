document.addEventListener("DOMContentLoaded", () => {
  const clockElement = document.querySelector(".clock");
  const startBtn = document.querySelector(".start");
  const stopBtn = document.querySelector(".stop");

  let timer;
  let seconds = 0;

  function updateClock() {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    clockElement.textContent = `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  }

  function startTimer() {
    if (timer) return; // prevent multiple intervals
    timer = setInterval(() => {
      seconds++;
      updateClock();
    }, 1000);
  }

  function stopTimer() {
    clearInterval(timer);
    timer = null;
  }

  
  startBtn.addEventListener("click", startTimer);
  stopBtn.addEventListener("click", stopTimer);

  // Optional: initialize display
  updateClock();
});