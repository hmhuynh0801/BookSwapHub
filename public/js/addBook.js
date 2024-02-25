
let form = document.querySelector("#book-submit-form");
form.addEventListener("submit", async (event) => {
  event.preventDefault();
  console.log({ form });

  const response = await fetch("http://localhost:3000/api/books", {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify({
      firstName: form.firstName.value,
      lastName: form.lastName.value,
      email: form.email.value,
      author: form.author.value,
      bookInterested: form.bookInterested.value,
      isbn: form.isbn.value,
      title: form.title.value,
      edition: form.edition.value,

    }), // body data type must match "Content-Type" header
  }).then(() => alert('Success: book added')).catch((e) => {
    console.error(e)
    alert(e.message)
  });


})

async function getBooks() {

  const response = await fetch("http://localhost:3000/api/books");
  const data = await response.json();
  console.log("books:", data)
}

getBooks();



