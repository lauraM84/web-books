export default class Author {
    constructor(name, yob, yod) {

        this.name = name;
        this.yob = yob;
        this.yod = yod

    }

    getAge() {
        if (this.yob !== null && this.yod !== null) {
            return this.yod - this.yob

        } else if (this.yob !== null && this.yod === null) {
            const now = new Date();
            const actualYear = now.getFullYear();
            const age = actualYear - this.yob;
            return age;
        } else {
            return "n/a"
        }

    }
}


/* const author1 = new Author('pippo', 1950, 2000)
console.log(author1);
const author2 = new Author('pluto', 1951, null)
console.log(author2);
const authors = [author1, author2]
const subject = ['giallo', 'epica']
const book1 = new Book(123, 'iliade', authors, 'ciao', subject, 'http://google.com/img1.jgp');
console.log(book1); */