// TODO: Create a JS script to handle the button states.
// TODO: Additionally, add the ability to switch the icons when pressed.
document.addEventListener("DOMContentLoaded", function () {
  const modeToggle = document.querySelector(".mode-toggle");
  const body = document.querySelector("body");
  const sunIcon = document.querySelector(".sun-icon");

  modeToggle.addEventListener("click", function () {
    body.classList.toggle("dark-mode"); // Toggle dark mode class on body
    if (body.classList.contains("dark-mode")) {
      sunIcon.textContent = "🌙"; // Change sun icon to moon icon in dark mode
    } else {
      sunIcon.textContent = "🌞"; // Change moon icon back to sun icon in light mode
    }
  });
});
