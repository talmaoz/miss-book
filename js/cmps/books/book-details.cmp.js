Vue.component('book-details', {
    props: ['book'],
    template: `
        <div>
            Welcome to boo-details
            <h3>{{book.title}}</h3>
            <h4>{{book.price}}$</h4>
            <img v-bind:title="book.title" v-bind:src="book.thumbnail" />
        </div>
    `,
    created() {
        console.log("this.book = ", this.book)
    },
})

