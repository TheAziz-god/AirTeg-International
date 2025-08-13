document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const feedback = document.getElementById("formFeedback");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const subject = document.getElementById("subject").value.trim();
      const message = document.getElementById("message").value.trim();

      // Basic validation
      if (name === "" || email === "" || subject === "" || message === "") {
        feedback.textContent = "❗ Please fill in all fields.";
        feedback.style.color = "red";
        return;
      }

      // Email format check
      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (!email.match(emailPattern)) {
        feedback.textContent = "❗ Please enter a valid email address.";
        feedback.style.color = "red";
        return;
      }

      // If everything is okay
      feedback.textContent = "✅ Message sent successfully!";
      feedback.style.color = "green";

      form.reset();
    });
  }
});
// Animation and button interaction
document.addEventListener("DOMContentLoaded", () => {
  const learnMoreBtn = document.getElementById("learnMoreBtn");
  const extraInfo = document.getElementById("extraInfo");
  const timeDisplay = document.getElementById("time");

  // Show/hide extra info on button click
  if (learnMoreBtn && extraInfo) {
    learnMoreBtn.addEventListener("click", () => {
      extraInfo.classList.toggle("hidden");
    });
  }

  // Live clock
  if (timeDisplay) {
    setInterval(() => {
      const now = new Date();
      timeDisplay.textContent = now.toLocaleTimeString();
    }, 1000);
  }
});
