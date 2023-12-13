const themeToggle = document.getElementById("themeToggle");

// set dark/light mode on window load
window.onload = () => {
  const theme = localStorage.getItem("theme");

  if (theme) {
    document.body.setAttribute("theme", theme);

    if (theme === "dark") themeToggle.setAttribute("aria-pressed", true);
  }
};

// set dark/light mode on toggle
themeToggle.addEventListener("click", (e) => {
  const isDarkMode = themeToggle.getAttribute("aria-pressed");
  themeToggle.setAttribute(
    "aria-pressed",
    `${isDarkMode === "false" ? "true" : "false"}`
  );

  let theme;

  if (isDarkMode === "false") {
    theme = "dark";
  } else {
    theme = "light";
  }

  localStorage.setItem("theme", theme);
  document.body.setAttribute("theme", theme);
});
