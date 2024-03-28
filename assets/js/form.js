// * Created a js script to handle the local storage usage of the forms -> blog functionality.
// * This sends the info to blog
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("blog-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // * Get form values.
    const username = document.getElementById("username").value;
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;

    // * Create a blog post object.
    const blogPost = {
      username: username,
      title: title,
      content: content,
    };

    // * Retrieve existing blog posts from local storage or create an empty array.
    let blogPosts = JSON.parse(localStorage.getItem("blogPosts")) || [];

    // Add the new blog post to the array.
    blogPosts.push(blogPost);

    // * Save the updated array back to local storage.
    localStorage.setItem("blogPosts", JSON.stringify(blogPosts));

    // * Redirect to the blog.html page.
    window.location.href = "blog.html";
  });
});
