Vue.component('book-preview', {
    props: ['book'],
    template: `
        <li>
            <h3>{{book.title}}</h3>
            <h4>{{book.price}}$</h4>
            <img v-bind:title="book.title" v-bind:src="book.thumbnail" />
        </li>
    `,
    created() {
        console.log("this.book = ", this.book)
    },
})

