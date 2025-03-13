import BookService from "./services/book-service.js";


const bookService = new BookService();
bookService.getBooksData()

//1) fate la fetch del file json e loggate l'array di libri
//2) create la classe libro e la classe autore
/////-libro: title(string), autors(array di autori), summary(stringa il primo dei summaries, subjects (array di stringhe)), coverImage(stringa-url)
/////-Author: name, yob, yod => calcola età
//3) traducede il dato grezzo in oggetti
//4) create una visualizzazione di schede libro con i dati disponibili
//5) mettete un tasto che permetta di mettere in ordine i libri per titolo

