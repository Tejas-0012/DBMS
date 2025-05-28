document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.getElementById("loginBtn");
  const signupBtn = document.getElementById("signupBtn");
  const logoutBtn = document.getElementById("logoutBtn");

  // Step 1: Check login status, defaulting to "false" if not set
  const isLoggedIn = localStorage.getItem("loggedIn") || "false"; // If no value, set to false

  if (isLoggedIn === "true") {
      loginBtn.style.display = "none"; // Hide Login
      signupBtn.style.display = "none"; // Hide Signup
      logoutBtn.style.display = "inline"; // Show Logout
  } else {
      loginBtn.style.display = "inline"; // Show Login
      signupBtn.style.display = "inline"; // Show Signup
      logoutBtn.style.display = "none"; // Hide Logout
  }

  // Step 2: Login function (Should be called from login page)
  window.loginUser = function () {
      localStorage.setItem("loggedIn", "true"); // Store login state
      window.location.href = "../demo/demo.html"; // Redirect to main page
  };

  // Step 3: Logout function
  logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("loggedIn"); // Remove login status
      location.reload(); // Reload page to reset UI
  });
});

window.addEventListener("scroll", () => {
    document.querySelectorAll(".fade-section").forEach((section) => {
        const position = section.getBoundingClientRect().top;
        if (position < window.innerHeight) {
            section.classList.add("visible");
        }
    });
});

