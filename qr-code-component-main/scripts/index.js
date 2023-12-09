const themeToggle = document.getElementById("themeToggle");

// set dark/light mode on window load
window.onload = () => {
  const theme = localStorage.getItem("theme");

  if (theme) {
    document.body.setAttribute("theme", theme);

    if (theme === "dark") themeToggle.querySelector("input").checked = true;
  }
};

// set dark/light mode on toggle
themeToggle.addEventListener("click", (e) => {
  let theme;

  if (e.target.checked) {
    theme = "dark";
  } else {
    theme = "light";
  }

  localStorage.setItem("theme", theme);
  document.body.setAttribute("theme", theme);
});
