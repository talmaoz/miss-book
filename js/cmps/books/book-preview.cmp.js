Vue.component('book-preview', {
    props: ['book'],
    template: `
        <li>
            <h6>{{book.title}}</h6>
            <h6>{{book.price}}$</h6>
            <img v-bind:title="book.title" v-bind:src="book.thumbnail" />
        </li>
    `,
    created() {
        console.log("this.book = ", this.book)
    },
})

