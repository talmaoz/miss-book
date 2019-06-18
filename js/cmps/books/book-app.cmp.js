import bookService from '../../services/book.service.js'
import bookList from './book-list.cmp.js'
import bookFilter from './book-filter.cmp.js'

export default {
    template: `
        <section class="car-app">
            <h1>Book App</h1>
            <car-filter @set-filter="setFilter"></car-filter>
            <car-list :books="booksForDisplay"></car-list>
        </section>
    `,
    data() {
        return {
            filter: null,
            books: bookService.query()
        }
    },
    created() {
        // created
    },
    computed: {
        booksForDisplay() {
            if (!this.filter) return this.books;
            return this.books.filter(book => book.vendor.includes(this.filter.txt))
        }
    },
    methods: {
        setFilter(filter) {
            this.filter = filter
        }
    },
    components: {
        carList: bookList,
        carFilter: bookFilter
    }
}

