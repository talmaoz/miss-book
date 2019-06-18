import bookService from '../../services/book.service.js'
import bookList    from './book-list.cmp.js'
import bookFilter  from './book-filter.cmp.js'

export default {
    template: `
        <section class="book-app">
            <h1>Book App</h1>
            <book-filter @set-filter="setFilter"></book-filter>
            <book-list 
                :books="booksForDisplay"
                @book-selected="setSelectedBook"
            >
            </book-list>
        </section>
    `,
    data() {
        return {
            filter: null,
            books: bookService.query(),
            selectedBook: null
        }
    },
    computed: {
        booksForDisplay() {
            if (!this.filter) return this.books;
            return this.books.filter(book => book.title.includes(this.filter.txt))
        }
    },
    methods: {
        setFilter(filter) {
            this.filter = filter
        },
        setSelectedBook(selectedBook) {
            console.log('selectBook in book-app:\n', selectedBook)
        }
    },
    components: {
        bookList,
        bookFilter
    },
    created() {
        // created
    },
}

