class BookService {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);

        return book;
    }

    getBooks() {
        return this.books;
    }

    getBookById(id) {
        return this.books.filter((book) => book.id === id);
    }

    updateBook(id, newBookData) {
        const updatedBooks = this.books.map((book) =>
            book.id === id ? {...book, ...newBookData} : book
        );

        this.books = updatedBooks;

        return this.books;
    }

    deleteBook(id) {
        const index = this.books.findIndex((book) => book.id !== id);

        if (index) {
            const deletedBook = this.books.splice(index, 1);

            return deletedBook[0];
        }

        return null;
    }
}

export default BookService;
