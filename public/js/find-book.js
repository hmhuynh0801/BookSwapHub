// const isbn = parseFloat(document.querySelector('#search-box').value);
const searchBtn = document.querySelector('#search-btn');
const clearBtn = document.querySelector('#clear-btn');
// console.log(isbn);
// console.log(searchBtn);
const ul = document.getElementById('bookList');
// const findBookApi = `http://localhost:3000/api/books/${isbn}`;

function clearResult() {
    ul.innerHTML = "";
}

function clearSearchBox() {
    document.querySelector('#search-box').value = '';
}



function searchBook() {
    // event.preventDefault();
    clearResult();
    const isbn = document.querySelector('#search-box').value;
    const findBookApi = `http://localhost:3000/api/books/${isbn}`;
    console.log(isbn);

    if (['', undefined, null].includes(isbn)) { //alert the user to enter a valid isbn

        const nullValue = document.createElement('li');
        nullValue.textContent = "Please enter a valid isbn";
        ul.appendChild(nullValue);
        return;

    }

    // call the backend and send the isbn 
    fetch(findBookApi)

        .then(res => res.json())// convert response to json
        .then((/** @type {Array<{}>}*/data) => {

            if (!data?.length) {
                const notFound = document.createElement('li');
                return notFound.textContent = "Sorry, the book not found!"

                ul.appendChild(notFound);
                return;
            }

            data = data[0]

            const bookInfoLi = document.createElement('li');
            bookInfoLi.textContent = " ====( Book Info )====";

            const bookTitleLi = document.createElement('li');
            bookTitleLi.textContent = "Book Title" + ": " + data.title;



            const isbnLi = document.createElement('li');
            isbnLi.textContent = "Book's ISBN" + ": " + data.isbn;


            const editionLi = document.createElement('li');
            editionLi.textContent = "Edition" + ": " + data.edition;

            const authorLi = document.createElement('li');
            authorLi.textContent = "Book's Author" + ": " + data.author;

            const ownerInfoLi = document.createElement('li');
            ownerInfoLi.textContent = " ====( Owner Info )====";

            const firstnameLi = document.createElement('li');
            firstnameLi.textContent = "First name" + ": " + data.firstName;

            const lastnameLi = document.createElement('li');
            lastnameLi.textContent = "Last name" + ": " + data.lastName;

            const emailLi = document.createElement('li');
            emailLi.textContent = "Email" + ": " + data.email;

            const lookingForLi = document.createElement('li');
            lookingForLi.textContent = "Book/s interested in " + ": " + data.bookInterested;


            ul.appendChild(bookInfoLi);
            ul.appendChild(bookTitleLi);
            ul.appendChild(isbnLi);
            ul.appendChild(authorLi);
            ul.appendChild(ownerInfoLi);
            ul.appendChild(firstnameLi);
            ul.appendChild(lastnameLi);
            ul.appendChild(emailLi);
            ul.appendChild(lookingForLi);

        }).finally(() => clearSearchBox())



    // console.log(data._id);
    // console.log(data.firstname);
}





clearBtn.addEventListener('click', clearSearchBox);
searchBtn.addEventListener('click', searchBook);