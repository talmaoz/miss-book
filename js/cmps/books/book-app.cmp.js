import bookService from '../../services/book.service.js'
import bookList    from './book-list.cmp.js'
import bookFilter  from './book-filter.cmp.js'

export default {
    template: `
        <section class="book-app">
            <h1>Book App</h1>
            <book-filter @set-filter="setFilter"></book-filter>
            <book-list :books="booksForDisplay"></book-list>
        </section>
    `,
    data() {
        return {
            filter: null,
            books: bookService.query()
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

