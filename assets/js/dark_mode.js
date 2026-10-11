document.addEventListener('DOMContentLoaded', function() {
    const mode_toggle = document.getElementById("light-toggle");

    if (!mode_toggle) return;

    mode_toggle.addEventListener("click", function() {
        toggleTheme(localStorage.getItem("portfolio-theme"));
        const isDark = document.documentElement.getAttribute("data-theme") === "dark";
        mode_toggle.setAttribute("aria-label", isDark ? "Switch to light theme" : "Switch to dark theme");
        mode_toggle.setAttribute("aria-pressed", isDark.toString());
    });

    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
    mode_toggle.setAttribute("aria-label", isDark ? "Switch to light theme" : "Switch to dark theme");
    mode_toggle.setAttribute("aria-pressed", isDark.toString());
});

