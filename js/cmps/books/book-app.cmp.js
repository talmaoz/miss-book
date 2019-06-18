import bookService from '../../services/book.service.js'
import bookList    from './book-list.cmp.js'
import bookFilter  from './book-filter.cmp.js'
import bookDetails from './book-details.cmp.js'

export default {
    template: `
        <section class="book-app">
            <h1>Book App</h1>
            
            <book-filter 
                v-if="!selectedBook"
                @set-filter="setFilter"
            >    
            </book-filter>
            
            <book-list 
                v-if="!selectedBook"
                :books="booksForDisplay"
                @book-selected="setSelectedBook"
            >
            </book-list>
                
            <book-details
                v-if="selectedBook"
                :book="selectedBook"
            >
            </book-details>
        </section>
    `,
    data() {
        return {
            filter: null,
            books: bookService.query(),
            selectedBook: null,
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
            this.selectedBook = selectedBook
            console.log('emitSelectedBook =  ', selectedBook)
        }
    },
    components: {
        bookList,
        bookFilter,
        bookDetails,
    },
    created() {
        // created
    },
}

