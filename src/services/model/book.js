class Book {
    constructor(tittle, authors = [], summary, subjects = [], coverImage) {
        this.tittle = tittle;
        this.authors = authors;
        this.summary = summary[0];
        this.subjects = subjects;
        this.coverImage = coverImage;
    }
}