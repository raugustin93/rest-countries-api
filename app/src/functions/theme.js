export function checkTheme() {
  var theme = localStorage.getItem("theme");
  if (!theme) {
    localStorage.setItem("theme", "light");
    document.getElementById("theme").setAttribute("href", "light-theme.css");
  } else {
    if (theme == "light" || theme == "dark") {
      document
        .getElementById("theme")
        .setAttribute("href", `${theme}-theme.css`);
    } else {
      document.getElementById("theme").setAttribute("href", "light-theme.css");
    }
  }
}

export function setTheme(themeName) {
  localStorage.setItem("theme", themeName);
  document
    .getElementById("theme")
    .setAttribute("href", `${themeName}-theme.css`);
}

export function toggleTheme() {
  localStorage.getItem("theme") == "dark"
    ? setTheme("light")
    : setTheme("dark");
}
