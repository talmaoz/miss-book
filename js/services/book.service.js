import {storageService} from './storage.service.js'
import {utilService} from './util.service.js'

export default {
    query
}

const BOOKS_KEY = 'books';

var booksDB = [];

function query() {
    var books = storageService.load(BOOKS_KEY);
    if (!books) {
        books = generateBooks();
        storageService.store(BOOKS_KEY, books)
    }
    booksDB = books;
    return booksDB;
}




function generateBooks() {
    var books = []
    for (let index = 0; index < 20; index++) {
        var book = createBook()
        books.push(book)

    }
    return books;
}

function createBook() {
    let imgBaseUrl = 'http://coding-academy.org/books-photos/'
    let book = {
        id: utilService.makeId(),
        title: utilService.makeLorem(10),
        publishedDate: utilService.getRandomInt(1900, 2000),
        thumbnail: imgBaseUrl + utilService.getRandomInt(1, 21) + '.jpg',
        price: utilService.getRandomInt(50, 400),
        pages: utilService.getRandomInt(50, 900),
        isOnSale: utilService.getRandomInt(0, 100) > 80,
    }
    return book;
}

