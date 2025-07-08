document.addEventListener("DOMContentLoaded", () => {
  const clockElement = document.querySelector(".clock");
  const startBtn = document.querySelector(".start");
  const stopBtn = document.querySelector(".stop");
  const resetBtn = document.querySelector(".reset");
  const debateType = document.getElementById("debate-type");

  let timer;
  let seconds = 0;

  function updateClock() {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    clockElement.textContent = `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

    if (seconds <= 420) {
      clockElement.style.color = "#00ff00"; // Green
    } else if (seconds > 435) {
      clockElement.style.color = "#ff4c4c"; // Red
    } else {
      clockElement.style.color = "#FFD700"; // Yellow
    }
  }

  function startTimer() {
    if (timer) return;
    timer = setInterval(() => {
      seconds++;
      updateClock();
    }, 1000);
  }

  function stopTimer() {
    clearInterval(timer);
    timer = null;
  }

  function resetTimer() {
    clearInterval(timer);
    timer = null;
    seconds = 0;
    updateClock();
  }

  startBtn.addEventListener("click", startTimer);
  stopBtn.addEventListener("click", stopTimer);
  resetBtn.addEventListener("click", resetTimer);

  updateClock();

  debateType.addEventListener("change", () => {
    let output = document.getElementById("parliament-output");
    if (!output) {
      output = document.createElement("div");
      output.id = "parliament-output";
      debateType.parentElement.appendChild(output);
    }
    output.textContent = `Your Parliament is: ${debateType.value}`;
  });
});
