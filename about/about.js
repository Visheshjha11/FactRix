// Create stars
function createStars() {
  const starsContainer = document.getElementById("stars");
  const starCount = 200; // Number of stars

  for (let i = 0; i < starCount; i++) {
    const star = document.createElement("div");
    star.className = "star";

    // Random position
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;

    // Random size between 1px and 3px
    const size = Math.random() * 2 + 1;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;

    // Random animation duration between 2s and 5s
    star.style.setProperty("--duration", `${Math.random() * 3 + 2}s`);

    // Random opacity between 0.3 and 1
    star.style.setProperty("--opacity", Math.random() * 0.7 + 0.3);

    // Random delay
    star.style.animationDelay = `${Math.random() * 5}s`;

    starsContainer.appendChild(star);
  }
}

// Call createStars when the page loads
createStars();

// Theme toggle functionality
const themeToggle = document.getElementById("theme-toggle");
const icon = themeToggle.querySelector("i");

// Set dark theme as default if no theme is saved
const savedTheme = localStorage.getItem("theme") || "dark";
document.documentElement.setAttribute("data-theme", savedTheme);
icon.className = savedTheme === "dark" ? "fas fa-sun" : "fas fa-moon";

themeToggle.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  document.documentElement.setAttribute("data-theme", newTheme);
  icon.className = newTheme === "dark" ? "fas fa-sun" : "fas fa-moon";
  localStorage.setItem("theme", newTheme);
});

// Mobile menu toggle
document.querySelector(".mobile-menu").addEventListener("click", function () {
  const nav = document.querySelector("nav");
  nav.style.display = nav.style.display === "block" ? "none" : "block";
});
