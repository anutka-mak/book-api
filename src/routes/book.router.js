import express from 'express';

class BookRouter {
    constructor(bookController) {
        this.bookController = bookController;
    }

    getRouter() {
        const router = express.Router();

        router.get('/', this.bookController.getBooks);
        router.get('/:id', this.bookController.getBookById);
        router.post('/', this.bookController.createBook);
        router.put('/:id', this.bookController.updateBook);
        router.delete('/:id', this.bookController.deleteBook);

        return router;
    }
}

export default BookRouter;
