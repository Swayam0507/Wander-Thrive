document.addEventListener("DOMContentLoaded", () => {
  const wrapper = document.querySelector(".wrapper");
  const registerLink = document.querySelector(".register-link");
  const loginLink = document.querySelector(".login-link");
  const loginForm = document.getElementById("loginForm");

  // Toggle animation
  registerLink.addEventListener("click", (e) => {
    e.preventDefault();
    wrapper.classList.add("active");
  });

  loginLink.addEventListener("click", (e) => {
    e.preventDefault();
    wrapper.classList.remove("active");
  });

  // Login logic
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const usernameInput = loginForm.querySelector("input[type='text']").value;

    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("username", usernameInput);

    window.location.href = "homepage.html";
  });
});
