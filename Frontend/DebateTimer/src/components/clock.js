
function startClock() {
  const timeElement = document.querySelector(".clock .time");

  if (!timeElement) return;

  function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    timeElement.textContent = `${hours}:${minutes}`;
  }

  updateClock(); 
  setInterval(updateClock, 1000); 
}

document.addEventListener("DOMContentLoaded", startClock);
