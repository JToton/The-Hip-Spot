// TODO: Create a back button script for the blog page.

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".back-button").addEventListener("click", function () {
    // Change to 'index.html'.
    window.location.href = "index.html";
  });
});
