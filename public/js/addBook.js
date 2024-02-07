
let form = document.querySelector("#add-book-form");
form.addEventListener("submit", async (event)=>{
    event.preventDefault();
    console.log(form.firstName.value);

    const response = await fetch("http://localhost:3000/api/books", {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify({
            firstName: form.firstName.value,
            lastName: form.lastName.value,
            email: form.email.value
        }), // body data type must match "Content-Type" header
      });


})