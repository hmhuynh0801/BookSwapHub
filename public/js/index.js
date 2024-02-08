
const loginButton = document.querySelector("#login-btn");
const registrationForm = document.querySelector("#reg-form");
const loginForm = document.querySelector("#login-form");
const signUpButton = document.querySelector("#signup-btn");
const notification = document.querySelector("#notification");
loginForm.style.display = "none";

// console.log(registrationForm[0]);
const firstName = registrationForm[0];
const lastName = registrationForm[1];
const email = registrationForm[2];
const password = registrationForm[3];
const confirmPassword = registrationForm[4];



function hideRegisterationForm() {
    if (loginButton.innerText = "Sign In") {
        registrationForm.style.display = 'None';
        loginForm.style.display = 'block';
        loginButton.innerText = "Sign Up";
    }
    if (loginButton.innerText === "Sign Up") {
        loginButton.addEventListener("click", function () {
        registrationForm.style.display = "block";
        loginForm.style.display = 'none';
        loginButton.innerText = "Sign In";
        })
    }
}



console.log(notifcation.innerText);

function passwordMatch(event) {
    if (password.value != confirmPassword.value) {
        event.preventDefault();
        const labelSpan = document.createElement("span");
        labelSpan.innerText = "Password did not match";
        labelSpan.style.fontSize = "20px";
        labelSpan.style.color = "red";
        notification.appendChild(labelSpan);
        
        
    }
}


signUpButton.addEventListener("click", passwordMatch);

loginButton.addEventListener("click", hideRegisterationForm);

