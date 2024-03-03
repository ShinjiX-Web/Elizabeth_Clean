// Put your application javascript here
<script>
    document.addEventListener("DOMContentLoaded", function() {
    var currentUrl = window.location.pathname;

    // Get all navigation links
    var links = document.querySelectorAll(".nav-link");

    links.forEach(function(link) {
      // Remove leading slash from link URL
      var linkUrl = link.getAttribute("href").replace(/^\/|\/$/g, '');

    // Check if current URL matches the link URL
    if (currentUrl === linkUrl) {
        link.classList.add("active-link");
      }
    });
  });
</script>

