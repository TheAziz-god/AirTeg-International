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