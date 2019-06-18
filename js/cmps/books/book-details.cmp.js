Vue.component('book-details', {
    props: ['book'],
    template: `
        <div>
            <h2>Book Details:</h2>
            <h3>{{book.title}}</h3>
            <h4>{{book.price}}$</h4>
            <h4>Published: {{book.publishedDate}}</h4>
            <h4>#Pages: {{book.pages}}</h4>
            <h4 v-if="book.isOnSale">{{saleTxt}}</h4>
            <img v-bind:title="book.title" v-bind:src="book.thumbnail" />
        </div>
    `,
    computed: {
        saleTxt() {
            if (this.book.isOnSale) return "On Sale!!"
            return ''
        },
    },
})

