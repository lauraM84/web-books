import BookService from "./services/book-service";


const queryParams = new Proxy(new URLSearchParams(window.location.search));
console.log(queryParams)

/* const idStringa = ...; */

/* const id = ...;

console.log(id) */


/* const bService = new BookService();

bService.getBookFromId().than(book => renderBook(book))

function renderBook(book) {
    //costruzione libro dettaglio
} */