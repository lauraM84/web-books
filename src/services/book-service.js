
export default class BookService {

    constructor() {
    }

    getBooksData() {

        const booksPromise = fetch("/assets/books.json")
            .then(resp => resp.json())
            .then(jsonData => {

                console.log(jsonData);

            })
            .catch(error => console.log(error))


    }
}


