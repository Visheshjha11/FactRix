
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
const currentTheme =
    document.documentElement.getAttribute("data-theme");
const newTheme = currentTheme === "dark" ? "light" : "dark";

document.documentElement.setAttribute("data-theme", newTheme);
icon.className = newTheme === "dark" ? "fas fa-sun" : "fas fa-moon";
localStorage.setItem("theme", newTheme);
});

// Toggle mobile menu
document
.querySelector(".mobile-menu")
.addEventListener("click", function () {
    const nav = document.querySelector("nav");
    nav.style.display = nav.style.display === "block" ? "none" : "block";
});

// Toggle results section
document
.getElementById("check-btn")
.addEventListener("click", function () {
    const results = document.getElementById("results");
    results.classList.add("active");

    // Simulate API call and result processing
    const meter = document.querySelector(".meter-fill");

    // Randomize the credibility score for demo purposes
    const score = Math.random();
    meter.style.width = `${score * 100}%`;

    if (score < 0.3) {
    meter.style.background = "var(--secondary)";
    } else if (score < 0.7) {
    meter.style.background =
        "linear-gradient(to right, #FF9800, #FFC107)";
    } else {
    meter.style.background = "#4CAF50";
    }
});

// Add greeting message based on time of day
function updateGreeting() {
const hour = new Date().getHours();
const greeting = document.getElementById("greeting");

if (hour < 12) {
    greeting.textContent = "Good Morning!";
} else if (hour < 18) {
    greeting.textContent = "Good Afternoon!";
} else {
    greeting.textContent = "Good Evening!";
}
}

// Update greeting on page load
updateGreeting();

// Add file upload handling
const fileInput = document.getElementById("fileInput");
const fileName = document.getElementById("fileName");
const textArea = document.querySelector(".input-field");

fileInput.addEventListener("change", function (e) {
const file = e.target.files[0];
if (file) {
    // Display file name
    fileName.textContent = `Selected file: ${file.name}`;
    fileName.classList.add("show");

    // Read file content if it's a text file
    if (file.type === "text/plain") {
    const reader = new FileReader();
    reader.onload = function (e) {
        textArea.value = e.target.result;
    };
    reader.readAsText(file);
    } else {
    // For non-text files, just show the file name
    textArea.value = `File selected: ${file.name}\n\nPlease paste your content here or select a text file.`;
    }
} else {
    fileName.classList.remove("show");
}
});

// Allow drag and drop
const dropZone = document.querySelector(".verification-card");

["dragenter", "dragover", "dragleave", "drop"].forEach((eventName) => {
dropZone.addEventListener(eventName, preventDefaults, false);
});

function preventDefaults(e) {
e.preventDefault();
e.stopPropagation();
}

["dragenter", "dragover"].forEach((eventName) => {
dropZone.addEventListener(eventName, highlight, false);
});

["dragleave", "drop"].forEach((eventName) => {
dropZone.addEventListener(eventName, unhighlight, false);
});

function highlight(e) {
dropZone.classList.add("highlight");
}

function unhighlight(e) {
dropZone.classList.remove("highlight");
}

dropZone.addEventListener("drop", handleDrop, false);

function handleDrop(e) {
const dt = e.dataTransfer;
const file = dt.files[0];

if (file) {
    fileInput.files = dt.files;
    const event = new Event("change");
    fileInput.dispatchEvent(event);
}
}
