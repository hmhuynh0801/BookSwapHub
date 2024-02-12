// const isbn = parseFloat(document.querySelector('#search-box').value);
const searchBtn = document.querySelector('#search-btn');
// console.log(isbn);
// console.log(searchBtn);
const ul = document.getElementById('bookList');
// const findBookApi = `http://localhost:3000/book/${isbn}`;

function clearResult() {
    ul.innerHTML = "";
}

function searchBook() {
    // event.preventDefault();
    clearResult();
    const isbn = document.querySelector('#search-box').value;
    const findBookApi = `http://localhost:3000/book/${isbn}`;   
    console.log(isbn);       
    fetch(findBookApi)
    .then(res => res.json())
    .then((data) => {

        console.log(`${data}` === 'null');
            if(`${data}` === 'null'){  

                const nullValue = document.createElement('li');
                nullValue.textContent = "Please enter a valid isbn";
                ul.appendChild(nullValue);

            } else if(!(`${data.isbn}` === 'undefined')) {
                const bookInfoLi = document.createElement('li');
                bookInfoLi.textContent = " ====( Book Info )====";

                const bookTitleLi = document.createElement('li');
                bookTitleLi.textContent = "Book Title" +": " + data.title;

                const isbnLi = document.createElement('li');
                isbnLi.textContent = "Book's ISBN" +": " + data.isbn;


                const editionLi = document.createElement('li');
                editionLi.textContent = "Edition" + ": " + data.edition;
                
                const authorLi = document.createElement('li');
                authorLi.textContent = "Book's Author" +": " + data.author;
                
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


            } else {

                const notFound = document.createElement('li');
                notFound.textContent = "Sorry, the book not found!"

                ul.appendChild(notFound);
            }
    })
    

        
        // console.log(data._id);
        // console.log(data.firstname);
    }

searchBtn.addEventListener('click', searchBook);