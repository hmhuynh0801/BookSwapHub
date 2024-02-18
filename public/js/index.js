
const loginButton = document.querySelector("#login-btn");
const registrationForm = document.querySelector("#reg-form");
const signInTable = document.querySelector("#signin-table");
const signUpButton = document.querySelector("#signup-btn");
const notification = document.querySelector("#notification");
const signIn = document.querySelector("#signin-btn");
signInTable.style.display = "none";



function loginVerification () {
const emailId = document.querySelector("#email");
const password = document.querySelector("#password");
    console.log(emailId);
    console.log(password);

}


// console.log(registrationForm[0]);
const firstName = registrationForm[0];
const lastName = registrationForm[1];
const email = registrationForm[2];
const password = registrationForm[3];
const confirmPassword = registrationForm[4];



function hideRegisterationForm() {
    registrationForm.style.display = 'none';
    signInTable.style.display = 'block';
}
    


function loginVerification() {

    const emailId = document.querySelector('#email').value;
    const passwordId = document.querySelector('#password').value;
    // emailId = 'abutalib56@hotmail.com';
    const loginApi = `http://localhost:3000/user/${emailId}`;

    fetch(loginApi)
    .then(res => res.json())
    .then((data) => {
        if(`${data}` === 'null'){  
            console.log("Enter a valid login");
        } else if(!(`${data.email}` === 'undefined')) {
            if ( Number(passwordId) === Number(data.password)) {
                window.location.href = "/find-book";
            }
            // if(passwordId === data.password) {
            
            // }
        }
    })

    console.log(loginApi);
    
}


function singUpNotes () {
    const notes = document.querySelector('#notification');
    notes.innerText = 'Congrats!';
    notes.style.fontSize = '20px';
    notes.style.color = 'green';
    console.log(notes);
}

signUpButton.addEventListener('click', singUpNotes);

signIn.addEventListener('click', loginVerification);

loginButton.addEventListener("click", hideRegisterationForm);



