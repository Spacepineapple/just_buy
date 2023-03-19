export default function ThemeToggle() {
  // Get the HTML body element
  const body = document.querySelector("body");

  // Check if the user has a preferred color scheme set
  const userPrefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  // Set the default theme based on the user's preference or the light theme
  if (userPrefersDark) {
    body.setAttribute("data-theme", "light");
  } else {
    body.setAttribute("data-theme", "dark");
  }

  // Toggle between light and dark mode when the user clicks a button
  const toggleTheme = () => {
    const currentTheme = body.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";
    body.setAttribute("data-theme", newTheme);
  };

  // Attach a click event listener to the toggle button
  const toggleButton = document.getElementById("toggle-theme");
  toggleButton.addEventListener("click", toggleTheme);
}
