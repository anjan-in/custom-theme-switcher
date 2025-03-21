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

  themeToggleBtn.textContent = isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode";
}

function loadPreferences() {
  const savedColor = localStorage.getItem("themeColor");
  const isDarkMode = JSON.parse(localStorage.getItem("darkMode"));
  
  if (savedColor) {
    applyTheme(savedColor);
    colorPicker.value = savedColor;
  }
  
  if (isDarkMode) {
    document.body.classList.add("dark-mode");
    themeToggleBtn.textContent = "Switch to Light Mode";
  } else {
    themeToggleBtn.textContent = "Switch to Dark Mode";
  }
}

themeToggleBtn.addEventListener("click", toggleTheme);
colorPicker.addEventListener("input", (e) => applyTheme(e.target.value));

loadPreferences();
