// Fade-in on scroll
const faders = document.querySelectorAll(".fade");

window.addEventListener("scroll", () => {
  faders.forEach(el => {
    const rect = el.getBoundingClientRect();
    if(rect.top < window.innerHeight - 100){
      el.classList.add("show");
    }
  });
});

// Countdown (change date)
const countdown = document.getElementById("countdown");
const targetDate = new Date("August 30, 2026 09:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const diff = targetDate - now;

  const days = Math.floor(diff / (1000*60*60*24));
  const hours = Math.floor((diff % (1000*60*60*24)) / (1000*60*60));
  const minutes = Math.floor((diff % (1000*60*60)) / (1000*60));

  countdown.innerHTML = `${days}d ${hours}h ${minutes}m`;
}, 1000);