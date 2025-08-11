// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
  const learnMoreBtn = document.getElementById("learnMoreBtn");
  if (learnMoreBtn) {
    learnMoreBtn.addEventListener("click", () => {
      alert("Thank you for your interest! More info coming soon.");
    });
  }
});
