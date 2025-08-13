document.addEventListener("DOMContentLoaded", () => {
  // Fade-in on scroll
  const handleFadeIn = () => {
    document.querySelectorAll('.fade-in').forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 60) el.style.animationPlayState = 'running';
    });
  };
  handleFadeIn();
  window.addEventListener('scroll', handleFadeIn);

  // Learn More toggle
  const learnMoreBtn = document.getElementById("learnMoreBtn");
  if (learnMoreBtn) {
    learnMoreBtn.addEventListener("click", () => {
      const extra = document.getElementById("extraInfo");
      if (extra) extra.classList.toggle("hidden");
    });
  }

  // Live clock
  const timeEl = document.getElementById("time");
  if (timeEl) {
    const updateTime = () => timeEl.textContent = new Date().toLocaleTimeString();
    updateTime();
    setInterval(updateTime, 1000);
  }

  // Welcome message
  const welcomeEl = document.getElementById("welcomeMessage");
  if (welcomeEl) {
    let user = localStorage.getItem("username");
    if (!user) {
      user = prompt("What's your name? (optional)");
      if (user) localStorage.setItem("username", user);
    }
    if (user) welcomeEl.innerHTML = `Welcome back, ${user}!`;
  }
});
