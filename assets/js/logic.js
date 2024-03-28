// * Created a JS script to handle the button states.
// * Additionally, added the ability to switch the icons when pressed.
document.addEventListener("DOMContentLoaded", function () {
  const modeToggle = document.querySelector(".mode-toggle");
  const body = document.querySelector("body");
  const sunIcon = document.querySelector(".sun-icon");

  modeToggle.addEventListener("click", function () {
    // * Toggle dark mode class on body.
    body.classList.toggle("dark-mode");
    if (body.classList.contains("dark-mode")) {
      // * Change sun icon to moon icon in dark mode.
      sunIcon.textContent = "🌙";
    } else {
      // * Change moon icon back to sun icon in light mode.
      sunIcon.textContent = "🌞";
    }
  });
});
