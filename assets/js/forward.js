// ! Created a forward button script for the form page.

document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector(".forward-button")
    .addEventListener("click", function () {
      // Change to 'index.html'.
      window.location.href = "blog.html";
    });
});
