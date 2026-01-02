/* =========================
   MiniVerse Common JS
   ========================= */

/* Theme Toggle (Index & Feed) */
document.addEventListener("DOMContentLoaded", () => {
  const themeBtn = document.querySelector(".toggle-theme");

  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark");
      document.body.classList.toggle("dark-mode");
    });
  }
});

/* Sidebar Toggle (Feed Page) */
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  if (sidebar) {
    sidebar.classList.toggle("show");
  }
}

/* Dark Mode Icon Toggle (Feed Page) */
function toggleTheme() {
  document.body.classList.toggle("dark-mode");

  const icon = document.getElementById("themeIcon");
  if (icon) {
    icon.classList.toggle("fa-sun");
    icon.classList.toggle("fa-moon");
  }
}

/* Password Visibility Toggle (Login & Signup) */
function togglePassword(fieldId, icon) {
  const field = document.getElementById(fieldId);
  if (!field) return;

  if (field.type === "password") {
    field.type = "text";
    icon.classList.replace("fa-eye", "fa-eye-slash");
  } else {
    field.type = "password";
    icon.classList.replace("fa-eye-slash", "fa-eye");
  }
}
