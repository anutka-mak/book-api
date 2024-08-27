import crypto from 'crypto';

class Book {
    constructor(title, author, year) {
        this.id = crypto.randomUUID();
        this.title = title;
        this.author = author;
        this.year = year;
    }
}

export default Book;
