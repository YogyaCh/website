document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll('a[href^="#"]');
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;

  // Apply saved theme
  if (localStorage.getItem("theme") === "light") {
    body.classList.add("light-theme");
  }

  // Toggle theme
  themeToggle.addEventListener("click", () => {
    body.classList.toggle("light-theme");
    localStorage.setItem("theme", body.classList.contains("light-theme") ? "light" : "dark");
  });

  // Smooth scroll
  links.forEach(link => {
    link.addEventListener("click", e => {
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});
