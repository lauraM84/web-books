import BookService from "./services/book-service.js";
import { createTextElement } from "./util/ui.js";

const bookService = new BookService();
// console.log(bookService)

bookService.getBooksData().then(books => displayBooks(books))

function displayBooks(books) {
    const container = document.getElementById('books-container');

    container.innerHTML = '';
    console.log(books.length)

    for (let i = 0; i < books.length; i++) {
        const book = books[i];
        const bookContainer = displayBookSummary(book);
        container.appendChild(bookContainer);
    }
}

function displayBookSummary(book) {
    const bookContainer = document.createElement('a');
    bookContainer.classList.add('book-container');
    bookContainer.href = "./detail.html?id=" + book.id;

    /*  const idContainer = createTextElement('p', book.id) */
    const titleContainer = createTextElement('h3', book.title)
    /* const summaryContainer = createTextElement('p', book.summary)
    const subjectsContainer = createTextElement('p', book.subjects) */
    const image = document.createElement('img')
    image.src = book.coverImg

    /*  bookContainer.appendChild(idContainer); */
    bookContainer.appendChild(titleContainer);
    /* bookContainer.appendChild(summaryContainer);
    bookContainer.appendChild(subjectsContainer); */
    bookContainer.appendChild(image);
    return bookContainer;
}


function orderByName() {
    bookService.getBooksByName().then(books => displayBooks(books));
}
window.orderByName = orderByName;

//1) fate la fetch del file json e loggate l'array di libri
//2) create la classe libro e la classe autore
/////-libro: title(string), autors(array di autori), summary(stringa il primo dei summaries, subjects (array di stringhe)), coverImage(stringa-url)
/////-Author: name, yob, yod => calcola età
//3) traducede il dato grezzo in oggetti
//4) create una visualizzazione di schede libro con i dati disponibili
//5) mettete un tasto che permetta di mettere in ordine i libri per titolo
//6) 

