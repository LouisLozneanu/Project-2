// JavaScript code for register.html and login.html

document.addEventListener("DOMContentLoaded", function () {
  // Check if the register form exists on the page (for register.html)
  const registerForm = document.getElementById("register_form");
  const loginBtn = document.getElementById("loginBtn");

  // Check if the login form exists on the page (for login.html)
  const loginForm = document.getElementById("login_form");

  // For register.html page functionality
  if (registerForm) {
    registerForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Retrieve form values
      const firstName = registerForm.first.value.trim();
      const lastName = registerForm.last.value.trim();
      const email = registerForm.email.value.trim();

      // Extract birthdate from dropdowns
      const birthMonth = registerForm.birthdate_m.value;
      const birthDay = registerForm.birthdate_d.value;
      const birthYear = registerForm.birthdate_y.value;

      // Validate required fields
      if (!firstName || !lastName || !email || !birthMonth || !birthDay || !birthYear) {
        alert("All fields are required");
        return;
      }

      // Validate email format
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailPattern.test(email)) {
        alert("Please enter a valid email address");
        return;
      }

      // Concatenate birthdate
      const birthdate = `${birthYear}-${birthMonth}-${birthDay}`;
      alert("Sign Up Successful!\nDate of Birth: " + birthdate);

      // Redirect to login page
      window.location.href = "/Project-2/login.html";
    });
  }

  // For login.html page functionality
  if (loginForm) {
    loginForm.addEventListener("submit", async (e) => {
      e.preventDefault(); // Prevent the default form submission

      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();

      // Simple validation
      if (!email || !password) {
        alert("Please enter both email and password.");
        return;
      }

      // Validate email format
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailPattern.test(email)) {
        alert("Please enter a valid email address");
        return;
      }

      // Simulate a successful login (replace with actual login logic as needed)
      alert("Login Successful!");
    });
  }
});
