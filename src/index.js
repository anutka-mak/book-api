import express from 'express';
import bodyParser from 'body-parser';
import BookService from './services/book.service.js';
import BookController from './controllers/book.controller.js';
import BookRouter from './routes/book.router.js';

const app = express();
const port = 4000;

app.use(bodyParser.json());

const bookService = new BookService();
const bookController = new BookController(bookService);
const bookRouter = new BookRouter(bookController);

app.use('/books', bookRouter.getRouter());

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});