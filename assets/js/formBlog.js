// TODO: Create a js script to handle the local storage usage of the forms -> blog functionality.

document.addEventListener("DOMContentLoaded", function () {
  // Retrieve saved blog posts from local storage
  const blogPosts = JSON.parse(localStorage.getItem("blogPosts")) || [];

  // Get the container element for displaying blog posts
  const blogList = document.getElementById("blog-list");

  // Iterate through each blog post and display them as a list
  blogPosts.forEach(function (post) {
    const postElement = document.createElement("div");
    postElement.classList.add("blog-post");

    const usernameElement = document.createElement("h3");
    usernameElement.textContent = post.username;

    const titleElement = document.createElement("h2");
    titleElement.textContent = post.title;

    const contentElement = document.createElement("p");
    contentElement.textContent = post.content;

    postElement.appendChild(usernameElement);
    postElement.appendChild(titleElement);
    postElement.appendChild(contentElement);

    blogList.appendChild(postElement);
  });
});
