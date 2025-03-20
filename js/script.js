const themeToggleBtn = document.getElementById("theme-toggle");
const colorPicker = document.getElementById("color-picker");

function applyTheme(color) {
  document.documentElement.style.setProperty('--primary-color', color);
  localStorage.setItem("themeColor", color);
}

function toggleTheme() {
  document.body.classList.toggle("dark-mode");
  const isDarkMode = document.body.classList.contains("dark-mode");
  localStorage.setItem("darkMode", isDarkMode);
}

function loadPreferences() {
  const savedColor = localStorage.getItem("themeColor");
  const isDarkMode = JSON.parse(localStorage.getItem("darkMode"));
  
  if (savedColor) applyTheme(savedColor);
  if (isDarkMode) document.body.classList.add("dark-mode");
}

themeToggleBtn.addEventListener("click", toggleTheme);
colorPicker.addEventListener("input", (e) => applyTheme(e.target.value));

loadPreferences();
