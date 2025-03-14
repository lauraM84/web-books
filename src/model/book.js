export default class Book {
    constructor(id, title, authors = [], summary, subjects = [], coverImg) {
        this.id = id;
        this.title = title;
        this.authors = authors;
        this.summary = summary;
        this.subjects = subjects;
        this.coverImg = coverImg;
    }
    compareByName(otherBook) {
        return this.title.localeCompare(otherBook.title)
    }
}

// const author1 = new Author('pippo', 1950, 2000)
// console.log(author1);
// const author2 = new Author('pluto', 1951, null)
// console.log(author2);
// const authors = [author1, author2]
// const subject = ['giallo', 'epica']
// const book1 = new Book(123, 'iliade', authors, 'ciao', subject, 'http://google.com/img1.jgp');
// console.log(book1);