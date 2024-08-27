import Book from '../entities/book.entity.js';

class BookController {
    constructor(bookService) {
        this.bookService = bookService;
    }

    createBook = (req, res) => {
        const title = req.body.title;
        const author = req.body.author;
        const year = req.body.year;

        const book = new Book(title, author, year);
        const createdBook = this.bookService.addBook(book);

        return res.status(200).json(createdBook);
    };

    getBooks = (_, res) => {
        const books = this.bookService.getBooks();

        return res.status(200).json(books);
    };

    getBookById = (req, res) => {
        const { id } = req.params;
        const book = this.bookService.getBookById(id);

        if (book) {
            return res.status(200).json(book);
        }

        return res.status(404).json({ message: 'Book not found' });
    };

    updateBook = (req, res) => {
        const { id } = req.params;
        const updatedBook = this.bookService.updateBook(id, req.body);

        if (updatedBook) {
            return res.status(200).json(updatedBook);
        }

        return res.status(404).json({ message: 'Book not found' });
    };

    deleteBook = (req, res) => {
        const { id } = req.params;
        const deletedBook = this.bookService.deleteBook(id);

        if (deletedBook) {
            return res.status(200).json(deletedBook);
        }

        return res.status(404).json({ message: 'Book not found' });
    };
}

export default BookController;
