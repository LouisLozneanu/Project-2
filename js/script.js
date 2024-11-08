// JavaScript code can be added here if any dynamic functionality is required


document.addEventListener("DOMContentLoaded", function () {
    const registerForm = document.getElementById("register_form");
    const loginBtn = document.getElementById("loginBtn");

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
        const emailPattern = /\S+@\S+\.\S+/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address");
            return;
        }

        // Concatenate birthdate
        const birthdate = `${birthYear}-${birthMonth}-${birthDay}`;
        alert("Sign Up Successful!\nDate of Birth: " + birthdate);

        // Redirect to login page
        window.location.href = "/login.html";
    });

    loginBtn.addEventListener("click", function () {
        // Redirect to login page
        window.location.href = "/login.html";
    });
});
