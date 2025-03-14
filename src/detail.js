import BookService from "./services/book-service.js";
import { createTextElement } from "./util/ui.js";


const queryParams = new URLSearchParams(window.location.search);
const id = parseInt(queryParams.get('id'));


const bookService = new BookService();
bookService.getBookFromId(id).then(book => renderBook(book));

function renderBook(book) {
    console.log(book);
    const bookContainer = document.getElementById('book-container');

    const idContainer = createTextElement('p', book.id)
    const titleContainer = createTextElement('h3', book.title)
    const summaryContainer = createTextElement('p', book.summary)
    const subjectsContainer = createTextElement('p', book.subjects)
    const image = document.createElement('img')
    image.src = book.coverImg

    bookContainer.appendChild(idContainer);
    bookContainer.appendChild(titleContainer);
    bookContainer.appendChild(summaryContainer);
    bookContainer.appendChild(subjectsContainer);
    bookContainer.appendChild(image);
}





/* const idStringa = ...; */

/* const id = ...;

console.log(id) */


/* const bService = new BookService();

bService.getBookFromId().than(book => renderBook(book))

function renderBook(book) {
    //costruzione libro dettaglio
} */