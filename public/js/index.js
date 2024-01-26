
const loginButton = document.querySelector("#login-btn");
const registrationForm = document.querySelector("#reg-form");
const loginForm = document.querySelector("#login-form");
loginForm.style.display = "none";

function hideRegisterationForm() {
    if (loginButton.innerText = "Sign In") {
        registrationForm.style.display = 'None';
        loginForm.style.display = 'block';
        loginButton.innerText = "Sign up";
        console.log(loginButton.innerText);
    }
    if (loginButton.innerText === "Sign up") {
        loginButton.addEventListener("click", function () {
        registrationForm.style.display = "block";
        loginForm.style.display = 'none';
        loginButton.innerText = "Sign In";
        })
    }
}

loginButton.addEventListener("click", hideRegisterationForm);
