// * Create a js script to handle the local storage usage of the forms -> blog functionality.
// * This grabs the info from local storage and applies to blog.
document.addEventListener("DOMContentLoaded", function () {
  // * Retrieve saved blog posts from local storage.
  const blogPosts = JSON.parse(localStorage.getItem("blogPosts")) || [];

  // * Get the container element for displaying blog posts.
  const blogList = document.getElementById("blog-list");

  // * Iterate through each blog post and display them as a list.
  blogPosts.forEach(function (post) {
    // * Create a new <article> element to represent a blog post.
    const postElement = document.createElement("article");
    postElement.classList.add("blog-post");

    // ! All of the following sections below follow this basic setup. (Create-Set-Add)
    // * Create an <h3> element to display the username.
    // * Set the <h3> element to the username.
    // * Add to class for style.
    const usernameElement = document.createElement("h3");
    usernameElement.textContent = "Posted by: " + post.username;
    usernameElement.classList.add("blog-username");

    const titleElement = document.createElement("h2");
    titleElement.textContent = post.title;
    titleElement.classList.add("blog-title");

    const contentContainer = document.createElement("div");
    contentContainer.classList.add("blog-content-container");

    const contentElement = document.createElement("p");
    contentElement.textContent = post.content;
    contentElement.classList.add("blog-content");

    contentContainer.appendChild(contentElement);

    // * Add the title, username, and content container to the blog post <article> element.
    postElement.appendChild(titleElement);
    postElement.appendChild(usernameElement);
    postElement.appendChild(contentContainer);

    // * Add to list container.
    blogList.appendChild(postElement);
  });
});
