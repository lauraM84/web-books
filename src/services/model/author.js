class Author {
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


const author1 = new Author("maefd", 1255, 1288);
console.log(author1)
console.log(author1.getAge()) //33

const author2 = new Author("pippo", 1980, null);
console.log(author2)
console.log(author2.getAge()) //45

const author3 = new Author("pluto", null, null);
console.log(author3)
console.log(author3.getAge()) //n/a